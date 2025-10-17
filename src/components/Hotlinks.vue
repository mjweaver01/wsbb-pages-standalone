<template>
  <section class="shopify-section section-anchor-panel">
    <div class="anchor-panel">
      <div class="anchor-panel__wrapper">
        <a v-for="link in links" :key="link.href" class="anchor-panel__link" :href="link.href">
          {{ link.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  export interface HotlinkItem {
    href: string
    text: string
  }

  export interface Props {
    links: HotlinkItem[]
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  @use '@/scss/variables.scss' as *;

  // .section-anchor-panel {
  //   position: sticky;
  //   top: 59px;
  //   z-index: 3;
  // }

  .anchor-panel {
    width: 100%;
    overflow: auto;
    background: #306cf4;
    padding: 0 20px;
  }

  .anchor-panel__wrapper {
    min-height: 54px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 23px;
    margin: 0 auto;
  }

  .anchor-panel::-webkit-scrollbar {
    height: 6px;
  }

  .anchor-panel::-webkit-scrollbar-track {
    border: none;
  }

  .anchor-panel::-webkit-scrollbar-thumb {
    background: #ffffff30;
  }

  .anchor-panel::-webkit-scrollbar-thumb:hover {
    background: #ffffff70;
  }

  .anchor-panel__link {
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    display: block;
    white-space: nowrap;
    padding: 6px 0 0;
    margin: 0;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  .anchor-panel__link:hover {
    text-decoration: underline;
    color: #fff !important;
  }

  .anchor-panel__link:last-child {
    padding-right: 20px;
  }

  @media screen and (min-width: 750px) {
    .anchor-panel {
      padding: 0 40px;
    }

    .anchor-panel__link:last-child {
      padding-right: 40px;
    }
  }

  @media screen and (min-width: 1025px) {
    // .section-anchor-panel {
    //   position: sticky;
    //   top: 85px;
    //   z-index: 3;
    // }

    .anchor-panel {
      padding: 0 80px;
    }

    .anchor-panel__wrapper {
      min-height: 100px;
      gap: 45px;
    }

    .anchor-panel__link {
      font-size: 20px;
      padding: 0;
      letter-spacing: 0;
    }

    .anchor-panel__link:last-child {
      padding-right: 80px;
    }
  }

  @media screen and (min-width: 1240px) {
    .anchor-panel {
      padding: 0 120px;
    }
  }
</style>
