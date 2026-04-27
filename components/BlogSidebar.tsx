import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiMessageSquare } from 'react-icons/fi';
import { getCategories, getRecentPosts, getFeaturedImageUrl } from '@/lib/wordpress';

export default async function BlogSidebar({ currentCategoryId }: { currentCategoryId?: number }) {
  let categories = [];
  let recentPosts = [];

  try {
    const [catsRes, postsRes] = await Promise.all([
      getCategories(),
      getRecentPosts(4)
    ]);
    categories = catsRes;
    recentPosts = postsRes;
  } catch (err) {
    console.error("Error fetching sidebar data:", err);
  }

  return (
    <aside className="w-full space-y-8">
      {/* Author Profile */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center shadow-sm">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4 overflow-hidden relative">
          {/* Fallback to simple placeholder icon or geometric shape */}
          <svg className="w-16 h-16 text-white mt-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-fraunces font-bold text-xl text-brand-ink">BizBoxStory</h3>
      </div>



      {/* Categories */}
      {categories.length > 0 && (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="font-fraunces font-bold text-lg mb-6 text-brand-ink">All Categories</h4>
          <ul className="space-y-3">
            {categories.map((cat: any) => {
              const isActive = cat.id === currentCategoryId;
              return (
                <li key={cat.id} className="flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-brand-gold' : 'bg-gray-400'}`}></span>
                  <Link 
                    href={`/category/${cat.slug}`} 
                    className={`font-dm text-sm transition-colors ${isActive ? 'text-brand-gold font-semibold' : 'text-gray-600 hover:text-brand-gold'}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Recent Blogs */}
      {recentPosts.length > 0 && (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="font-fraunces font-bold text-lg mb-6 text-brand-ink uppercase text-sm tracking-wider">Recent Blog</h4>
          <div className="space-y-6">
            {recentPosts.map((post: any) => {
              const featImg = getFeaturedImageUrl(post);
              return (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-100">
                    {featImg ? (
                      <Image 
                        src={featImg} 
                        alt="Thumbnail" 
                        fill 
                        sizes="64px"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">Img</div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 justify-center">
                    <Link href={`/${post.slug}`}>
                      <h5 
                        className="font-fraunces font-bold text-xs uppercase leading-snug text-brand-ink group-hover:text-brand-gold transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </Link>
                    <div className="flex items-center gap-1.5 mt-2 text-gray-400 text-[10px] font-dm uppercase">
                      <FiMessageSquare className="w-3 h-3" />
                      <span>0 Comment</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
}
