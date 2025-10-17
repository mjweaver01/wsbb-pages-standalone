<template>
  <section class="two-column two-column--title" style="background-color: #262626">
    <img
      :src="piecingItTogether"
      loading="lazy"
      alt="Elite Powerlifting"
      width="375"
      height="232"
      class="section__bg-image section__bg-image--mobile"
    />

    <img
      :src="piecingItTogether"
      loading="lazy"
      alt="Elite Powerlifting"
      width="1600"
      height="470"
      class="section__bg-image section__bg-image--desktop"
    />

    <div class="max-width max-width--paddings two-column__content" style="max-width: 768px">
      <div class="info-titles two-column__titles mobile-center">
        <div class="info-title info-title--lg" style="color: #ffffff">
          <p><mark>What does it mean to be elite?</mark></p>
        </div>

        <div class="info-text" style="color: #ffffff">
          <p>
            Attaining elite status in powerlifting is a remarkable accomplishment. It signifies that
            these lifters, starting from a novice level, have reached the upper echelons of the
            sport through their dedicated training at Westside Barbell and under Louie Simmons'
            mentorship.
          </p>
          <p>
            To become an elite powerlifter, an athlete's total - comprising their maximum squat,
            bench press, and deadlift - must rank among the top ten totals in their respective
            weight class. This combination of weight lifted across the three major powerlifting
            exercises establishes an athlete's standing in the sport. In other words, to achieve
            elite status is to be recognized as one of the strongest, most dedicated powerlifters in
            one's weight class which is a testament to not only the physical prowess of the athlete
            but also the effective training methods and strategies employed.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import piecingItTogether from '@/assets/pages/louie/Piecing_it_together-lg.jpg'
</script>

<style scoped>
  /* Two Column Section Styles */
  .two-column {
    padding-top: 40px;
    padding-bottom: 39px;
    position: relative;
  }

  .two-column--title {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section__bg-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .section__bg-image--desktop {
    display: none;
  }

  .section__bg-image--mobile {
    display: block;
  }

  .two-column__content {
    position: relative;
  }

  .two-column--title .two-column__content {
    padding: 0 10px;
  }

  .two-column__titles {
    text-align: center;
  }

  .two-column__titles .info-title {
    font-size: 23px;
    line-height: 154%;
  }

  .two-column__titles .info-text {
    font-size: 12px;
    margin-top: 8px;
    line-height: 134%;
    text-align: center;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
  }

  .two-column__titles .info-title + .info-text {
    margin-top: 11px;
  }

  .two-column__titles .info-text p + p {
    margin-top: 11px;
  }

  .two-column--title .two-column__titles .info-title + .info-text {
    margin-top: 7px;
  }

  /* Additional styles for components */
  .info-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    color: #212121;
    font-family:
      Knockout HTF51 Middle,
      Helvetica,
      sans-serif;
  }

  .info-title--lg {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
  }

  .info-title p {
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    line-height: inherit;
  }

  .info-title mark {
    color: #306cf4;
    font-family: inherit;
    background: none;
  }

  .info-text {
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    font-weight: 500;
  }

  .info-text p {
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  .info-text p + p {
    margin-top: 16px;
  }

  .mobile-center {
    text-align: center;
  }

  @media screen and (max-width: 749px) {
    .two-column:not(.two-column--title) .max-width {
      padding-left: 18px;
      padding-right: 18px;
    }
  }

  @media screen and (min-width: 750px) {
    .section__bg-image--desktop {
      display: block;
    }

    .section__bg-image--mobile {
      display: none;
    }

    .two-column__titles .info-title {
      font-size: 33px;
    }

    .two-column__titles .info-text {
      font-size: 14px;
    }

    .info-title--lg {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 1025px) {
    .two-column {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .two-column--title {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .two-column__titles .info-title {
      font-size: 49px;
      line-height: 147%;
    }

    .two-column__titles .info-text {
      font-size: 18px;
      margin-top: 13px;
      line-height: 171%;
    }

    .two-column__titles .info-title + .info-text {
      margin-top: 21px;
    }

    .two-column--title .two-column__titles .info-text {
      margin-top: 13px;
      line-height: 171%;
    }

    .two-column__titles .info-text p + p {
      margin-top: 16px;
    }

    .two-column--title .two-column__titles .info-text p + p {
      margin-top: 30px;
    }

    .two-column--title .two-column__titles .info-title + .info-text {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 1240px) {
    .two-column {
      padding-top: 114px;
      padding-bottom: 123px;
    }

    .two-column--title {
      padding-top: 112px;
      padding-bottom: 121px;
    }
  }
</style>
