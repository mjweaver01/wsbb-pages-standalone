<template>
  <div
    :class="[
      'info-block-accordion',
      'max-width',
      'max-width--paddings',
      `info-block-accordion--${accordionStyle}`,
    ]"
  >
    <span
      v-if="sectionId"
      :id="sectionId"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    ></span>

    <template v-for="(block, index) in blocks" :key="index">
      <!-- Heading Block -->
      <h4
        v-if="block.type === 'heading'"
        :class="[
          'block-title',
          `block-title--${block.titleSize || 'lg'}`,
          { 'block-title--icon': block.icon },
        ]"
      >
        <div v-if="block.icon" class="block-title__icon">
          <img :src="block.icon" alt="" width="100" height="100" />
        </div>
        <span v-html="processHeading(block.heading)"></span>
      </h4>

      <!-- Accordion Block -->
      <div v-else-if="block.type === 'accordion'" class="info-block__accordion">
        <h4
          :class="['accordion-top', 'block-title', `block-title--${block.titleSize || 'md'}`]"
          @click="toggleAccordion(index)"
          v-html="processHeading(block.heading)"
        ></h4>
        <div
          class="block-text__wrapper accordion-content"
          :ref="el => (contentRefs[index] = el as HTMLElement)"
          :style="openStates[index] ? `max-height: ${contentHeights[index]}px` : ''"
        >
          <div
            :class="['block-text', `block-text--${block.textSize || 'lg'}`]"
            v-html="block.text"
          ></div>
          <a
            v-if="block.buttonLink && block.buttonLabel"
            :href="block.buttonLink"
            class="info-block__accordion-link block-text"
          >
            {{ block.buttonLabel }}
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'

  interface AccordionItem {
    type: 'accordion'
    heading: string
    text: string
    titleSize?: 'md' | 'lg'
    textSize?: 'md' | 'lg'
    buttonLabel?: string
    buttonLink?: string
  }

  interface HeadingBlock {
    type: 'heading'
    heading: string
    titleSize?: 'md' | 'lg'
    icon?: string
  }

  type Block = AccordionItem | HeadingBlock

  export interface Props {
    sectionId?: string
    accordionStyle?: 'primary' | 'secondary'
    blocks: Block[]
  }

  const props = withDefaults(defineProps<Props>(), {
    accordionStyle: 'primary',
  })

  // Accordion state management
  const openStates = ref<boolean[]>([])
  const contentRefs = ref<(HTMLElement | null)[]>([])
  const contentHeights = ref<number[]>([])

  // Helper function to process heading text with [mark] tags
  function processHeading(heading: string): string {
    return heading.replace(/\[mark\]/g, '<mark>').replace(/\[\/mark\]/g, '</mark>')
  }

  // Toggle accordion item
  function toggleAccordion(index: number) {
    openStates.value[index] = !openStates.value[index]

    nextTick(() => {
      const content = contentRefs.value[index]
      if (content) {
        if (openStates.value[index]) {
          contentHeights.value[index] = content.scrollHeight
        } else {
          contentHeights.value[index] = 0
        }
      }
    })
  }

  // Initialize accordion states
  onMounted(() => {
    openStates.value = props.blocks.map(() => false)
    contentHeights.value = props.blocks.map(() => 0)
  })
</script>

<style scoped>
  .info-block {
    padding-bottom: 30px;
    max-width: 987px;
  }

  .info-block__media {
    background-color: transparent;
    max-width: 100%;
    height: auto;
    padding: 0 0 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }

  .info-block__media img {
    max-width: 100%;
    height: auto;
    position: relative;
  }

  .info-block__media img.is-hidden-mobile-only {
    display: none;
  }

  .info-block__quote {
    margin-bottom: 20px;
  }

  .info-block__quote .block-text__wrapper {
    display: flex;
    align-items: flex-start;
  }

  .block-text__icon {
    margin-right: 14px;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: 2px;
  }

  .block-text__icon img {
    max-width: 100%;
    height: auto;
  }

  .info-block__quote .block-text {
    text-align: left;
  }

  .info-block__quote .block-text__icon {
    margin-right: 14px;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    margin-left: 4px;
    margin-top: 2px;
  }

  .info-block__card {
    background: #f3f5fb;
    border: 1px solid #e5e9f2;
    border-radius: 16px;
    padding: 29px 20px;
    margin-top: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .info-block__card:after {
    content: '';
    display: block;
    position: relative;
    clear: both;
  }

  .info-block__card + .info-block__card {
    margin-top: 20px;
  }

  .info-block__card .block-title {
    font-size: 28px;
    text-transform: capitalize;
    font-weight: 500;
  }

  .info-block__card .block-title__icon {
    width: auto;
    height: 24px;
    margin-right: 16px;
  }

  .info-block__card .block-text {
    line-height: 169%;
    text-align: left;
  }

  .info-block__card .block-text a {
    font-size: inherit;
    text-decoration: none;
  }

  .info-block__card-button {
    background: #306cf4;
    border-radius: 8px;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.15;
    min-height: 40px;
    padding: 10px 19px;
    color: #ffffff;
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

  .info-block__card-button svg {
    margin-left: 6px;
    max-width: 12px;
    transition: transform 0.25s ease-in;
  }

  .info-block__card-button:hover svg {
    transform: translate(6px, 0px);
  }

  .info-block-accordion {
    padding-top: 8px;
    padding-bottom: 30px;
    max-width: 987px;
  }

  .accordion-top {
    width: 100%;
    outline: none;
    text-align: left;
    padding: 15px 24px 15px 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s linear;
    position: relative;
    text-transform: none;
    background: none;
    border: none;
  }

  .info-block-accordion .info-block__accordion:first-of-type .accordion-top {
    border-top: 1px solid #e5e9f2;
  }

  .accordion-top:before,
  .accordion-top:after {
    background: #306cf4;
    content: '';
    width: 11px;
    height: 2px;
    display: block;
    border-radius: 5px;
    position: absolute;
    right: 6px;
    top: 47%;
    transition: transform 0.25s ease-in;
  }

  .accordion-top:after {
    transform: rotate(90deg);
  }

  .is-open .accordion-top:after {
    transform: rotate(0deg);
  }

  .accordion-content {
    background-color: white;
    padding: 0;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
    border-bottom: 1px solid #e5e9f2;
  }

  .is-open .accordion-top + .accordion-content {
    padding-bottom: 12px;
  }

  .accordion-content .block-text {
    padding: 0 15px 4px 0;
  }

  .info-block-accordion > .block-title {
    margin-bottom: 16px;
  }

  .info-block-accordion > .block-title :deep(mark) {
    font-size: 20px;
    display: block;
    letter-spacing: 0;
    color: #306cf4;
    background: none;
  }

  .info-block__accordion {
    margin: 0;
  }

  .info-block__accordion .block-title {
    margin: 0;
  }

  .accordion-content .info-block__accordion-link {
    font-weight: 500;
    font-size: 12px;
    line-height: 13px;
    color: #306cf4;
    margin: 0;
    display: inline-block;
    text-decoration: none;
  }

  .info-block-accordion--secondary.info-block-accordion > .block-title {
    text-align: center;
    margin-top: 0;
  }

  .info-block-accordion--secondary .info-block__accordion + .info-block__accordion {
    margin-top: 14px;
  }

  .info-block-accordion--secondary .accordion-top {
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
    background: transparent;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
    color: #8b8ea9;
    letter-spacing: 0.7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: color 0.25s linear;
    border: none;
  }

  .info-block-accordion--secondary .info-block__accordion:first-of-type .accordion-top {
    border: none;
  }

  .info-block-accordion--secondary .info-block__accordion {
    background: #f3f5fb;
    border: 1px solid #e5e9f2;
    border-radius: 14px;
    transition: all 0.25s ease-in;
  }

  .info-block-accordion--secondary .is-open.info-block__accordion {
    background: #306cf4;
  }

  .info-block-accordion--secondary .is-open .accordion-top {
    color: #fff;
  }

  .info-block-accordion--secondary .accordion-top:before,
  .info-block-accordion--secondary .accordion-top:after {
    right: 20px;
  }

  .info-block-accordion--secondary .is-open .accordion-top:before,
  .info-block-accordion--secondary .is-open .accordion-top:after {
    background: #fff;
  }

  .info-block-accordion--secondary .accordion-content {
    border: none;
    background: none;
  }

  .info-block-accordion--secondary .accordion-content .block-text {
    padding: 0 14px 1px 15px;
    font-size: 12px;
    text-align: left;
    margin-top: -3px;
    color: #fff;
  }

  .info-block-accordion--secondary .accordion-content .block-text :deep(p + p) {
    margin-top: 10px;
  }

  .block-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 14px;
    color: #212121;
    font-family:
      Knockout HTF51 Middle,
      Helvetica,
      sans-serif;
    letter-spacing: 0;
  }

  .block-title--lg {
    text-align: left;
    margin-bottom: 24px;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
  }

  .block-title--md {
    line-height: 1.25;
    text-transform: capitalize;
  }

  .block-title--icon {
    display: flex;
    align-items: center;
  }

  .block-title__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  }

  .block-title__icon img {
    max-width: 100%;
    height: auto;
  }

  .block-text {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    text-align: left;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
  }

  .block-text--lg {
    font-size: 14px;
  }

  .block-text :deep(p) {
    font-size: inherit;
    margin: 0 0 1rem 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  :deep(mark) {
    background-color: #306cf4;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  @media screen and (max-width: 749px) {
    .info-block-accordion--secondary.info-block-accordion.max-width {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (min-width: 750px) {
    .info-block-accordion {
      padding-top: 0;
    }

    .info-block__card-button {
      font-size: 20px;
      line-height: 1.1;
    }

    .info-block__card .block-text {
      line-height: 1.7;
      font-size: 14px;
    }

    .info-block__media {
      padding: 15px 0 10px;
    }

    .info-block__media img.is-hidden-desktop-only {
      display: none;
    }

    .info-block__media img.desktop-image {
      display: block;
    }

    .info-block-accordion > .block-title :deep(mark) {
      font-size: 50px;
    }

    .info-block-accordion--secondary .accordion-content .block-text {
      font-size: 14px;
    }

    .info-block-accordion--secondary .accordion-top {
      font-size: 17px;
      line-height: 125%;
      padding: 11px 130px 11px 20px;
      min-height: 67px;
    }

    .block-title--lg {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 860px) {
    .info-block {
      column-gap: 32px;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 73px;
    }

    .info-block__card {
      max-width: calc((100% - 64px) / 3);
      margin-top: 20px;
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      margin-right: 0;
      padding: 42px 10px;
    }

    .info-block__card + .info-block__card {
      margin-top: 44px;
    }

    .info-block__card .block-text {
      line-height: 1.7;
      font-size: 14px;
      text-align: center;
      margin-bottom: 16px;
    }

    .info-block__card-button {
      margin-top: auto;
      min-height: 50px;
      padding: 10px 28px;
      font-size: 19px;
      letter-spacing: -0.4px;
    }

    .info-block__card-button svg {
      margin-left: 15px;
      max-width: 14px;
      width: 14px;
      height: 14px;
    }

    .info-block__card .block-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 14px;
    }

    .info-block__card .block-title__icon {
      width: 50px;
      height: auto;
      max-height: 41px;
      margin-right: 0;
      margin-bottom: 24px;
    }

    .block-title__icon img {
      width: 100%;
      height: auto;
    }

    .info-block-accordion > .block-title {
      margin-bottom: 37px;
    }

    .accordion-top {
      padding: 28px 40px 29px 0;
    }

    .accordion-top:before,
    .accordion-top:after {
      width: 17px;
      height: 3px;
      right: 11px;
      top: 51%;
    }

    .accordion-content .block-text {
      padding: 0 0 16px;
    }

    .accordion-content .info-block__accordion-link {
      font-size: 18px;
    }

    .is-open .accordion-top + .accordion-content {
      padding-bottom: 19px;
    }
  }

  @media screen and (min-width: 1025px) {
    .accordion-top {
      font-size: 32px;
    }

    .info-block__quote .block-text__icon {
      margin-right: 27px;
      margin-left: 0;
      margin-top: 5px;
    }

    .info-block-accordion {
      padding-bottom: 67px;
    }

    .info-block-accordion.info-block-accordion--secondary {
      max-width: 1080px;
    }

    .info-block-accordion.info-block-accordion--secondary > .block-title {
      margin-bottom: 74px;
    }

    .info-block-accordion--secondary .accordion-content .block-text {
      font-size: 18px;
      padding: 0px 25px 4px 30px;
      line-height: 163%;
      margin-top: 0;
    }

    .info-block-accordion--secondary .accordion-top {
      min-height: 71px;
      padding: 25px 130px 19px 20px;
    }

    .info-block-accordion--secondary .info-block__accordion {
      margin-bottom: 20px;
    }

    .info-block-accordion--secondary .accordion-top:before,
    .info-block-accordion--secondary .accordion-top:after {
      right: 34px;
    }
  }

  @media screen and (min-width: 1240px) {
    .info-block-accordion--secondary .accordion-top {
      padding: 20px 130px 19px 31px;
    }
  }
</style>
