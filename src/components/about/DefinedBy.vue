<script lang="ts">
  import definedByImage from '@/assets/pages/about/Rectangle_95.png'

  export default {
    data() {
      return { definedByImage }
    },
  }
</script>

<template>
  <section class="shopify-section defined-by">
    <div class="defined-by">
      <img
        class="defined-by-image"
        :src="definedByImage"
        alt="Record Board"
        style="width: 100%; height: 100%; object-fit: cover"
        width="1920"
        height="1080"
      />

      <div class="block max-width row-right">
        <div class="column-12-tablet-vert-8 tablet-width defined-by-text-wrapper">
          <h4 id="ddo" class="light-blue black-background">defined by decades of</h4>
          <h1 id="hwcs" class="hero">Hard work<br />Commitment<br />&amp; Sacrifice</h1>
        </div>
      </div>

      <div class="block max-width row">
        <div class="column-12-tablet-vert-6">
          <h1>Westside Barbell</h1>
          <h1 class="hero">Culture</h1>
          <p>
            This gym is not for the timid nor is it for those seeking fame. You must earn your
            membership through blood, sweat and other peoples tears. Your are held accountable for
            every word that you say and at any time you must be willing to back it up verbally or
            physically.
          </p>
          <br />
          <a href="/pages/staff" class="button secondary">Meet Our Staff &amp; Coaches</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use '@/scss/variables.scss' as *;

  // Media query for responsive text positioning
  @media (min-width: 768px) and (max-width: 850px) {
    #hwcs {
      font-size: 3em;
    }
    #ddo,
    #hwcs {
      margin-left: 34%;
    }
  }

  // Use existing styles from cms.scss for the defined-by section
  .defined-by {
    padding: 0 !important;

    img {
      position: absolute;
    }

    .block {
      position: relative;
      padding: 3em 0.5em 0;

      &:last-of-type {
        padding-bottom: 3em;
      }

      @media (min-width: $tablet) {
        padding: 6em 0.5em 0;

        &:last-of-type {
          padding-bottom: 6em;
        }
      }

      @media (max-width: calc($tablet - 1px)) {
        div[class*='column'] {
          padding-bottom: 0;
          margin: 0;
          max-width: 500px;
        }

        &.row-right div[class*='column'] {
          width: auto;
          flex-grow: 0;
          margin-right: 0;
          margin-left: auto;
          flex-basis: 0;
        }
      }
    }

    @media (min-width: $tablet) {
      .tablet-width {
        min-width: $tablet;
      }
    }

    *:not(a) {
      color: $light-neutral;
    }

    @media (max-width: 400px) {
      .hero {
        font-size: 1.65em;
      }
    }

    // Specific styling for the text wrapper
    .defined-by-text-wrapper h4 {
      background: $black;
      display: inline-block;
      padding: 0.25em 0.5em;
      color: $primary-color;
    }
  }
</style>
