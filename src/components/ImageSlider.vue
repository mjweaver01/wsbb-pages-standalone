<template>
  <div
    :style="{ backgroundColor: settings.backgroundColor }"
    class="product-list-wrapper swiper-product-list-wrapper featured-collection"
    :class="{
      'no-top-padding': settings.noTopPadding,
      'no-bottom-padding': settings.noBottomPadding,
    }"
  >
    <h2 v-if="settings.title" class="title">{{ settings.title }}</h2>
    <div
      class="m-slider-featured__wrapper max-width"
      :class="{ 'swiper-has-shadow': settings.addBoxShadow }"
    >
      <div
        :id="swiperId"
        class="product-list js-swiper swiper"
        :class="{
          'no-top-padding': settings.noTopPadding,
          'no-bottom-padding': settings.noBottomPadding,
        }"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="swiper-slide"
            :class="{ 'card-shadow': image.addBoxShadow }"
          >
            <div>
              <img :src="image.src" :alt="image.alt" class="full-width" />
            </div>
            <p v-if="image.subtext">{{ image.subtext }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation buttons - Box Shadow Style -->
      <div v-if="settings.addBoxShadow" :class="`swiper-button-next js-sw-n-${componentId}`">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="23.5"
            cy="23.5"
            r="22.75"
            transform="rotate(-180 23.5 23.5)"
            fill="transparent"
            stroke="#1D2024"
            stroke-width="1.5"
          />
          <path
            d="M33.5303 24.5303C33.8232 24.2374 33.8232 23.7626 33.5303 23.4697L28.7574 18.6967C28.4645 18.4038 27.9896 18.4038 27.6967 18.6967C27.4038 18.9896 27.4038 19.4645 27.6967 19.7574L31.9393 24L27.6967 28.2426C27.4038 28.5355 27.4038 29.0104 27.6967 29.3033C27.9896 29.5962 28.4645 29.5962 28.7574 29.3033L33.5303 24.5303ZM14 24.75L33 24.75L33 23.25L14 23.25L14 24.75Z"
            fill="#1D2024"
          />
        </svg>
      </div>
      <div v-if="settings.addBoxShadow" :class="`swiper-button-prev js-sw-p-${componentId}`">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="23.5"
            cy="23.5"
            r="22.75"
            fill="transparent"
            stroke="#1D2024"
            stroke-width="1.5"
          />
          <path
            d="M13.4697 22.4697C13.1768 22.7626 13.1768 23.2374 13.4697 23.5303L18.2426 28.3033C18.5355 28.5962 19.0104 28.5962 19.3033 28.3033C19.5962 28.0104 19.5962 27.5355 19.3033 27.2426L15.0607 23L19.3033 18.7574C19.5962 18.4645 19.5962 17.9896 19.3033 17.6967C19.0104 17.4038 18.5355 17.4038 18.2426 17.6967L13.4697 22.4697ZM33 22.25L14 22.25L14 23.75L33 23.75L33 22.25Z"
            fill="#1D2024"
          />
        </svg>
      </div>

      <!-- Navigation buttons - Default Style -->
      <div v-if="!settings.addBoxShadow" :class="`swiper-button-next js-sw-n-${componentId}`">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="23.5"
            cy="23.5"
            r="22.75"
            transform="rotate(-180 23.5 23.5)"
            fill="#1D2024"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M33.5303 24.5303C33.8232 24.2374 33.8232 23.7626 33.5303 23.4697L28.7574 18.6967C28.4645 18.4038 27.9896 18.4038 27.6967 18.6967C27.4038 18.9896 27.4038 19.4645 27.6967 19.7574L31.9393 24L27.6967 28.2426C27.4038 28.5355 27.4038 29.0104 27.6967 29.3033C27.9896 29.5962 28.4645 29.5962 28.7574 29.3033L33.5303 24.5303ZM14 24.75L33 24.75L33 23.25L14 23.25L14 24.75Z"
            fill="white"
          />
        </svg>
      </div>
      <div v-if="!settings.addBoxShadow" :class="`swiper-button-prev js-sw-p-${componentId}`">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23.5" cy="23.5" r="22.75" fill="#1D2024" stroke="white" stroke-width="1.5" />
          <path
            d="M13.4697 22.4697C13.1768 22.7626 13.1768 23.2374 13.4697 23.5303L18.2426 28.3033C18.5355 28.5962 19.0104 28.5962 19.3033 28.3033C19.5962 28.0104 19.5962 27.5355 19.3033 27.2426L15.0607 23L19.3033 18.7574C19.5962 18.4645 19.5962 17.9896 19.3033 17.6967C19.0104 17.4038 18.5355 17.4038 18.2426 17.6967L13.4697 22.4697ZM33 22.25L14 22.25L14 23.75L33 23.75L33 22.25Z"
            fill="white"
          />
        </svg>
      </div>

      <!-- Pagination -->
      <div class="m-sw-pg cs">
        <div :class="`swiper-pagination js-pg-n-${componentId}`"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
  import { Swiper } from 'swiper'
  import { Navigation, Pagination } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  interface ImageSliderImage {
    src: string
    alt: string
    aspectRatio?: number
    subtext?: string
    addBoxShadow?: boolean
  }

  interface ImageSliderSettings {
    backgroundColor?: string
    addBoxShadow: boolean
    title?: string
    noTopPadding: boolean
    noBottomPadding: boolean
  }

  interface Props {
    images: ImageSliderImage[]
    settings: ImageSliderSettings
  }

  const props = defineProps<Props>()

  // Generate consistent IDs based on component content to avoid hydration mismatch
  const generateComponentId = () => {
    // Create a simple hash based on the first image src and settings
    const firstImageSrc = props.images[0]?.src || 'default'
    const titleStr = props.settings.title || 'notitle'
    const combinedStr = `${firstImageSrc}-${titleStr}-${props.images.length}`

    // Simple hash function
    let hash = 0
    for (let i = 0; i < combinedStr.length; i++) {
      const char = combinedStr.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32bit integer
    }

    return Math.abs(hash).toString(36)
  }

  const componentId = ref(`slider-${generateComponentId()}`)
  const swiperId = computed(() => `image-carousel-${componentId.value}`)

  // Swiper instance
  let swiperInstance: Swiper | null = null

  // Initialize Swiper
  const initSwiper = async () => {
    await nextTick()

    const swiperEl = document.getElementById(swiperId.value)
    if (!swiperEl) return

    // Destroy existing instance if it exists
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }

    swiperInstance = new Swiper(`#${swiperId.value}`, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 20,

      navigation: {
        nextEl: `.js-sw-n-${componentId.value}`,
        prevEl: `.js-sw-p-${componentId.value}`,
      },

      pagination: {
        el: `.js-pg-n-${componentId.value}`,
        clickable: true,
      },
    })
  }

  // Lifecycle
  onMounted(() => {
    initSwiper()
  })

  onUnmounted(() => {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
    }
  })
</script>

<style lang="scss" scoped>
  .no-top-padding {
    padding-top: 0 !important;
  }

  .no-bottom-padding {
    padding-bottom: 0 !important;
  }

  .full-width {
    width: 100%;
    height: auto;
  }
</style>
