<script setup lang="ts">
  import Legacy from '@/components/about/Legacy.vue'
  import IrritatedImitated from '@/components/about/IrritatedImitated.vue'
  import DefinedBy from '@/components/about/DefinedBy.vue'
  import Story from '@/components/about/Story.vue'
  import RecordBoard from '@/components/about/RecordBoard.vue'
  import ShopifyBlogCarousel from '@/components/shopify/ShopifyBlogCarousel.vue'
</script>

<template>
  <div class="page about">
    <Legacy />
    <IrritatedImitated />
    <DefinedBy />
    <Story />
    <RecordBoard />
    <ShopifyBlogCarousel
      title="Knowledge"
      blogHandle="the-blog"
      :itemLimit="6"
      sortKey="PUBLISHED_AT"
      :reverse="true"
      shopLinkText="View All"
      linkUrl="/blogs/the-blog"
      :addBoxShadow="false"
      :invert="true"
      :infinite="true"
    />
  </div>
</template>
