<template>
  <section class="section-accordion-tab" :id="componentId">
    <span
      v-if="sectionId"
      :id="sectionId"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    />

    <div
      class="max-width max-width--paddings"
      :style="maxWidth > 0 ? `max-width: ${maxWidth}px;` : ''"
    >
      <div v-if="titles" class="info-titles accordion-tab__titles">
        <h4 v-if="titles.title" class="info-title info-title--lg" v-html="titles.title" />
        <div v-if="titles.text" class="info-text" v-html="titles.text" />
      </div>

      <!-- Desktop Version -->
      <div class="accordion-tab info-block-accordion-tab--desktop">
        <div
          v-for="(item, index) in items"
          :key="`desktop-${index}`"
          :class="`accordion-tab__item ${activeTab === index ? 'is-open' : ''}`"
        >
          <h4
            v-if="item.heading"
            data-accordion-taborizontal
            class="accordion-tab__item-top"
            @click="selectTab(index)"
          >
            {{ item.heading }}
            <svg class="icon" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.29 0.70998C11.9 1.09998 11.9 1.72998 12.29 2.11998L16.17 5.99998H1C0.45 5.99998 0 6.44998 0 6.99998C0 7.54998 0.45 7.99998 1 7.99998H16.18L12.3 11.88C11.91 12.27 11.91 12.9 12.3 13.29C12.69 13.68 13.32 13.68 13.71 13.29L19.3 7.69998C19.69 7.30998 19.69 6.67998 19.3 6.28998L13.7 0.70998C13.32 0.31998 12.68 0.31998 12.29 0.70998Z"
                fill="white"
              />
            </svg>
          </h4>

          <div class="accordion-tab__item-content">
            <h4 v-if="item.heading" class="block-title block-title--lg" v-html="item.heading" />
            <div v-if="item.text" class="block-text block-text--lg" v-html="item.text" />

            <div
              v-if="item.button1 || item.button2"
              :class="`info__buttons${item.button1 && item.button2 ? ' info__buttons--multiple' : ''}`"
            >
              <a
                v-if="item.button1"
                :href="item.button1.link || '#'"
                :class="`button button--${item.button1.style}`"
                :role="!item.button1.link ? 'link' : undefined"
                :aria-disabled="!item.button1.link ? 'true' : undefined"
              >
                {{ item.button1.label }}
              </a>
              <a
                v-if="item.button2"
                :href="item.button2.link || '#'"
                :class="`button button--${item.button2.style}`"
                :role="!item.button2.link ? 'link' : undefined"
                :aria-disabled="!item.button2.link ? 'true' : undefined"
              >
                {{ item.button2.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Version -->
      <div class="accordion-tab info-block-accordion-tab--mobile">
        <div v-for="(item, index) in items" :key="`mobile-${index}`" class="accordion-tab__item">
          <h4
            v-if="item.heading"
            data-accordion
            :class="`accordion-tab__item-top ${mobileOpenTabs.includes(index) ? 'is-open' : ''}`"
            @click="toggleMobileTab(index)"
          >
            {{ item.heading }}
            <svg class="icon" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.29 0.70998C11.9 1.09998 11.9 1.72998 12.29 2.11998L16.17 5.99998H1C0.45 5.99998 0 6.44998 0 6.99998C0 7.54998 0.45 7.99998 1 7.99998H16.18L12.3 11.88C11.91 12.27 11.91 12.9 12.3 13.29C12.69 13.68 13.32 13.68 13.71 13.29L19.3 7.69998C19.69 7.30998 19.69 6.67998 19.3 6.28998L13.7 0.70998C13.32 0.31998 12.68 0.31998 12.29 0.70998Z"
                fill="white"
              />
            </svg>
          </h4>

          <div
            class="accordion-tab__item-content"
            :style="mobileOpenTabs.includes(index) ? 'max-height: unset;' : ''"
          >
            <h4 v-if="item.heading" class="block-title block-title--lg" v-html="item.heading" />
            <div v-if="item.text" class="block-text block-text--lg" v-html="item.text" />

            <div
              v-if="item.button1 || item.button2"
              :class="`info__buttons${item.button1 && item.button2 ? ' info__buttons--multiple' : ''}`"
            >
              <a
                v-if="item.button1"
                :href="item.button1.link || '#'"
                :class="`button button--${item.button1.style}`"
                :role="!item.button1.link ? 'link' : undefined"
                :aria-disabled="!item.button1.link ? 'true' : undefined"
              >
                {{ item.button1.label }}
              </a>
              <a
                v-if="item.button2"
                :href="item.button2.link || '#'"
                :class="`button button--${item.button2.style}`"
                :role="!item.button2.link ? 'link' : undefined"
                :aria-disabled="!item.button2.link ? 'true' : undefined"
              >
                {{ item.button2.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface Button {
    label: string
    link: string
    style: 'primary' | 'secondary' | 'white'
  }

  interface TabItem {
    heading: string
    text: string
    button1?: Button
    button2?: Button
  }

  interface TitlesBlock {
    title?: string
    text?: string
  }

  interface Props {
    sectionId?: string
    maxWidth?: number
    titles?: TitlesBlock
    items: TabItem[]
  }

  const props = withDefaults(defineProps<Props>(), {
    maxWidth: 1360,
  })

  // Use sectionId if provided, otherwise create a deterministic ID based on props
  const componentId = ref(
    props.sectionId
      ? `horizontal-tabs-${props.sectionId}`
      : `horizontal-tabs-${JSON.stringify(props.titles)
          .slice(0, 10)
          .replace(/[^a-z0-9]/gi, '')
          .toLowerCase()}`
  )

  const activeTab = ref(2)

  // Desktop tab selection
  const selectTab = (index: number) => {
    activeTab.value = index
  }

  // Mobile tab toggle
  const mobileOpenTabs = ref<number[]>([0]) // First tab open by default

  const toggleMobileTab = (index: number) => {
    const isOpen = mobileOpenTabs.value.includes(index)
    if (isOpen) {
      mobileOpenTabs.value = mobileOpenTabs.value.filter(i => i !== index)
    } else {
      mobileOpenTabs.value.push(index)
    }
  }
</script>

<style scoped lang="scss">
  @use '@/scss/variables.scss' as *;

  .section-accordion-tab {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .accordion-tab {
    margin: 13px auto 0;
    max-width: 987px;
  }

  .info-block-accordion-tab--desktop {
    display: none;
  }

  .accordion-tab__titles {
    padding: 0;
    max-width: 430px;
    margin: 0 auto 0 0;
  }

  .accordion-tab__titles .info-title {
    font-size: 23px;
    margin: 0;
    text-align: left;
    color: $blue-core;
  }

  .accordion-tab__titles .info-text {
    font-size: 12px;
    margin-top: 9px;
    line-height: 134%;
    text-align: left;
  }

  .accordion-tab__titles .info-text :deep(p + p) {
    margin-top: 11px;
  }

  .accordion-tab__item {
    margin: 0;
    margin-bottom: 12px;
  }

  .accordion-tab__item-top {
    width: 100%;
    outline: none;
    text-align: left;
    margin: 0;
    line-height: 200%;
    padding: 10px 52px 10px 16px;
    font-size: 10px;
    font-weight: 500;
    min-height: 60px;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    background: #f3f5fb;
    border: 1px solid #e5e9f2;
    border-radius: 14px;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
    color: #8b8ea9;
    letter-spacing: 0.7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .accordion-tab__item-top .icon {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    max-width: 17px;
    height: auto;
    position: absolute;
    right: 20px;
    fill: #8b8ea9;
    transform: translate(0, 0);
    transition: transform 0.25s ease-in;
  }

  .accordion-tab__item-top .icon path {
    color: inherit;
    fill: inherit;
  }

  .accordion-tab__item-top.is-open {
    background: #306cf4;
    color: #fff;
  }

  .is-open .icon {
    fill: #fff;
  }

  .accordion-tab__item-top:hover .icon {
    transform: translate(5px, 0);
  }

  .accordion-tab__item-content {
    background-color: white;
    padding: 0;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }

  .accordion-tab__item-content .block-title {
    font-size: 17px;
    letter-spacing: 0.8px;
    margin-top: 16px;
    line-height: 165%;
  }

  .accordion-tab__item-content .block-text {
    padding: 0;
    font-size: 12px;
    margin-top: 10px;
    text-align: left;
  }

  .accordion-tab__item-content .block-text :deep(p + p) {
    margin-top: 10px;
  }

  .accordion-tab .info__buttons {
    margin-top: 15px;
    margin-bottom: 3px;
    display: flex;
    gap: 12px;
  }

  .accordion-tab .info__buttons .button {
    padding: 5px 29px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .button--primary {
    background-color: #306cf4;
    color: white;
  }

  .button--primary:hover {
    background-color: #2757d4;
  }

  .button--secondary {
    background-color: transparent;
    color: #306cf4;
    border-color: #306cf4;
  }

  .button--secondary:hover {
    background-color: #306cf4;
    color: white;
  }

  .button--white {
    background-color: white;
    color: #306cf4;
    border-color: #e5e9f2;
  }

  .button--white:hover {
    background-color: #f8f9fa;
  }

  .button[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  .info__buttons--multiple {
    flex-direction: column;
  }

  .section__container-image {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 20px;
  }

  /* Typography helpers */
  :deep(mark) {
    background-color: #306cf4;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
  }

  :deep(p) {
    margin: 0 0 1rem 0;
    padding: 0;
  }

  :deep(p:last-child) {
    margin-bottom: 0;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  /* List styles */
  :deep(ul),
  :deep(ol) {
    margin: 0;
    padding-left: 20px;
  }

  :deep(li) {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  :deep(li:last-child) {
    margin-bottom: 0;
  }

  :deep(strong) {
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }

  :deep(a) {
    color: #306cf4;
    text-decoration: underline;
  }

  :deep(a:hover) {
    color: #2757d4;
  }

  @media screen and (max-width: 749px) {
    .section-accordion-tab :deep(.max-width) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (min-width: 750px) {
    .accordion-tab__titles {
      max-width: 680px;
    }

    .accordion-tab__titles .info-title {
      font-size: 33px;
    }

    .accordion-tab__item-content .block-text,
    .accordion-tab__titles .info-text {
      font-size: 14px;
    }

    .accordion-tab__item-top {
      font-size: 17px;
      line-height: 125%;
      padding: 11px 130px 11px 20px;
      min-height: 67px;
    }

    .accordion-tab__item-content .block-title {
      font-size: 23px;
      line-height: 125%;
    }

    .info__buttons--multiple {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1025px) {
    .section-accordion-tab {
      padding-top: 50px;
      padding-bottom: 60px;
    }

    .info-block-accordion-tab--mobile {
      display: none;
    }

    .info-block-accordion-tab--desktop {
      display: block;
      display: flex;
      flex-wrap: nowrap;
      max-height: 700px;
      margin: 51px auto 0;
      max-width: 1392px;
      flex-direction: column;
      position: relative;
    }

    .accordion-tab__titles {
      max-width: 705px;
    }

    .accordion-tab__titles .info-title {
      font-size: 49px;
    }

    .accordion-tab__item {
      display: flex;
      margin: 0 0 21px;
    }

    .accordion-tab__item-content .block-text,
    .accordion-tab__titles .info-text {
      font-size: 18px;
      margin-top: 20px;
      line-height: 168%;
    }

    .accordion-tab__titles .info-text :deep(p + p) {
      margin-top: 16px;
    }

    .is-open.accordion-tab__item {
      z-index: 1;
    }

    .accordion-tab__item-top {
      font-size: 17px;
      line-height: 133%;
      padding: 11px 50px 11px 20px;
      max-width: 43%;
      min-height: 68px;
    }

    .is-open .accordion-tab__item-top {
      background: #306cf4;
      color: #fff;
    }

    .accordion-tab__item-top .icon {
      max-width: 21px;
    }

    .accordion-tab__item-content {
      padding: 0 0px 16px 20px;
      max-height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease;
      transition-delay: 0.15s;
      position: absolute;
      max-width: 57%;
      right: 0;
      top: 0;
      overflow: auto;
    }

    .accordion-tab__item-content::-webkit-scrollbar {
      width: 10px;
    }

    .accordion-tab__item-content::-webkit-scrollbar-track {
      border-radius: 10px;
      border: 1px solid #e5e9f2;
    }

    .accordion-tab__item-content::-webkit-scrollbar-thumb {
      background: #8b8ea9;
      border-radius: 10px;
    }

    .accordion-tab__item-content::-webkit-scrollbar-thumb:hover {
      background: #8b8ea9;
    }

    .is-open .accordion-tab__item-content {
      opacity: 1;
    }

    .accordion-tab__item-content .block-title {
      font-size: 29px;
      margin-top: 0;
      line-height: 135%;
    }

    .accordion-tab__item-content .block-text {
      margin-top: 22px;
    }

    .accordion-tab__item-content .block-text :deep(p + p) {
      margin-top: 10px;
    }

    .accordion-tab .info__buttons {
      margin-top: 29px;
      margin-bottom: 3px;
    }

    .accordion-tab .info__buttons .button {
      padding: 5px 36px;
      min-width: unset;
    }
  }

  @media screen and (min-width: 1240px) {
    .section-accordion-tab {
      padding-top: 136px;
      padding-bottom: 108px;
    }
  }

  @media screen and (min-width: 1440px) {
    .section-accordion-tab :deep(.max-width) {
      padding-left: 0;
      padding-right: 0;
    }

    .accordion-tab__item-content {
      padding: 0 0 16px 40px;
    }

    .accordion-tab__item-top {
      max-width: 50.5%;
    }

    .accordion-tab__item-content {
      max-width: 49%;
      padding: 0 0 16px 73px;
    }
  }
</style>
