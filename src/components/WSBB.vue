<template>
  <section id="hero-section" class="hero-section">
    <img
      id="hero-image-desktop"
      class="hero-image desktop"
      :src="heroDesktop"
      alt="Westside Barbell Hero"
      width="1920"
      height="1080"
      style="object-fit: cover; object-position: top"
    />

    <img
      id="hero-image-mobile"
      class="hero-image mobile"
      :src="heroMobile"
      alt="Westside Barbell Hero"
      width="800"
      height="450"
      style="object-fit: cover; object-position: top"
    />

    <div class="container">
      <div id="hero-text">
        <h1 class="hero-text" id="hero-preheader">Often imitated, always irritated</h1>
        <h1 class="hero hero-text hero-header" id="hero-header-desktop">WESTSIDE<br />BARBELL</h1>
        <h1 class="hero hero-text hero-header" id="hero-header-mobile">WESTSIDE<br />BARBELL</h1>
        <h4 class="hero-text" id="hero-subheader">the world's strongest training facility</h4>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import heroDesktop from '@/assets/pages/about/Hero_BG-squat_1_1_1.png'
  import heroMobile from '@/assets/pages/about/Hero_BG-squat_1_1_1_800x.png'

  export default {
    data() {
      return { heroDesktop, heroMobile }
    },
  }
</script>

<style lang="scss">
  @use '@/scss/variables.scss' as *;

  section.hero-section {
    position: relative;
    height: 100vh;
    height: 74vw;
    max-height: 97vh;
    min-height: 550px;
    overflow: hidden;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    height: calc(100% + 5px);
    /* object-fit and object-position are now handled by Astro's responsive styles */

    &.mobile {
      display: none;
    }
  }

  section.hero-section .container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    transform: translateX(-50%);
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  #hero-text {
    text-align: center;
    margin: 7vw;
    max-width: 832px;
  }

  #hero-preheader {
    font-weight: 400;
    font-size: 24px;
    color: #ffffff;
  }

  #hero-header-desktop {
    font-size: 80px;
    font-weight: 900;
    color: #ffffff;
  }

  #hero-header-mobile {
    font-size: 32px;
    font-weight: 900;
    color: #ffffff;
    margin-top: 4em;
    display: none;
  }

  #hero-subheader {
    font-weight: 400;
    font-size: 24px;
    color: #2a95fa;
  }

  // Responsive Styles
  @media (max-width: $desktop) {
    #hero-preheader {
      font-size: 16px;
    }

    #hero-header-desktop {
      font-size: 64px;
      margin-top: 40px;
    }

    #hero-subheader {
      font-size: 20px;
    }
  }

  @media (max-width: $tablet) {
    .hero-image.desktop {
      display: none;
    }

    .hero-image.mobile {
      display: block;
    }

    section.hero-section {
      height: 700px;
      height: 136vw;
    }

    section.hero-section .container {
      align-items: flex-end;
      justify-content: center;
    }

    #hero-text {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding: 1em;
      text-align: center;
    }

    #hero-header-desktop {
      display: none;
    }

    #hero-header-mobile {
      display: block;
    }

    #hero-preheader,
    #hero-subheader {
      font-size: 16px;
    }

    #html-grid-custom-html-grid .custom-html-grid-description {
      padding: 2em;
    }

    #html-grid-custom-html-grid {
      padding: 2em 0 0;
    }

    .story-info .row {
      flex-direction: column;
    }

    .story-info .row-reverse {
      flex-direction: column;
    }

    .column-12-tablet-vert-6 {
      padding: 1rem 0;
    }

    section.homepage-blog-featured-blog {
      padding: 2em 0em;
    }
  }
</style>
