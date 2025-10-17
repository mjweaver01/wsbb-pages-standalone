<template>
  <section class="section-accordion-h" :id="componentId">
    <span
      v-if="sectionId"
      :id="sectionId"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    ></span>

    <div
      class="max-width max-width--paddings"
      :style="maxWidth > 0 ? `max-width: ${maxWidth}px;` : ''"
    >
      <div v-if="titles" class="accordion-h__titles">
        <h2
          v-if="titles.title"
          class="info-title info-title--lg"
          v-html="processHeading(titles.title)"
        ></h2>
        <div v-if="titles.text" class="info-text" v-html="titles.text"></div>
      </div>

      <!-- Desktop Version -->
      <div class="accordion-h info-block-accordion-h--desktop">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="`accordion-h__item ${index === 0 ? 'is-open' : ''}`"
        >
          <h4 v-if="item.heading" data-accordion-horizontal class="accordion-h__item-top">
            <div class="block-title__number">{{ (index + 1).toString().padStart(2, '0') }}</div>
            {{ processHeading(item.heading) }}
          </h4>

          <div class="accordion-h__item-content">
            <h4
              v-if="item.heading"
              class="block-title block-title--lg"
              v-html="processHeading(item.heading)"
            ></h4>

            <div v-if="item.text" class="block-text block-text--lg" v-html="item.text"></div>

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
      <div class="accordion-h info-block-accordion-h--mobile">
        <div v-for="(item, index) in items" :key="index" class="accordion-h__item">
          <h4
            v-if="item.heading"
            data-accordion
            :class="`accordion-h__item-top ${index === 0 ? 'is-open' : ''}`"
          >
            <div class="block-title__number">{{ (index + 1).toString().padStart(2, '0') }}</div>
            {{ processHeading(item.heading) }}
          </h4>

          <div class="accordion-h__item-content" :style="index === 0 ? 'max-height: unset;' : ''">
            <h4
              v-if="item.heading"
              class="block-title block-title--lg"
              v-html="processHeading(item.heading)"
            ></h4>

            <div v-if="item.text" class="block-text block-text--lg" v-html="item.text"></div>

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
  import { onMounted } from 'vue'

  interface Button {
    label: string
    link: string
    style: 'primary' | 'secondary' | 'white'
  }

  interface AccordionItem {
    heading: string
    text: string
    button1?: Button
    button2?: Button
  }

  interface TitlesBlock {
    title?: string
    text?: string
  }

  export interface Props {
    sectionId?: string
    maxWidth?: number
    titles?: TitlesBlock
    items: AccordionItem[]
  }

  const props = withDefaults(defineProps<Props>(), {
    maxWidth: 1360,
  })

  // Generate unique component ID for scoped JavaScript
  const componentId = `horizontal-accordion-${Math.random().toString(36).substring(2, 11)}`

  // Helper function to process heading text with [mark] tags
  function processHeading(heading: string): string {
    return heading.replace(/\[mark\]/g, '<mark>').replace(/\[\/mark\]/g, '</mark>')
  }

  // Initialize accordion functionality after component is mounted
  onMounted(() => {
    const section = document.querySelector(`#${componentId}`)
    if (!section) return

    // Horizontal accordion (desktop)
    const accordionBtns = section.querySelectorAll('[data-accordion-horizontal]')

    accordionBtns.forEach(accordion => {
      accordion.addEventListener('click', function () {
        accordionBtns.forEach(btn => {
          btn.parentElement?.classList.remove('is-open')
        })
        ;(this as HTMLElement).parentElement?.classList.add('is-open')
      })
    })

    // Mobile accordion
    const mobileAccordionBtns = section.querySelectorAll('[data-accordion]')

    mobileAccordionBtns.forEach(accordion => {
      accordion.addEventListener('click', function () {
        this.classList.toggle('is-open')
        let content = this.nextElementSibling as HTMLElement

        if (content.style.maxHeight) {
          content.style.maxHeight = ''
        } else {
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })
  })
</script>

<style>
  .section-accordion-h {
    padding-top: 1px;
    padding-bottom: 40px;
  }

  .accordion-h {
    margin: 22px auto 0;
    max-width: 987px;
  }

  .info-block-accordion-h--desktop {
    display: none;
  }

  .accordion-h__titles {
    padding: 0 20px;
    max-width: 430px;
    margin: 0 auto;
  }

  .accordion-h__titles .info-text {
    font-size: 12px;
    margin-top: 8px;
    line-height: 131%;
    text-align: center;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
  }

  .accordion-h__item {
    border: 2px solid #306cf4;
    margin: 0;
  }

  .accordion-h__item + .accordion-h__item {
    border-top: none;
  }

  .accordion-h__item-top {
    width: 100%;
    outline: none;
    text-align: left;
    margin: 0;
    padding: 17px 19px 20px 18px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    background: #fbfbfb;
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
    border: none;
  }

  .accordion-h__item-top .block-title__number {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin-right: 15px;
  }

  .accordion-h__item-top.is-open {
    background: #306cf4;
    color: #fff;
  }

  .accordion-h__item-content {
    background-color: white;
    padding: 0 16px;
    margin: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }

  .accordion-h__item-top.is-open + .accordion-h__item-content {
    padding-bottom: 12px;
  }

  .accordion-h__item-content .block-title {
    font-size: 15px;
    letter-spacing: 1px;
    margin-top: 14px;
  }

  .accordion-h__item-content .block-text {
    padding: 0;
    font-size: 12px;
    margin-top: 6px;
    text-align: left;
  }

  .accordion-h__item-content .block-text p + p {
    margin-top: 10px;
  }

  /* Button styles */
  .info__buttons {
    margin-top: 16px;
    display: flex;
    gap: 12px;
  }

  .info__buttons--multiple {
    flex-direction: column;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
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

  /* Base typography styles */
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

  .block-text p {
    font-size: inherit;
    margin: 0 0 1rem 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  .block-text p:last-child {
    margin-bottom: 0;
  }

  .info-title--lg {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    text-transform: uppercase;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
  }

  mark {
    background-color: #306cf4;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  /* Video responsive wrapper styles */
  .video-responsive-wrapper {
    margin: 16px 0;
  }

  .video-responsive {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
  }

  .video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* List styles within accordion content */
  .accordion-h__item-content ul {
    margin: 0;
    padding-left: 20px;
  }

  .accordion-h__item-content li {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .accordion-h__item-content li:last-child {
    margin-bottom: 0;
  }

  .accordion-h__item-content strong {
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
  }

  .accordion-h__item-content a {
    color: #306cf4;
    text-decoration: underline;
  }

  .accordion-h__item-content a:hover {
    color: #2757d4;
  }

  @media screen and (max-width: 749px) {
    .section-accordion-h .max-width {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (min-width: 750px) {
    .accordion-h__titles {
      max-width: 680px;
    }

    .accordion-h__item-content .block-text,
    .accordion-h__titles .info-text {
      font-size: 14px;
    }

    .accordion-h__item-top {
      font-size: 24px;
      padding: 28px 40px 27px 30px;
    }

    .accordion-h__item-content .block-title {
      font-size: 27px;
    }

    .accordion-h__item-top.is-open + .accordion-h__item-content {
      padding-bottom: 19px;
    }

    .button {
      font-size: 16px;
      padding: 14px 28px;
    }

    .info__buttons--multiple {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1025px) {
    .section-accordion-h {
      padding-top: 10px;
      padding-bottom: 120px;
    }

    .info-block-accordion-h--mobile {
      display: none;
    }

    .info-block-accordion-h--desktop {
      display: block;
      display: flex;
      flex-wrap: nowrap;
      max-height: 647px;
      margin: 81px auto 0;
      max-width: 1392px;
    }

    .accordion-h__titles {
      max-width: 705px;
    }

    .accordion-h__item {
      display: flex;
    }

    .accordion-h__item-top {
      font-size: 23px;
      height: 100%;
      width: auto;
      padding: 30px 24px 23px 27px;
      writing-mode: tb-rl;
      transform: rotate(-180deg);
    }

    .accordion-h__item-content .block-title {
      font-size: 27px;
    }

    .accordion-h__item-content .block-text,
    .accordion-h__titles .info-text {
      font-size: 18px;
      margin-top: 13px;
      line-height: 167%;
    }

    .accordion-h__item + .accordion-h__item {
      border: 2px solid #306cf4;
      border-left: none;
    }

    .accordion-h__item {
      border: 2px solid #306cf4;
      margin: 0;
      flex: 1 0 0%;
      width: auto;
      min-width: 78px;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.67, 0.32, 0, 0.87);
    }

    .is-open.accordion-h__item {
      flex: 1 0 75%;
      width: 85%;
      max-width: 100%;
      flex-grow: 9;
    }

    .is-open .accordion-h__item-top {
      background: #306cf4;
      color: #fff;
    }

    .accordion-h__item-content {
      padding: 16px 25px 16px 40px;
      max-height: 100%;
      opacity: 0;
      transition: opacity 0.3s ease;
      transition-delay: 0.15s;
    }

    .is-open .accordion-h__item-content {
      opacity: 1;
      overflow: auto;
    }

    .accordion-h__item-top .block-title__number {
      position: absolute;
      left: 32%;
      bottom: 20px;
      transform: rotate(90deg);
    }

    .accordion-h__item-content .block-text {
      margin-top: 17px;
      font-size: 16px;
    }

    .button {
      font-size: 18px;
      padding: 16px 32px;
    }
  }

  @media screen and (min-width: 1240px) {
    .accordion-h__item-content {
      padding: 16px 60px 16px 51px;
    }

    .accordion-h__item-content .block-title {
      font-size: 39px;
    }

    .accordion-h__item-content .block-text p + p {
      margin-top: 30px;
    }

    .accordion-h__item-content .block-text {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    .section-accordion-h .max-width {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
