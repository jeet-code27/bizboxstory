const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '../app/services');
const services = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

services.forEach(service => {
  const pagePath = path.join(servicesDir, service, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if it already has array
    if (content.includes('JSON.stringify([')) {
      console.log(`Skipping ${service}, already has array schema.`);
      return;
    }
    
    let serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    let description = "Professional digital marketing services by BizBox Story.";
    
    const layoutPath = path.join(servicesDir, service, 'layout.tsx');
    if (fs.existsSync(layoutPath)) {
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');
      const descMatch = layoutContent.match(/description:\s*"([^"]+)"/);
      if (descMatch) {
        description = descMatch[1];
      }
      const titleMatch = layoutContent.match(/title:\s*"([^"]+)"/);
      if (titleMatch) {
         serviceName = titleMatch[1].split('|')[0].trim();
      }
    }

    const replacement = `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${serviceName}",
              "provider": {
                "@type": "Organization",
                "name": "BizBox Story",
                "url": "https://bizboxstory.com"
              },
              "description": "${description}"
            }
          ]),
        }}
      />`;

    // Try to match the exact block
    const oldScriptRegex = /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s+__html:\s+JSON\.stringify\(\{\s+"@context":\s+"https:\/\/schema\.org",\s+"@type":\s+"FAQPage",\s+mainEntity:\s+faqs\.map\(\(f\)\s+=>\s+\(\{\s+"@type":\s+"Question",\s+name:\s+f\.q,\s+acceptedAnswer:\s+\{\s+"@type":\s+"Answer",\s+text:\s+f\.a\s+\},\s+\}\)\),\s+\}\),\s+\}\}\s+\/>/m;
    
    if (oldScriptRegex.test(content)) {
      content = content.replace(oldScriptRegex, replacement);
      fs.writeFileSync(pagePath, content);
      console.log(`Updated ${service}`);
    } else {
      console.log(`Regex did not match for ${service}`);
    }
  }
});
