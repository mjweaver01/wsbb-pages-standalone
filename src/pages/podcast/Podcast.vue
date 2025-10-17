<script setup lang="ts">
  import HeaderHero from '@/components/HeaderHero.vue'
  import Hotlinks from '@/components/Hotlinks.vue'
  import podcastHero from '@/assets/pages/podcast/Screenshot_2023-05-27_at_12.56.4.jpg'
</script>

<template>
  <div class="page podcast">
    <HeaderHero
      :heroImage="podcastHero"
      title="The Westside barbell Podcast"
      subtitle=""
      :description="[
        'Welcome to the Westside Barbell Podcast, hosted by Tom Barry, CEO of Westside Barbell, a company that focuses on strength training education. We aim to empower listeners with helpful tips and knowledge to succeed in their strength training development journey. Tune in for in-depth discussions with top athletes and coaches about training techniques, injury prevention, and more. We are committed to preserving and building upon the educational legacy of our founder Louie Simmons.',
      ]"
      :listItems="[]"
      buttonText="Watch now"
      buttonUrl="/blogs/westside-barbell-podcast-2"
      backgroundColor="rgba(0,0,0,0)"
      textColor="#ffffff"
      titleSize="60px"
      imageAlt="Louie Simmons"
      :imageWidth="2000"
      :imageHeight="1332.9999999999998"
    />
    <Hotlinks
      :links="[
        { href: '#about', text: 'About the Podcast' },
        { href: '#listen', text: 'Listen and Follow' },
        { href: '#ama', text: 'Ask Me Anything' },
        { href: '#sponsors', text: 'Our Sponsors' },
        { href: '#subscribe', text: 'Subscribe' },
        { href: '#watch', text: 'Watch Episodes' },
        { href: '#donate', text: 'Donate' },
      ]"
    />
  </div>
</template>
