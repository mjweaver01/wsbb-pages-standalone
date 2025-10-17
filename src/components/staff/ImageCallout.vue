<script setup lang="ts">
  import type { CalloutItem } from '@/types'

  interface Props {
    items: CalloutItem[]
    className?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    className: '',
  })

  const getRowClass = (item: CalloutItem) => {
    const isImageLeft = item.imagePosition === 'left' || item.imagePosition === undefined
    return isImageLeft ? 'row' : 'row row-reverse'
  }

  const getContentArray = (content: string[] | string) => {
    return Array.isArray(content) ? content : [content]
  }

  const isHeading = (paragraph: string) => {
    return (
      paragraph.includes(':') &&
      (paragraph.split(':')[0]?.length ?? 0) < 50 &&
      !paragraph.includes('.')
    )
  }

  const processLinksInParagraph = (paragraph: string, links?: CalloutItem['links']) => {
    if (!links) return paragraph

    let processed = paragraph
    links.forEach(link => {
      const linkHtml = `<a href="${link.href}"${link.target ? ` target="${link.target}"` : ''}${link.rel ? ` rel="${link.rel}"` : ''}>${link.text}</a>`
      processed = processed.replace(link.text, linkHtml)
    })
    return processed
  }

  const hasLinks = (paragraph: string, links?: CalloutItem['links']) => {
    return links && links.some(link => paragraph.includes(link.text))
  }
</script>

<template>
  <div :class="`people ${className}`">
    <div
      v-for="(item, index) in items"
      :key="item.id || index"
      :class="`person ${getRowClass(item)}`"
    >
      <div class="column-12-tablet-vert-6">
        <div class="person-image">
          <img
            class="full-width"
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
          />
        </div>
      </div>
      <div class="column-12-tablet-vert-6">
        <div class="person-description">
          <h1
            class="light-blue"
            :id="item.id"
            :style="
              item.style?.scrollMarginTop
                ? `scroll-margin-top: ${item.style.scrollMarginTop}`
                : undefined
            "
          >
            {{ item.name }}
          </h1>
          <h4 v-if="item.title">{{ item.title }}</h4>
          <h2 v-if="item.subtitle">{{ item.subtitle }}</h2>
          <template v-for="(paragraph, pIndex) in getContentArray(item.content)" :key="pIndex">
            <h4 v-if="isHeading(paragraph)">{{ paragraph }}</h4>
            <p
              v-else-if="hasLinks(paragraph, item.links)"
              v-html="processLinksInParagraph(paragraph, item.links)"
            />
            <p v-else>{{ paragraph }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
