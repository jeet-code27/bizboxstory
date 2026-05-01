const WP_API_URL = 'https://cms.bizboxstory.com/wp-json/wp/v2';

// Custom fetch wrapper with retry logic to handle connect timeouts during build
async function fetchWithRetry(url, options = {}, retries = 7) {
  for (let i = 0; i < retries; i++) {
    try {
      // Create an AbortController for a custom 30s timeout
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 30000);
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (err) {
      const isLastAttempt = i === retries - 1;
      if (isLastAttempt) throw err;
      console.warn(`[CMS Fetch] Attempt ${i + 1} failed for ${url}. Retrying... (${err.message})`);
      // Exponential backoff with jitter to prevent thundering herd
      const jitter = Math.floor(Math.random() * 2000);
      const delay = 3000 * Math.pow(1.5, i) + jitter;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export const fixLinks = (content) => {
  if (!content) return content;
  return content.replace(
    /https?:\/\/cms\.bizboxstory\.com/g,
    'https://bizboxstory.com'
  );
};

export async function getAllPosts() {
  const res = await fetchWithRetry(`${WP_API_URL}/posts?_fields=slug&per_page=100`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export async function getPostsPaginated(page = 1, perPage = 9) {
  const res = await fetchWithRetry(`${WP_API_URL}/posts?_embed=true&per_page=${perPage}&page=${page}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    if (res.status === 400) return { posts: [], totalPages: 0 };
    throw new Error('Failed to fetch posts');
  }
  const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
  const posts = await res.json();
  
  // Fix internal links
  posts.forEach(post => {
    if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
    if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
  });
  
  return { posts, totalPages };
}

export async function getPostBySlug(slug) {
  const res = await fetchWithRetry(`${WP_API_URL}/posts?slug=${slug}&_embed=true`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  const posts = await res.json();
  const post = posts.length > 0 ? posts[0] : null;
  
  // Fix internal links
  if (post) {
    if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
    if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
  }
  
  return post;
}

export async function getCategories() {
  const res = await fetchWithRetry(`${WP_API_URL}/categories?hide_empty=true&per_page=15`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export async function getRecentPosts(limit = 4) {
  const res = await fetchWithRetry(`${WP_API_URL}/posts?_embed=true&per_page=${limit}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch recent posts');
  }
  return res.json();
}

export function getFeaturedImageUrl(post) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

export async function getCategoryBySlug(slug) {
  const res = await fetchWithRetry(`${WP_API_URL}/categories?slug=${slug}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch category');
  }
  const categories = await res.json();
  return categories.length > 0 ? categories[0] : null;
}

export async function getPostsByCategoryPaginated(categoryId, page = 1, perPage = 9) {
  const res = await fetchWithRetry(`${WP_API_URL}/posts?categories=${categoryId}&_embed=true&per_page=${perPage}&page=${page}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    if (res.status === 400) return { posts: [], totalPages: 0 };
    throw new Error('Failed to fetch posts for category');
  }
  const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
  const posts = await res.json();
  
  // Fix internal links
  posts.forEach(post => {
    if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
    if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
  });
  
  return { posts, totalPages };
}
