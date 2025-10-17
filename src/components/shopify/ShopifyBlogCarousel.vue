<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import ShopifyCarousel from '@/components/shopify/ShopifyCarousel.vue'
  import { fetchBlogPostsForCarousel } from '../../shopify/shopify'
  import type { CarouselSettings, CarouselItem } from '../../shopify/types'

  export interface Props {
    title?: string
    backgroundColor?: string
    addBoxShadow?: boolean
    itemLimit?: number
    shopLinkText?: string
    primaryButton?: boolean
    noTopPadding?: boolean
    noBottomPadding?: boolean
    blogHandle?: string
    sortKey?: 'AUTHOR' | 'ID' | 'PUBLISHED_AT' | 'RELEVANCE' | 'TITLE' | 'UPDATED_AT'
    reverse?: boolean
    linkUrl?: string
    invert?: boolean
    infinite?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'Latest Blog Posts',
    backgroundColor: 'rgba(0,0,0,0)',
    addBoxShadow: true,
    itemLimit: 8,
    shopLinkText: 'View All Posts',
    primaryButton: true,
    noTopPadding: false,
    noBottomPadding: false,
    blogHandle: 'news',
    sortKey: 'PUBLISHED_AT',
    reverse: true,
    linkUrl: '/blogs/news',
    invert: false,
    infinite: false,
  })

  const blogPosts = ref<CarouselItem[]>([])

  const settings = computed<CarouselSettings>(() => ({
    title: props.title,
    backgroundColor: props.invert ? '#306cf4' : props.backgroundColor,
    addBoxShadow: props.addBoxShadow,
    itemLimit: props.itemLimit,
    shopLinkText: props.shopLinkText,
    primaryButton: props.primaryButton,
    noTopPadding: props.noTopPadding,
    noBottomPadding: props.noBottomPadding,
    invert: props.invert,
    infinite: props.infinite,
  }))

  // Create placeholder items for loading state
  const placeholderItems = computed<CarouselItem[]>(() => {
    return Array.from({ length: props.itemLimit }, (_, i) => ({
      id: `placeholder-${i}`,
      title: '\u00A0', // Non-breaking space to maintain height
      url: '#',
      excerpt: '\u00A0',
      type: 'blog' as const,
    }))
  })

  // Display items - show placeholders while loading, real posts after
  const displayItems = computed(() => {
    return blogPosts.value.length > 0 ? blogPosts.value : placeholderItems.value
  })

  // Fetch blog posts from Shopify
  onMounted(async () => {
    try {
      blogPosts.value = await fetchBlogPostsForCarousel({
        blogHandle: props.blogHandle,
        first: props.itemLimit,
        sortKey: props.sortKey,
        reverse: props.reverse,
      })
    } catch (err) {
      console.error('Error fetching blog posts for carousel:', err)
    }
  })
</script>

<template>
  <ShopifyCarousel :items="displayItems" :settings="settings" :linkUrl="props.linkUrl" />
</template>
