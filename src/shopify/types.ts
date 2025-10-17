// Shopify Storefront API Types

export interface ShopifyImage {
  url: string
  altText?: string
  width?: number
  height?: number
}

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface ShopifyProductVariant {
  id: string
  title: string
  price: ShopifyMoney
  compareAtPrice?: ShopifyMoney
  availableForSale: boolean
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  featuredImage?: ShopifyImage
  images: {
    edges: Array<{
      node: ShopifyImage
    }>
  }
  variants: {
    edges: Array<{
      node: ShopifyProductVariant
    }>
  }
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface ShopifyBlogPost {
  id: string
  handle: string
  title: string
  content: string
  contentHtml: string
  excerpt?: string
  image?: ShopifyImage
  publishedAt: string
  tags: string[]
  author: {
    firstName: string
    lastName: string
    displayName: string
  }
  blog: {
    id: string
    handle: string
    title: string
  }
}

// GraphQL Response Types
export interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct
    }>
  }
}

export interface ShopifyBlogPostsResponse {
  blog: {
    articles: {
      edges: Array<{
        node: ShopifyBlogPost
      }>
    }
  }
}

// Unified content interface for the carousel component
export interface CarouselItem {
  id: string
  title: string
  url: string
  image?: {
    src: string
    alt: string
    aspectRatio?: number
  }
  price?: string
  compareAtPrice?: string
  excerpt?: string
  date?: string
  author?: string
  tags?: string[]
  type: 'product' | 'blog'
}

export interface CarouselSettings {
  title?: string
  backgroundColor?: string
  addBoxShadow: boolean
  itemLimit: number
  shopLinkText?: string
  primaryButton?: boolean
  noTopPadding?: boolean
  noBottomPadding?: boolean
  invert?: boolean
  infinite?: boolean
}

// Shopify Storefront API Configuration
export interface ShopifyConfig {
  domain: string
  storefrontAccessToken: string
  apiVersion?: string
}
