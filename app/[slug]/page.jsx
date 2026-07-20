import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug, getFeaturedImageUrl } from '@/lib/wordpress';
import { FiCalendar, FiUser, FiArrowLeft } from 'react-icons/fi';
import BlogSidebar from '@/components/BlogSidebar';

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (e) {
    return [];
  }
}

function decodeHtmlEntities(text) {
  if (!text) return '';
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&hellip;': '...',
    '&#8230;': '...',
    '&nbsp;': ' '
  };
  return text.replace(/&[#\w]+;/g, match => entities[match] || match);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const featuredImage = getFeaturedImageUrl(post);
  
  // Clean up HTML tags and decode entities
  let cleanTitle = post.title.rendered.replace(/<[^>]+>/g, '').trim();
  cleanTitle = decodeHtmlEntities(cleanTitle);
  
  // Generate a better description
  let rawExcerpt = post.excerpt?.rendered || '';
  let cleanDescription = rawExcerpt.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  cleanDescription = decodeHtmlEntities(cleanDescription);
  // Remove WordPress's default [...] at the end
  cleanDescription = cleanDescription.replace(/\[\s*\.\.\.\s*\]/g, '').replace(/\s*\.\.\.$/, '').trim();

  // If excerpt is too short, try taking from content
  if (cleanDescription.length < 120 && post.content?.rendered) {
    let contentDesc = post.content.rendered.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    cleanDescription = decodeHtmlEntities(contentDesc);
  }

  // Truncate to recommended SEO length (around 160 chars)
  if (cleanDescription.length > 160) {
    cleanDescription = cleanDescription.substring(0, 157).trim() + '...';
  }
  
  const canonicalUrl = `https://bizboxstory.com/${slug}`;

  return {
    title: cleanTitle,
    description: cleanDescription,
    authors: [{ name: 'Shay Mehta', url: 'https://shaymehta.com' }],
    publisher: 'BizBox Story',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: canonicalUrl,
      images: featuredImage ? [{ url: featuredImage }] : [],
      type: 'article',
      authors: ['Shay Mehta'],
      siteName: 'BizBox Story',
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);
  const authorName = 'Shay Mehta';
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="min-h-screen bg-brand-surface pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/blogs" className="inline-flex items-center text-brand-gold font-dm font-bold hover:text-brand-gold-light transition-colors mb-8">
          <FiArrowLeft className="mr-2" /> Back to all articles
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-8/12">
             {/* Post Header */}
             <header className="mb-12">
          <h1 
            className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          
          <div className="flex flex-wrap items-center gap-6 font-dm text-gray-500 text-sm border-y border-brand-border py-4">
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-brand-gold" />
              <span>By <strong className="text-brand-ink">{authorName}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-brand-gold" />
              <span>{date}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full aspect-[16/9] mb-16 rounded-3xl overflow-hidden shadow-xl border border-brand-border">
            <Image 
              src={featuredImage} 
              alt={post.title.rendered.replace(/<[^>]+>/g, '') || 'Featured image'} 
              fill 
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        {/* Added custom descendant classes to style the raw HTML provided by WP */}
        <div 
          className="max-w-none text-gray-600 font-dm leading-relaxed text-lg [&_h2]:font-fraunces [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-brand-blue-deep [&_h2]:mt-10 [&_h2]:mb-6 [&_h3]:font-fraunces [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-brand-blue-deep [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_a]:text-brand-gold hover:[&_a]:text-brand-gold-light [&_a]:underline [&_a]:transition-colors [&_a]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-brand-gold [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_strong]:text-brand-ink [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-8 [&_img]:w-full [&_img]:h-auto"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Author Bio Section */}
        <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl border border-brand-border shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="font-fraunces text-2xl font-bold text-brand-blue-deep mb-2">About Shay Mehta</h3>
            <p className="text-brand-gold font-dm font-bold text-sm mb-6 uppercase tracking-wider">Founder, CEO &amp; Author, BizBox Story</p>
            
            <div className="space-y-4 text-gray-600 font-dm text-[15px] leading-relaxed">
              <p>
                Shay Mehta is the Founder &amp; CEO of BizBox Story, a digital marketing agency built specifically for US businesses operating in restricted, underserved, and hard-to-market niches — cannabis dispensaries, pest control companies, chiropractic practices, and home services. Under Shay&apos;s leadership, BizBox Story&apos;s delivery team has taken clients from page three to page one of Google in as little as 60 days, and helped dispensary clients generate $45,000+ in monthly organic revenue with triple-digit traffic growth.
              </p>
              <p>
                Shay&apos;s path into marketing runs through nearly two decades inside the US and Indian financial services industry. Having lived in the United States for 18 years and completed his education at the University of Massachusetts, Shay went on to hold senior leadership roles at two of the largest names in life insurance: serving as National Head at Max New York Life and later as Director at MetLife India. That career — built on disciplined strategy, large-scale client relationships, and navigating heavily regulated markets — gives Shay a rare vantage point on what it actually takes for a business to earn trust and visibility in the US, especially in categories where traditional advertising doors are closed.
              </p>
              <p>
                Today, Shay channels that experience into building BizBox Story&apos;s proof-first, no-lock-in approach to SEO and digital marketing. Shay is also the voice behind <a href="https://www.instagram.com/sayitlikeshay" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-light font-bold underline transition-colors">@sayitlikeshay</a>, a rapidly growing Instagram account with 50,000+ followers and an exceptionally high engagement rate, where he shares direct, unfiltered takes on current affairs, marketing and sales.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="https://shaymehta.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue-deep text-white font-dm font-bold text-sm rounded-full hover:bg-brand-blue transition-colors shadow-md hover:shadow-lg"
              >
                Visit ShayMehta.com
              </a>
              <a 
                href="https://www.instagram.com/sayitlikeshay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-ink font-dm font-bold text-sm rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
        
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-4/12">
            <BlogSidebar currentCategoryId={post.categories?.[0]} />
          </div>

        </div>
        
      </div>
    </article>
  );
}
