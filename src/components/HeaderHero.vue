<template>
  <section class="shopify-section index-hero index-hero--new">
    <section class="hero-section" :style="`background-color: ${backgroundColor}`">
      <img
        :src="heroImage"
        :alt="imageAlt"
        :width="imageWidth"
        :height="imageHeight"
        class="hero-section__image hero-section__image--mobile"
      />
      <img
        :src="heroImage"
        :alt="imageAlt"
        :width="imageWidth"
        :height="imageHeight"
        class="hero-section__image hero-section__image--desktop"
      />

      <div class="hero-section__container">
        <div class="hero-section__content">
          <h1
            class="hero-section__title hero-section__title--lg"
            :style="`color: ${textColor}; --section-hero-title-size: ${titleSize};`"
          >
            {{ title }}
          </h1>

          <h4
            v-if="subtitle"
            class="hero-section__title hero-section__title--md"
            :style="`color: ${textColor}`"
          >
            {{ subtitle }}
          </h4>

          <div
            class="block-text hero-section__text hero-section__text--lg"
            :style="`color: ${textColor}`"
          >
            <p v-for="(paragraph, index) in description" :key="index" v-html="paragraph"></p>

            <ul v-if="listItems && listItems.length > 0">
              <li
                v-for="(item, index) in listItems"
                :key="index"
                :style="`color: ${textColor}`"
                v-html="item"
              ></li>
            </ul>
          </div>

          <div v-if="buttonText && buttonUrl" class="hero-section__buttons">
            <a :href="buttonUrl" class="button secondary">
              {{ buttonText }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
  export interface Props {
    heroImage: string
    title: string
    subtitle?: string
    description: string[]
    listItems?: string[]
    buttonText?: string
    buttonUrl?: string
    backgroundColor?: string
    textColor?: string
    titleSize?: string
    imageAlt?: string
    imageWidth?: number
    imageHeight?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    listItems: () => [],
    backgroundColor: 'rgba(0,0,0,0)',
    textColor: '#ffffff',
    titleSize: '60px',
    imageWidth: 2000,
    imageHeight: 1332.9999999999998,
  })

  // Use title as imageAlt if not provided
  const imageAlt = props.imageAlt || props.title
</script>

<style lang="scss" scoped>
  @use '@/scss/variables.scss' as *;

  .index-hero .hero-section {
    padding: 0;
  }

  .hero-section {
    height: calc(100vh - 59px);
    min-height: 60vw;
    display: flex;
    align-items: center;
    padding: 40px 0;
    position: relative;

    &.hero-section--bottom-space {
      height: calc(100vh - 119px);
    }
  }

  .hero-section__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    &--desktop {
      display: none;
    }

    &--mobile {
      display: block;
    }
  }

  .hero-section__container {
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .hero-section__content {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0 20px 40px 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .hero-section__title {
    width: 100%;
    font-weight: 500;
    font-size: 11px;
    line-height: 150%;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
    margin-bottom: 13px;

    &.hero-section__title--lg {
      font-size: 27px;
      line-height: 1.2;
      margin-bottom: 13px;
      letter-spacing: 0.9px;
    }
  }

  .hero-section__sub-title {
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
  }

  .hero-section__text {
    width: 100%;
    font-size: 12px;
    line-height: 150%;
    padding-right: 6px;
    text-align: left;

    :deep(p + p) {
      margin-top: 8px;
    }

    :deep(ul) {
      margin: 1em 0;
      padding-left: 1rem;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.25;
      }
    }

    :deep(a) {
      text-decoration: underline;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .hero-section__buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;

    .button {
      width: auto;
      max-width: unset;
      padding: 5px 15px;
      min-height: 40px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-top: 0;
      font-size: 14px;
      letter-spacing: 0;
      text-transform: none;
      line-height: 1;
      font-weight: 500;
      font-family:
        Knockout HTF31 JuniorMiddle,
        Helvetica,
        sans-serif;
      transition:
        background-color 0.25s ease-in,
        border-color 0.25s ease-in;
    }
  }

  @media screen and (min-width: 750px) {
    .hero-section {
      position: relative;
      height: 100vh;
      max-height: calc(100vh - 57px);
      overflow: hidden;
    }

    .hero-section__container {
      justify-content: center;
    }

    .hero-section__content {
      max-width: 660px;
      text-align: left;
      padding-left: 40px;
    }

    .hero-section__image--desktop {
      display: block;
    }

    .hero-section__image--mobile {
      display: none;
    }

    .hero-section__title {
      font-size: 27px;

      &.hero-section__title--lg {
        font-size: 40px;
      }
    }

    .hero-section__text {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1025px) {
    .hero-section {
      position: relative;
      height: 100vh;
      max-height: calc(100vh - 85px);
      overflow: hidden;

      &.hero-section--bottom-space {
        height: calc(100vh - 191px);
      }
    }

    .hero-section__content {
      padding-left: 80px;
      max-width: 833px;
    }

    .hero-section__title {
      margin-bottom: 26px;

      &.hero-section__title--lg {
        margin-bottom: 29px;
      }
    }

    .hero-section__buttons {
      margin-top: 30px;
      gap: 30px;

      .button {
        padding: 5px 20px;
        min-height: 50px;
        font-size: 20px;
        min-width: 220px;
      }
    }
  }

  @media screen and (min-width: 1240px) {
    .hero-section__content {
      padding: 0em 1em 1em 120px;
    }

    .hero-section__title.hero-section__title--lg {
      font-size: 60px;
      font-size: var(--section-hero-title-size);
    }

    .hero-section__text {
      font-size: 18px;
      line-height: 167%;
      padding-right: 45px;

      :deep(p + p) {
        margin-top: 16px;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .hero-section.hero-section--bottom-space {
      height: calc(100vh - 185px);
    }
  }

  // Smart iframe mode fix - prevent vh feedback loops while preserving responsive design
  :global(body.iframe-mode) {
    .hero-section {
      height: 55vw;
      min-height: 700px;
    }

    @media screen and (min-width: $mobile) {
      .hero-section {
        height: 100vw;
      }
    }

    @media screen and (min-width: $desktop) {
      .hero-section {
        max-height: 1280px;
      }
    }
  }
</style>
