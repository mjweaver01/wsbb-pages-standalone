<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import ShopifyCarousel from '@/components/shopify/ShopifyCarousel.vue'
  import { fetchProductsForCarousel } from '../../shopify/shopify'
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
    collectionHandle?: string
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
    linkUrl?: string
    invert?: boolean
    infinite?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'Featured Products',
    backgroundColor: 'rgba(0,0,0,0)',
    addBoxShadow: true,
    itemLimit: 8,
    shopLinkText: 'View All Products',
    primaryButton: true,
    noTopPadding: false,
    noBottomPadding: false,
    sortKey: 'BEST_SELLING',
    reverse: false,
    linkUrl: '/collections/all',
    invert: false,
    infinite: false,
  })

  const products = ref<CarouselItem[]>([])

  const settings = computed<CarouselSettings>(() => ({
    title: props.title,
    backgroundColor: props.backgroundColor,
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
      price: '\u00A0',
      type: 'product' as const,
    }))
  })

  // Display items - show placeholders while loading, real products after
  const displayItems = computed(() => {
    return products.value.length > 0 ? products.value : placeholderItems.value
  })

  // Fetch products from Shopify
  onMounted(async () => {
    try {
      const query = props.collectionHandle ? `collection:${props.collectionHandle}` : undefined
      products.value = await fetchProductsForCarousel({
        first: props.itemLimit,
        sortKey: props.sortKey,
        reverse: props.reverse,
        query,
      })
    } catch (err) {
      console.error('Error fetching products for carousel:', err)
    }
  })
</script>

<template>
  <ShopifyCarousel :items="displayItems" :settings="settings" :linkUrl="props.linkUrl" />
</template>
