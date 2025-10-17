<script lang="ts">
  import storyOfImage from '@/assets/pages/about/Group_175_1.png'
  import westsideHeader from '@/assets/pages/about/Group_175.png'
  import louieSimmons from '@/assets/pages/about/Rectangle_105.png'
  import trainingMethods from '@/assets/pages/about/Rectangle_106.png'
  export default {
    data() {
      return { storyOfImage, westsideHeader, louieSimmons, trainingMethods }
    },
  }
</script>

<template>
  <section class="shopify-section the-story">
    <div class="the-story" style="background-color: #f0efee">
      <div class="story-inner max-width">
        <div class="story-of">
          <img
            class="story-of-image"
            :src="storyOfImage"
            alt="Record Board"
            style="width: 100%; height: 100%; object-fit: cover"
            width="1236"
            height="36"
          />

          <div class="story-of-text center-text">
            <h2 class="light-blue">The Story Of</h2>
          </div>
        </div>

        <div class="westside-header">
          <img
            class="westside-header-image"
            :src="westsideHeader"
            alt="Westside Banner"
            style="width: 100%; height: 100%; object-fit: cover"
            width="1300"
            height="170"
          />

          <div class="westside-header-text center-text">
            <h1 class="hero">WESTSIDE<br />BARBELL</h1>
          </div>
        </div>

        <div class="story-info">
          <div class="info-right row">
            <div class="column-12-tablet-vert-6">
              <div class="person-image">
                <img
                  class="person-image-img"
                  :src="louieSimmons"
                  alt="Louie Simmons"
                  style="width: 100%; height: auto"
                  width="583"
                  height="1080"
                />
              </div>
            </div>
            <div class="column-12-tablet-vert-6">
              <div class="person-description">
                <h3>Westside Barbell was created by world-renowned power lifter</h3>
                <h1 class="light-blue">Louie Simmons</h1>
                <br />
                <p>
                  Louie is one of only 5 lifters to total Elite in 5 different powerlifting weight
                  classes. He has been a top 10 lifter for 30 years and for the last 37 years Louie
                  Simmons has totaled Elite in various power-lifting organizations. He is one of two
                  lifters over 50 years of age to squat 920 pounds, bench 600 pounds and dead lift
                  722 pounds and total 2100 pounds, and was ranked 4th nationally in 2000 in the
                  open. Over the many years that Louie has been involved in powerlifting and special
                  strength training, he has gained a vast amount of knowledge on how to produce
                  strength.
                </p>
                <br />
                <a href="/collections/education" class="button secondary">Learn From Louie</a>
              </div>
            </div>
          </div>

          <div class="info-left row row-reverse">
            <div class="column-12-tablet-vert-6">
              <div class="person-image">
                <img
                  class="person-image-img"
                  :src="trainingMethods"
                  alt="Training Methods"
                  style="width: 100%; height: auto; margin-bottom: -1em"
                  width="583"
                  height="1080"
                />
              </div>
            </div>
            <div class="column-12-tablet-vert-6">
              <div class="person-description">
                <p>
                  Through experience and constant, relentless research, his areas of expertise are
                  vast and include but are not limited to the list below;
                </p>
                <p></p>
                <ul>
                  <li>The Percent Training Method</li>
                  <li>The Conjugate Training Method</li>
                  <li>The Dynamic Training Method</li>
                  <li>The Maximum Effort Method</li>
                  <li>Lifting Technique</li>
                  <li>Raising Work Capacity</li>
                  <li>Rehabilitation And Restoration</li>
                  <li>The Reactive And Contrast Methods</li>
                  <li>Special Strength Development</li>
                </ul>
                <p></p>
                <p>
                  <a href="collections/special-strengths-certificate" class="secondary-featured"
                    >View Certificates</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @use '@/scss/variables.scss' as *;

  // Use existing styles from cms.scss for the story section
  .the-story {
    .story-inner {
      padding: 1em;

      @media (min-width: $tablet) {
        padding: 1em;
      }
    }

    .story-of,
    .westside-header {
      position: relative;
      border: 5px solid $white;
      border-bottom: 0;

      h1,
      h2 {
        margin-bottom: 0;
      }

      img {
        padding: 1em;
      }
    }

    .story-of-text,
    .westside-header-text {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center !important;
      justify-content: center !important;
      text-align: center;
      margin: 0 auto;
      transform: translateX(-50%);

      > * {
        color: $white;
      }
    }

    .westside-header-text h1 {
      line-height: 0.9;

      @media (max-width: calc($max-width - 1px)) {
        font-size: 3em;
      }

      @media (max-width: calc($desktop - 1px)) {
        font-size: 2.5em;
      }

      @media (max-width: calc($mobile - 1px)) {
        font-size: 2em;
      }
    }

    .westside-header,
    .story-of {
      @media (max-width: calc($tablet - 1px)) {
        div {
          position: relative;
          padding: 1em;

          &.westside-header-text {
            padding: 2em 1em;
          }
        }

        img {
          position: absolute;
        }
      }
    }

    .story-info {
      padding: 1em 1em 0;
      border: 5px solid $white;
      border-bottom: 5px solid $white;

      .info-left {
        margin-top: 3em;
      }

      @media (min-width: $tablet) {
        .info-right {
          margin-top: 1em;
          margin-right: 1em;
        }

        .info-left {
          margin-top: 1em;
          margin-left: 1em;
        }

        .person-description {
          padding: 2em 0px;
        }
      }

      img {
        padding: 0;
      }

      .secondary-featured {
        text-transform: uppercase;

        &:not(:hover) {
          color: $black;
        }
      }
    }
  }
</style>
