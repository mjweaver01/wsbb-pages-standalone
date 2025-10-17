<script setup lang="ts">
  import WSBB from '@/components/WSBB.vue'
  import ShopifyProductCarousel from '@/components/shopify/ShopifyProductCarousel.vue'
</script>

<template>
  <WSBB />
  <ShopifyProductCarousel
    title="Westside Gear"
    collectionHandle="all-products"
    :itemLimit="10"
    :reverse="false"
    shopLinkText="Shop All"
    linkUrl="/collections/all-products"
    :addBoxShadow="true"
  />
</template>
