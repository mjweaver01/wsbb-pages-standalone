<template>
  <section class="tab-column" style="background-color: #000000">
    <span
      id="CareerAndEarlyLife"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    ></span>

    <div class="max-width max-width--paddings tab-column__content" style="">
      <div class="info-titles tab-column__titles mobile-center">
        <div class="info-title info-title--lg" style="color: #ffffff">
          <p>Career &amp; Early Life</p>
        </div>

        <div class="info-text" style="color: #ffffff">
          <p>
            Louie Simmons earned enough money from manual labor jobs to purchase his first weight
            set at 12. He had already developed the strength to perform a clean and jerk, a
            testament to the physical prowess he gained from manual labor. This early exposure to
            strenuous physical work primed Louie for weightlifting. It endowed him with the
            explosive power necessary for his baseball swings.
          </p>
        </div>
      </div>

      <div class="mobile-center tab-column__titles-buttons info__buttons">
        <span
          @click="activeTab = 'career'"
          :class="['button', 'button--primary', { active: activeTab === 'career' }]"
        >
          Powerlifting Career
        </span>
        <span
          @click="activeTab = 'early'"
          :class="['button', 'button--primary', { active: activeTab === 'early' }]"
        >
          Early Life
        </span>
      </div>

      <div class="tab-column__grid">
        <div v-show="activeTab === 'career'" class="tab-column__grid-item">
          <div class="block-text" style="color: #ffffff">
            <p>
              Louie Simmons was a name synonymous with strength, innovation, and powerlifting. Often
              hailed as the Godfather of Powerlifting, Simmons transformed the way athletes train
              for strength, demonstrating a work ethic and knowledge unparalleled in the field. He
              shared these insights with the lucky few he invited to train at his legendary gym,
              Westside Barbell, located in Columbus, Ohio.
            </p>
            <p>
              Simmons, an American powerlifter and one of the greatest strength coaches of all time,
              was an inventor and trailblazer in the field of strength training.
            </p>
            <p>
              He devised training ideologies like the Conjugate Method, leading to the
              standardization of resistance bands and chains during workouts. Moreover, Simmons'
              innovative contributions included the invention of several strength training devices,
              such as the reverse hyper and the belt squat machine.
            </p>
            <p>
              Known for his candor and refreshing honesty, Simmons spoke openly on topics without
              concern for others' judgment or criticism. He approached everything related to
              strength training with enthusiasm and resilience, and his dedication to powerlifting
              was evident in his coaching career, training sports legends such as Chuck Vogelpohl,
              Dave Hoff, Laura Phelps, and Amy Weisberger. Louie also trained other notable lifters
              turned coaches such as Jim Wendler, AJ Roberts, Brandon Lilly, and Dave Tate.
            </p>
            <p>
              His competitive powerlifting years, spanning over 40 years from 1972 to 2012, left a
              substantial mark on the sport. He achieved Elite totals in five different weight
              classes. He completed impressive lifts all after the age of 50, including a 920lb
              squat, a 722lb deadlift, and a 600lb bench press.
            </p>
          </div>
          <div class="info__button bio-button">
            <a
              href="https://www.westside-barbell.com/collections/books/products/wsbb-the-iron-samurai-the-true-story-of-westside-barbell"
              class="button button--primary"
            >
              Read Louie's Biography
            </a>
          </div>
        </div>

        <div v-show="activeTab === 'early'" class="tab-column__grid-item">
          <div class="block-text" style="color: #ffffff">
            <p>
              The age of 12 proved to be a pivotal year for Louie, marking the start of his journey
              into both competitive baseball and weightlifting. By the time he was 14, he was
              already showcasing his potential, winning a high school weightlifting contest with a
              notable 260-pound clean and jerk - a remarkable feat for a teenager weighing around
              145 pounds.
            </p>
            <p>
              Louie's father built squat racks using tire rims and welded uprights to support his
              son's passion for weightlifting, allowing him to develop his
              <a href="https://www.westside-barbell.com/blogs/the-blog/how-to-squat-correctly"
                >squatting skills</a
              >. By age 14, he could squat an impressive 410 pounds. However, he could not surpass
              this limit for the next four years. Louie worked manual labor jobs throughout his
              teenage years, maintaining his work ethic even as he struggled through high school,
              ultimately graduating by the skin of his teeth. He was open to work, even if it meant
              laboring until late in the evening during the summer or after school. One job he
              vividly remembered involved demolishing walls at some of Jerry Schottenstein's stores
              in Columbus, Ohio. One summer, at just 13 years old, he was employed in iron erection
              work, a role that, in today's world, might land an employer in legal trouble for
              involving a minor. These early experiences paved the way for Louie's proficiency in
              operating heavy machinery such as cranes, backhoes, and bulldozers and his skill in
              welding. Later in life, these skills proved invaluable as he led large steel erection
              crews while operating a crane and even became a certified welder.
            </p>
          </div>
          <div class="info__button bio-button">
            <a
              href="https://www.westside-barbell.com/blogs/the-blog/conjugate-system"
              class="button button--primary"
            >
              Read Louie's Biography
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const activeTab = ref<'career' | 'early'>('career')
</script>

<style lang="scss" scoped>
  @use '@/scss/variables.scss' as *;

  .tab-column {
    padding-top: 40px;
    padding-bottom: 39px;
    position: relative;
  }

  .tab-column--title {
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

  .tab-column__content {
    position: relative;
  }

  .tab-column--title .tab-column__content {
    padding: 0 10px;
  }

  .tab-column__titles {
    text-align: center;
  }

  .tab-column__titles .info-title {
    font-size: 23px;
    line-height: 154%;
  }

  .tab-column__titles .info-text {
    font-size: 12px;
    margin-top: 8px;
    line-height: 134%;
    text-align: center;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
  }

  .tab-column__titles .info-title + .info-text {
    margin-top: 11px;
  }

  .tab-column__titles .info-text p + p {
    margin-top: 11px;
  }

  .tab-column__titles-buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .tab-column__titles + .tab-column__grid {
    margin-top: 16px;
  }

  .tab-column .info__buttons + .tab-column__grid {
    margin-top: 20px;
  }

  .tab-column .info-block__media {
    padding: 0;
    margin-top: 16px;
  }

  .tab-column .block-title--md {
    margin-top: 9px;
    font-weight: 600;
    font-size: 14px;
    line-height: 133%;
  }

  .tab-column .block-text {
    font-size: 12px;
    line-height: 133%;
    text-align: left;
  }

  .tab-column .block-text p + p {
    margin-top: 10px;
  }

  .tab-column * + .block-title--lg {
    margin-top: 12px;
  }

  .tab-column .block-title--lg + .block-text {
    margin-top: 9px;
  }

  .tab-column .info__buttons .button {
    margin-top: 10px;
    transition: background-color 0.3s ease-in;
  }

  .tab-column .info__button.bio-button .button {
    background: $primary-color;
    border-color: $primary-color;
  }

  .tab-column .info__buttons .button.active {
    background-color: #306cf4bf;
    color: #fff;
  }

  .tab-column .block-text + .info__buttons {
    margin-top: 9px;
  }

  .tab-column--title .tab-column__titles .info-title + .info-text {
    margin-top: 7px;
  }

  .tab-column__grid-item {
    display: block;
  }

  .info-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    color: #ffffff;
    font-family:
      Knockout HTF51 Middle,
      Helvetica,
      sans-serif;
    margin-bottom: 1rem;
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

  .info-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    margin: 0 auto;
  }

  .info-text p {
    width: 100%;
    font-size: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  .info__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .block-text {
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
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

  .block-text a {
    text-decoration: underline;
    color: #ffffff;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }

  .block-text a:hover {
    opacity: 0.8;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  .mobile-center {
    text-align: center;
  }

  @media screen and (max-width: 749px) {
    .tab-column:not(.tab-column--title) .max-width {
      padding-left: 18px;
      padding-right: 18px;
    }

    .mobile-left.info-titles .info-title {
      text-align: left;
    }

    .mobile-left.info-titles .info-text {
      text-align: left;
    }

    .mobile-left.info__buttons {
      justify-content: flex-start;
    }

    .tab-column .info__buttons .button {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 750px) {
    .tab-column__titles .info-title {
      font-size: 33px;
    }

    .tab-column__titles .info-text {
      font-size: 14px;
    }

    .tab-column .block-title--md {
      font-size: 20px;
    }

    .tab-column__titles + .tab-column__grid {
      margin-top: 70px;
    }

    .two-colum .info__buttons + .tab-column__grid {
      margin-top: 59px;
    }

    .tab-column .block-text {
      font-size: 14px;
    }

    .info-title--lg {
      font-size: 33px;
    }

    .info-text {
      font-size: 16px;
      line-height: 164%;
    }

    .block-text {
      font-size: 18px;
      line-height: 164%;
    }
  }

  @media screen and (min-width: 1025px) {
    .tab-column {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .tab-column--title {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .tab-column__titles .info-title {
      font-size: 49px;
      line-height: 147%;
    }

    .tab-column .block-title--md {
      font-size: 24px;
      margin-top: 17px;
      margin-bottom: 29px;
    }

    .tab-column__titles .info-text {
      font-size: 18px;
      margin-top: 13px;
      line-height: 171%;
    }

    .tab-column__titles .info-title + .info-text {
      margin-top: 21px;
    }

    .tab-column--title .tab-column__titles .info-text {
      margin-top: 13px;
      line-height: 171%;
    }

    .tab-column__titles .info-text p + p {
      margin-top: 16px;
    }

    .tab-column--title .tab-column__titles .info-text p + p {
      margin-top: 30px;
    }

    .tab-column .block-title--lg + .block-text {
      margin-top: 16px;
    }

    .tab-column__titles-buttons {
      margin-top: 21px;
    }

    .tab-column__grid {
      column-count: 2;
      column-gap: 40px;
    }

    .tab-column .info__buttons + .tab-column__grid {
      margin-top: 60px;
    }

    .tab-column .block-text {
      font-size: 18px;
      line-height: 169%;
      letter-spacing: 0;
    }

    .tab-column .block-text p + p {
      margin-top: 20px;
    }

    .tab-column .info__buttons {
      margin-top: 27px;
    }

    .tab-column .info__buttons .button.button--white {
      padding: 5px 32px;
    }

    .tab-column--title .tab-column__titles .info-title + .info-text {
      margin-top: 15px;
    }

    .info-title--lg {
      font-size: 50px;
    }

    .max-width--paddings {
      padding: 0 3rem;
    }
  }

  @media screen and (min-width: 1240px) {
    .tab-column {
      padding-top: 114px;
      padding-bottom: 123px;
    }

    .tab-column--title {
      padding-top: 112px;
      padding-bottom: 121px;
    }

    .tab-column__grid {
      column-count: 2;
      column-gap: 80px;
    }

    .tab-column .block-title--lg {
      line-height: 142%;
    }

    .tab-column .block-title--md {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 29px;
    }

    .tab-column .info__buttons {
      margin-top: 21px;
    }

    .tab-column .block-text p + p {
      margin-top: 10px;
    }
  }
</style>
