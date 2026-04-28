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
      title: 'Post Not Found | BizBox Story',
    };
  }

  const featuredImage = getFeaturedImageUrl(post);
  
  // Clean up HTML tags and decode entities
  let cleanTitle = post.title.rendered.replace(/<[^>]+>/g, '').trim();
  cleanTitle = decodeHtmlEntities(cleanTitle);
  
  let cleanDescription = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim();
  cleanDescription = decodeHtmlEntities(cleanDescription).substring(0, 160);
  
  const canonicalUrl = `https://bizboxstory.com/${slug}`;

  return {
    title: `${cleanTitle} | BizBox Story`,
    description: cleanDescription,
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
  const authorName = post._embedded?.author?.[0]?.name || 'BizBox Story';
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
