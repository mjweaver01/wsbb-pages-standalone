<template>
  <section class="shopify-section">
    <section class="image-info" style="background-color:">
      <span
        id="LouiesBackground"
        style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
        class="anchor"
      ></span>

      <div class="max-width max-width--paddings image-info__content" style="max-width: 1360px">
        <div class="info-titles image-info__titles">
          <div class="info-title info-title--lg" style="color: #212121">
            <p>Louie's Background</p>
          </div>
        </div>

        <div class="image-info__grid">
          <div class="image-info__grid-item image-info__media">
            <img
              class="mobile-image is-hidden-desktop-only"
              :src="louieBackground"
              alt="Louie Simmons"
              width="1200"
              height="1200"
              style="border-radius: 16px"
            />

            <img
              class="is-hidden-mobile-only desktop-image"
              :src="louieBackground"
              alt="Louie Simmons"
              width="1242"
              height="2208"
              style="border-radius: 16px"
            />
          </div>

          <div class="image-info__info">
            <div class="block-text" style="color: #212121">
              <p>
                Louie competed at an elite level in
                <a href="https://www.westside-barbell.com/blogs/the-blog/tagged/powerlifting"
                  >powerlifting</a
                >
                for over three decades, excelling in the squat, bench press, and deadlift.
              </p>

              <p>
                Most current information on the
                <a href="https://www.westside-barbell.com/pages/conjugate-method"
                  >Conjugate Method of training</a
                >, including this article, refers to Louie Simmons's work which combines two
                training systems.
              </p>

              <p>
                He broke numerous powerlifting records throughout his career and remarkably achieved
                'Elite' status in five weight classes. One of his most notable achievements was
                being one of only a few lifters to have totaled over 2,000 lbs in two different
                weight classes.
              </p>

              <p>
                Simmons was widely celebrated in training and coaching circles for developing the
                Conjugate System. This methodology emphasized maximum effort, dynamic effort
                (speed), and repetition to enhance strength and performance. His revolutionary
                approach towards strength training incorporated elements from various sources,
                including Russian and Bulgarian weightlifting training techniques, successfully
                adapting them for powerlifting.
              </p>

              <p>
                Simmons is known for focusing on injury prevention and helping with recovery through
                strength training. He was motivated by his injury experiences to create and patent a
                variety of strength training equipment, including the well-known
                <a
                  href="https://www.westside-barbell.com/blogs/the-blog/louie-simmons-reverse-hyper"
                  >Reverse Hyper machine</a
                >
                that is now commonly used in gyms and rehabilitation facilities worldwide.
              </p>

              <p>
                As a coach and a mentor, Louie was instrumental in the success of many athletes.
                Professional and collegiate teams, military and law enforcement agencies, and
                strength athletes globally adopted his revolutionary training principles.
              </p>

              <div class="video-responsive-wrapper">
                <div class="video-responsive">
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/XKmKnbqe1WM?si=f1wkdxx0KubeWrNS"
                    title="YouTube video player"
                    style="border: none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
  import louieBackground from '@/assets/pages/louie/DSC1046_LouieSimmons_1200x1200_8.jpg'
</script>

<style lang="scss" scoped>
  @use '@/scss/variables.scss' as *;

  .image-info {
    padding: 3rem 0;

    @media (min-width: $tablet) {
      padding: 4rem 0;
    }

    @media (min-width: $desktop) {
      padding: 6rem 0;
    }
  }

  .image-info__content {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: $tablet) {
      padding: 0 2rem;
    }

    @media (min-width: $desktop) {
      padding: 0 3rem;
    }
  }

  .info-titles {
    margin-bottom: 3rem;
    text-align: center;

    @media (min-width: $tablet) {
      margin-bottom: 4rem;
    }
  }

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

    &--lg {
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      text-transform: uppercase;
      font-family:
        Knockout Ult Sumo,
        Helvetica,
        sans-serif;

      @media (min-width: $tablet) {
        font-size: 50px;
      }
    }

    p {
      font-size: inherit;
      margin: 0;
      padding: 0;
      font-family: inherit;
      font-weight: inherit;
      color: inherit;
      line-height: inherit;
    }
  }

  .image-info__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;

    @media (min-width: $tablet) {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    @media (min-width: $desktop) {
      gap: 4rem;
    }
  }

  .image-info__media {
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 16px;
    }

    .mobile-image {
      display: block;

      @media (min-width: $tablet) {
        display: none;
      }
    }

    .desktop-image {
      display: none;

      @media (min-width: $tablet) {
        display: block;
      }
    }
  }

  .block-text {
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;

    @media (min-width: $tablet) {
      font-size: 18px;
      line-height: 164%;
    }

    p {
      font-size: inherit;
      margin: 0 0 1rem 0;
      padding: 0;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
    }

    a {
      text-decoration: underline;
      color: #306cf4;
      font-size: inherit;
      font-family: inherit;
      cursor: pointer;

      &:hover {
        color: #306cf4;
        opacity: 0.8;
      }
    }
  }

  .video-responsive-wrapper {
    margin-top: 2rem;
  }

  .video-responsive {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .anchor {
    scroll-margin-top: 100px;
  }
</style>
