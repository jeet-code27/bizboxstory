const WP_API_URL = 'https://cms.bizboxstory.com/wp-json/wp/v2';

const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; BizBoxStoryBot/1.0; +https://bizboxstory.com)',
  'Accept': 'application/json',
};

export const fixLinks = (content) => {
  if (!content) return content;
  return content
    .replace(/https?:\/\/cms\.bizboxstory\.com/g, 'https://bizboxstory.com')
    .replace(/https?:\/\/(www\.)?bizboxstory\.in/g, 'https://bizboxstory.com');
};

async function fetchWP(url, options = {}, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          ...DEFAULT_HEADERS,
          ...(options.headers || {}),
        },
        next: { revalidate: 3600, ...(options.next || {}) },
      });

      if (res.ok || res.status === 400 || res.status === 404) {
        return res;
      }

      // Retry on transient status codes like 403, 429, 500, 502, 503, 504
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
      } else {
        return res;
      }
    } catch (err) {
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
      } else {
        console.error(`FetchWP error for ${url}:`, err.message);
        return null;
      }
    }
  }
  return null;
}

export async function getAllPosts() {
  try {
    const res = await fetchWP(`${WP_API_URL}/posts?_fields=slug&per_page=100`);
    if (!res || !res.ok) {
      console.warn(`getAllPosts failed with status: ${res?.status}`);
      return [];
    }
    return res.json();
  } catch (err) {
    console.error('Error in getAllPosts:', err.message);
    return [];
  }
}

export async function getPostsPaginated(page = 1, perPage = 9) {
  try {
    const res = await fetchWP(`${WP_API_URL}/posts?_embed=true&per_page=${perPage}&page=${page}`);
    if (!res || !res.ok) {
      if (res?.status === 400) return { posts: [], totalPages: 0 };
      console.warn(`getPostsPaginated failed with status: ${res?.status}`);
      return { posts: [], totalPages: 0 };
    }
    const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
    const posts = await res.json();

    if (Array.isArray(posts)) {
      posts.forEach(post => {
        if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
        if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
      });
      return { posts, totalPages };
    }
    return { posts: [], totalPages: 0 };
  } catch (err) {
    console.error('Error in getPostsPaginated:', err.message);
    return { posts: [], totalPages: 0 };
  }
}

export async function getPostBySlug(slug) {
  try {
    const res = await fetchWP(`${WP_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!res || !res.ok) {
      console.warn(`getPostBySlug failed for slug '${slug}', status: ${res?.status}`);
      return null;
    }
    const posts = await res.json();
    const post = Array.isArray(posts) && posts.length > 0 ? posts[0] : null;

    if (post) {
      if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
      if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
    }

    return post;
  } catch (err) {
    console.error(`Error in getPostBySlug for '${slug}':`, err.message);
    return null;
  }
}

export async function getCategories() {
  try {
    const res = await fetchWP(`${WP_API_URL}/categories?hide_empty=true&per_page=15`);
    if (!res || !res.ok) {
      console.warn(`getCategories failed with status: ${res?.status}`);
      return [];
    }
    return res.json();
  } catch (err) {
    console.error('Error in getCategories:', err.message);
    return [];
  }
}

export async function getRecentPosts(limit = 4) {
  try {
    const res = await fetchWP(`${WP_API_URL}/posts?_embed=true&per_page=${limit}`);
    if (!res || !res.ok) {
      console.warn(`getRecentPosts failed with status: ${res?.status}`);
      return [];
    }
    return res.json();
  } catch (err) {
    console.error('Error in getRecentPosts:', err.message);
    return [];
  }
}

export function getFeaturedImageUrl(post) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

export async function getCategoryBySlug(slug) {
  try {
    const res = await fetchWP(`${WP_API_URL}/categories?slug=${slug}`);
    if (!res || !res.ok) {
      console.warn(`getCategoryBySlug failed for '${slug}', status: ${res?.status}`);
      return null;
    }
    const categories = await res.json();
    return Array.isArray(categories) && categories.length > 0 ? categories[0] : null;
  } catch (err) {
    console.error(`Error in getCategoryBySlug for '${slug}':`, err.message);
    return null;
  }
}

export async function getPostsByCategoryPaginated(categoryId, page = 1, perPage = 9) {
  try {
    const res = await fetchWP(`${WP_API_URL}/posts?categories=${categoryId}&_embed=true&per_page=${perPage}&page=${page}`);
    if (!res || !res.ok) {
      if (res?.status === 400) return { posts: [], totalPages: 0 };
      console.warn(`getPostsByCategoryPaginated failed for category ${categoryId}, status: ${res?.status}`);
      return { posts: [], totalPages: 0 };
    }
    const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '1', 10);
    const posts = await res.json();

    if (Array.isArray(posts)) {
      posts.forEach(post => {
        if (post.content?.rendered) post.content.rendered = fixLinks(post.content.rendered);
        if (post.excerpt?.rendered) post.excerpt.rendered = fixLinks(post.excerpt.rendered);
      });
      return { posts, totalPages };
    }
    return { posts: [], totalPages: 0 };
  } catch (err) {
    console.error(`Error in getPostsByCategoryPaginated for category ${categoryId}:`, err.message);
    return { posts: [], totalPages: 0 };
  }
}
