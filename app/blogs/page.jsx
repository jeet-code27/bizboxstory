import Link from 'next/link';
import Image from 'next/image';
import { getPostsPaginated, getFeaturedImageUrl } from '@/lib/wordpress';
import { FiArrowRight, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const metadata = {
  title: "Digital Marketing Blog | SEO Tips, Ads & Growth Insights",
  description: "Discover practical tips on SEO, content marketing, paid ads, and online growth to help your business attract more traffic and customers.",
  keywords: ["digital marketing blog", "SEO tips", "content marketing insights", "paid ads", "online growth"],
  authors: [{ name: "shay mehta" }],
  publisher: "shay mehta",
  alternates: {
    canonical: "https://bizboxstory.com/blogs",
  },
};

export default async function BlogListingPage({ searchParams }) {
  // Await searchParams for correct Next.js 15+ resolution
  const resolvedParams = await searchParams;
  const currentPage = parseInt(resolvedParams?.page || '1', 10);

  let posts = [];
  let totalPages = 1;

  try {
    const data = await getPostsPaginated(currentPage, 9);
    posts = data.posts;
    totalPages = data.totalPages;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }

  return (
    <div className="min-h-screen bg-brand-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-dm text-brand-gold text-sm uppercase tracking-widest font-semibold mb-4 bg-brand-gold/10 px-4 py-1.5 rounded-full">
            Our Insights
          </span>
          <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-deep leading-tight">
            The BizBox Story <span className="text-brand-gold italic">Blog</span>
          </h1>
          <p className="mt-6 font-dm text-lg text-gray-600 leading-relaxed">
            Discover the latest trends, strategies, and actionable advice to supercharge your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.length > 0 ? posts.map((post) => {
            const featuredImage = getFeaturedImageUrl(post);
            const date = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <Link href={`/${post.slug}`} className="block relative h-60 overflow-hidden bg-gray-100">
                  {featuredImage ? (
                    <Image 
                      src={featuredImage} 
                      alt={post.title.rendered.replace(/<[^>]+>/g, '') || 'Blog featured image'} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-dm">
                      Read Article
                    </div>
                  )}
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-brand-gold text-sm font-dm mb-4">
                    <FiCalendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>
                  <Link href={`/${post.slug}`} className="block mb-4">
                    <h2 
                      className="font-fraunces text-2xl font-bold text-brand-blue-deep group-hover:text-brand-gold transition-colors line-clamp-2" 
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                    />
                  </Link>
                  <div 
                    className="font-dm text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link href={`/${post.slug}`} className="inline-flex items-center font-dm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors mt-auto">
                    Read More <FiArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          }) : (
             <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 font-dm text-gray-500">
               No blog posts found on this page.
             </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            {currentPage > 1 ? (
              <Link 
                href={`/blogs?page=${currentPage - 1}`}
                className="flex items-center gap-2 font-dm font-semibold text-brand-blue-deep bg-white border border-brand-border px-5 py-3 rounded-full hover:bg-brand-muted hover:text-brand-gold transition-colors shadow-sm"
              >
                <FiChevronLeft /> Previous
              </Link>
            ) : (
              <span className="flex items-center gap-2 font-dm font-semibold text-gray-400 bg-gray-50 border border-gray-200 px-5 py-3 rounded-full cursor-not-allowed">
                <FiChevronLeft /> Previous
              </span>
            )}
            
            <span className="font-dm font-medium text-brand-ink">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link 
                href={`/blogs?page=${currentPage + 1}`}
                className="flex items-center gap-2 font-dm font-semibold text-brand-blue-deep bg-white border border-brand-border px-5 py-3 rounded-full hover:bg-brand-muted hover:text-brand-gold transition-colors shadow-sm"
              >
                Next <FiChevronRight />
              </Link>
            ) : (
              <span className="flex items-center gap-2 font-dm font-semibold text-gray-400 bg-gray-50 border border-gray-200 px-5 py-3 rounded-full cursor-not-allowed">
                Next <FiChevronRight />
              </span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
