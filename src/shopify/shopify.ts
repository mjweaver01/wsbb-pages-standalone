import type {
  ShopifyConfig,
  ShopifyProduct,
  ShopifyBlogPost,
  ShopifyProductsResponse,
  ShopifyBlogPostsResponse,
  CarouselItem,
} from './types'
import { PRODUCTS_QUERY, BLOG_POSTS_QUERY } from './constants'

// Default Shopify configuration - should be set via environment variables
const defaultConfig: ShopifyConfig = {
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN || '',
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
  apiVersion: '2025-01',
}

/**
 * Base function to make requests to Shopify Storefront API
 */
async function shopifyFetch<T>(
  query: string,
  variables: Record<string, any> = {},
  config: Partial<ShopifyConfig> = {}
): Promise<T> {
  const { domain, storefrontAccessToken, apiVersion } = { ...defaultConfig, ...config }

  if (!domain || !storefrontAccessToken) {
    throw new Error('Shopify domain and storefront access token are required')
  }

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`)
  }

  const json = await response.json()

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`)
  }

  return json.data
}

/**
 * Fetch products from Shopify Storefront API
 */
export async function fetchProducts(
  options: {
    first?: number
    sortKey?:
      | 'TITLE'
      | 'PRICE'
      | 'BEST_SELLING'
      | 'CREATED_AT'
      | 'ID'
      | 'RELEVANCE'
      | 'UPDATED_AT'
      | 'VENDOR'
    reverse?: boolean
    query?: string
    config?: Partial<ShopifyConfig>
  } = {}
): Promise<ShopifyProduct[]> {
  const { first = 20, sortKey = 'CREATED_AT', reverse = true, query, config } = options

  try {
    const data: ShopifyProductsResponse = await shopifyFetch(
      PRODUCTS_QUERY,
      { first, sortKey, reverse, query },
      config
    )

    return data.products.edges.map(edge => edge.node)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

/**
 * Fetch blog posts from Shopify Storefront API
 */
export async function fetchBlogPosts(
  options: {
    blogHandle: string
    first?: number
    sortKey?: 'AUTHOR' | 'ID' | 'PUBLISHED_AT' | 'RELEVANCE' | 'TITLE' | 'UPDATED_AT'
    reverse?: boolean
    config?: Partial<ShopifyConfig>
  } = { blogHandle: 'news' }
): Promise<ShopifyBlogPost[]> {
  const { blogHandle, first = 20, sortKey = 'PUBLISHED_AT', reverse = true, config } = options

  try {
    const data: ShopifyBlogPostsResponse = await shopifyFetch(
      BLOG_POSTS_QUERY,
      { blogHandle, first, sortKey, reverse },
      config
    )

    return data.blog.articles.edges.map(edge => edge.node)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/**
 * Convert Shopify product to carousel item
 */
export function productToCarouselItem(product: ShopifyProduct): CarouselItem {
  const variant = product.variants.edges[0]?.node
  const price = variant?.price || product.priceRange.minVariantPrice
  const compareAtPrice = variant?.compareAtPrice || product.compareAtPriceRange.minVariantPrice

  return {
    id: product.id,
    title: product.title,
    url: `/products/${product.handle}`,
    image: product.featuredImage
      ? {
          src: product.featuredImage.url,
          alt: product.featuredImage.altText || product.title,
          aspectRatio:
            product.featuredImage.width && product.featuredImage.height
              ? product.featuredImage.width / product.featuredImage.height
              : undefined,
        }
      : undefined,
    price: formatMoney(price),
    compareAtPrice:
      compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price.amount)
        ? formatMoney(compareAtPrice)
        : undefined,
    type: 'product',
  }
}

/**
 * Convert Shopify blog post to carousel item
 */
export function blogPostToCarouselItem(post: ShopifyBlogPost): CarouselItem {
  return {
    id: post.id,
    title: post.title,
    url: `/blogs/${post.blog.handle}/${post.handle}`,
    image: post.image
      ? {
          src: post.image.url,
          alt: post.image.altText || post.title,
          aspectRatio:
            post.image.width && post.image.height
              ? post.image.width / post.image.height
              : undefined,
        }
      : undefined,
    excerpt: post.excerpt || undefined,
    date: post.publishedAt,
    author: `${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || 'Anonymous',
    tags: post.tags || [],
    type: 'blog',
  }
}

/**
 * Format Shopify money object to display string
 */
function formatMoney(money: { amount: string; currencyCode: string }): string {
  const amount = parseFloat(money.amount)

  // Simple USD formatting - you might want to expand this for other currencies
  if (money.currencyCode === 'USD') {
    return amount.toFixed(2)
  }

  // For other currencies, you might want to use Intl.NumberFormat
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: money.currencyCode,
  })
    .format(amount)
    .replace(/^\$/, '') // Remove $ symbol to add it in template
}

/**
 * Fetch and format products for carousel
 */
export async function fetchProductsForCarousel(
  options: Parameters<typeof fetchProducts>[0] = {}
): Promise<CarouselItem[]> {
  const products = await fetchProducts(options)
  return products.map(productToCarouselItem)
}

/**
 * Fetch and format blog posts for carousel
 */
export async function fetchBlogPostsForCarousel(
  options: Parameters<typeof fetchBlogPosts>[0]
): Promise<CarouselItem[]> {
  const posts = await fetchBlogPosts(options)
  return posts.map(blogPostToCarouselItem)
}
