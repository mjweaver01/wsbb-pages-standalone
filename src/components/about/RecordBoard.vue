<script lang="ts">
  import recordBoardImage from '@/assets/pages/about/Rectangle_109.png'

  export default {
    data() {
      return { recordBoardImage }
    },
  }
</script>

<template>
  <section class="shopify-section record-board">
    <div class="record-board-wrapper">
      <img
        class="record-board-image"
        :src="recordBoardImage"
        alt="Record Board"
        style="width: 100%; height: 100%; object-fit: cover"
        width="1920"
        height="1080"
      />

      <div class="max-width record-board-description">
        <h1 class="hero">
          The Westside<br />
          record<br />
          board
        </h1>
        <h3 class="light-blue">NUMBERS DONT LIE</h3>
        <br />
        <br />
        <a href="/blogs/gym-lifts" class="secondary-featured">THE RECORDS</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use '@/scss/variables.scss' as *;

  // Use existing styles from cms.scss for the record-board section
  .record-board-wrapper {
    position: relative;
    margin-bottom: -5px;
    max-height: 500px;
    max-height: 80vh;
    overflow: hidden;

    .hero {
      max-width: 500px;
    }
  }

  .record-board-description {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    transform: translateX(-50%);

    > * {
      color: $white;
    }
  }

  @media (max-width: calc($tablet - 1px)) {
    .record-board-wrapper {
      div {
        position: relative;
        padding: 1em;

        &.record-board-description {
          padding: 3em 1em;
        }
      }

      img {
        position: absolute;
      }
    }
  }
</style>
