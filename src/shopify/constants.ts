/**
 * GraphQL query for fetching products
 */
export const PRODUCTS_QUERY = `
  query getProducts($first: Int!, $sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          featuredImage {
            url
            altText
            width
            height
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          tags
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * GraphQL query for fetching blog posts
 */
export const BLOG_POSTS_QUERY = `
  query getBlogPosts($blogHandle: String!, $first: Int!, $sortKey: ArticleSortKeys, $reverse: Boolean) {
    blog(handle: $blogHandle) {
      articles(first: $first, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            id
            handle
            title
            content
            contentHtml
            excerpt
            image {
              url
              altText
              width
              height
            }
            publishedAt
            tags
            author {
              firstName
              lastName
            }
            blog {
              id
              handle
              title
            }
          }
        }
      }
    }
  }
`;
