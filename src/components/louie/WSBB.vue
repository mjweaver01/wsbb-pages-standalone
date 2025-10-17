<template>
  <section class="two-column" style="background-color: #ffffff">
    <span
      id="WestsideBarbell"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    ></span>

    <div class="max-width max-width--paddings two-column__content" style="max-width: 1360px">
      <img
        :src="westsideLogo"
        alt="Westside Barbell Logo"
        width="1348"
        height="1337"
        class="section__container-image"
      />

      <div class="two-column__grid">
        <h4 class="block-title block-title--lg" style="color: #212121">
          <mark>Westside</mark> Barbell
        </h4>
        <h4 class="block-title block-title--md" style="color: #212121"></h4>
        <div class="block-text" style="color: #212121">
          <p>
            Before the establishment of Louie Simmons'
            <a href="https://www.westside-barbell.com">Westside Barbell</a>
            in Columbus, Ohio, another influential strength training facility existed, the Westside
            Barbell Club in Culver City, California. The original Westside Barbell Club was founded
            in the 1950s by Bill "Peanuts" West, known for his unique approach to powerlifting and
            strength training. The gym housed some of the era's strongest and most talented lifters,
            including George Frenn, a hammer thrower and powerlifter who broke numerous records, Pat
            Casey, and Joey Demarco. This community of strength athletes, their
            <a
              href="https://www.westside-barbell.com/blogs/the-blog/tagged/strength-training-methods"
              >training methods</a
            >, and the environment at Westside Barbell Club in Culver City created an atmosphere of
            innovation and exploration that went against the status quo in strength training that
            was unmatched during that time.
          </p>
          <p>
            It is clear that Simmons drew inspiration from the innovative strength training
            techniques employed at the original Westside Barbell Club. Despite not having trained
            directly at the Culver City gym, he held great admiration for the groundbreaking work
            being done there and was motivated by the strong sense of community that fueled its
            members to reach unprecedented levels of success in powerlifting.
          </p>
          <h2>The Birth of Westside Barbell</h2>
          <p>
            Simmons decided to create his own version of the gym in the late 1970's. He named it
            Westside Barbell in tribute to the original club which had disbanded by then. However,
            Louie's Westside Barbell was destined to be much more than just a tribute. As time
            passed, Simmons started to integrate more scientific approaches into his workout
            techniques, making his gym stand out as a trailblazer in utilizing scientific principles
            for enhancing physical strength.
          </p>
          <p>
            The birth of Westside Barbell in Columbus, Ohio, was not just the start of a new gym; it
            was the initiation of a movement in the strength training world. The training methods
            and exercise techniques developed by Simmons and the crew at Westside Barbell have had a
            far-reaching impact, changing the face of powerlifting and strength training worldwide.
          </p>
          <p style="break-inside: avoid; page-break-inside: avoid">
            As a powerlifting legend and strength coach, Louie Simmons' approach to strength
            training has always been revolutionary. The foundation of Simmons' philosophy is the
            belief that strength training should be scientific and adaptive.
          </p>
        </div>
        <div class="two-column__space" style="height: 100px"></div>
        <div class="block-text" style="color: #212121">
          <h2>The Conjugate Method</h2>
          <p>
            Rather than sticking to traditional methods, Simmons was an early adopter of the
            <a href="https://www.westside-barbell.com/pages/conjugate-method">conjugate method</a>,
            a system that mixes maximum effort, dynamic effort (speed), and repetition work to
            improve maximal strength and speed-strength while targeting and eliminating physical
            weaknesses.
          </p>
          <p>
            Drawing from various sources, including Eastern Bloc training regimens, his methods
            eschewed the standard linear progression models commonly used in powerlifting training.
            Simmons' Westside Barbell training system, renowned for its high intensity and
            frequency, not only changed the face of powerlifting but was also applied successfully
            to various disciplines, from sports performance training to rehabilitation. His
            philosophy was always about pushing boundaries, emphasizing the importance of mental
            toughness, and championing the idea that our limitations were often self-imposed.
          </p>
        </div>
        <div class="block-text" style="color: #212121">
          <p>
            One of the most defining attributes of Louie Simmons was his relentless questioning of
            the status quo. Considered a contrarian amongst his peers, Simmons always exhibited a
            deep-seated desire to push boundaries and defy conventional wisdom in strength training.
            Simmons loathed the phrase "can't do." In his eyes, this term embodied a defeatist
            mentality, which had no place in pursuing strength. His training philosophies clearly
            echoed this belief, which emphasized mental resilience and unwavering determination as
            much as physical prowess.
          </p>
          <p>
            His approach to strength training fundamentally differed from his time's traditional
            American powerlifting techniques. Instead of conforming to the norms, Simmons looked
            towards the unconventional, infusing elements from the Eastern Bloc's strength and
            conditioning protocols into his training methods.
          </p>
          <p>
            In his quest for strength, Louie Simmons' constant questioning of the status quo and
            dislike of complacency made him a revolutionary force in the strength training world.
            His contributions were a testament to his exceptional understanding of the science of
            strength and his audacious spirit that dared to challenge the accepted norms and venture
            into the uncharted territories of strength training.
          </p>
        </div>
        <div class="info__buttons">
          <a
            href="https://www.westside-barbell.com/blogs/the-blog/the-westside-journey-continues-full-article"
            class="button button--secondary"
          >
            Read more about Louie's conjugate system journey
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import westsideLogo from '@/assets/pages/louie/Logo_5.png'
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

  .two-column__titles-buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .two-column__titles + .two-column__grid {
    margin-top: 0;
  }

  .two-column .info__buttons + .two-column__grid {
    margin-top: 20px;
  }

  .two-column .info-block__media {
    padding: 0;
    margin-top: 16px;
  }

  .two-column .block-title--md {
    margin-top: 9px;
    font-weight: 600;
    font-size: 14px;
    line-height: 133%;
  }

  .two-column .block-text {
    font-size: 12px;
    line-height: 133%;
    text-align: left;
  }

  .two-column .block-text p + p {
    margin-top: 10px;
  }

  .two-column * + .block-title--lg {
    margin-top: 12px;
  }

  .two-column .block-title--lg + .block-text {
    margin-top: 9px;
  }

  .two-column .info__buttons .button {
    margin-top: 10px;
  }

  .two-column .block-text + .info__buttons {
    margin-top: 9px;
  }

  .two-column__space {
    display: block;
    min-width: 100%;
    padding: 0;
    margin: 0;
    max-height: 0;
  }

  .two-column--title .two-column__titles .info-title + .info-text {
    margin-top: 7px;
  }

  /* Additional styles for components */
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

  .block-title--md {
    line-height: 1.25;
    text-transform: capitalize;
  }

  .block-title mark {
    color: #306cf4;
    font-family: inherit;
    background: none;
  }

  .block-text {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    text-align: left;
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

  .block-text h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
    color: inherit;
  }

  .block-text a {
    text-decoration: underline;
    color: #306cf4;
    line-height: 1.2;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }

  .block-text a:hover {
    color: #306cf4;
    opacity: 0.8;
  }

  .info__buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 19px;
  }

  .info__buttons .button {
    width: auto;
    max-width: unset;
    padding: 5px 17px;
    min-height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    margin-top: 0;
    font-size: 14px;
    text-transform: none;
    line-height: 1;
    font-weight: 500;
    color: #ffffff;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    transition:
      background-color 0.25s ease-in,
      border-color 0.25s ease-in;
    text-decoration: none;
  }

  .info__buttons .button--secondary {
    background: #306cf4;
  }

  .info__buttons .button--secondary:hover {
    background: #2757d1;
  }

  .section__container-image {
    display: none;
  }

  .anchor {
    scroll-margin-top: 100px;
  }

  @media screen and (max-width: 749px) {
    .two-column:not(.two-column--title) .max-width {
      padding-left: 18px;
      padding-right: 18px;
    }

    .mobile-left.info-titles .info-title,
    .mobile-left.info-titles .info-text {
      text-align: left;
    }

    .mobile-left.info__buttons {
      justify-content: flex-start;
    }

    .two-column .info__buttons .button {
      margin-top: 10px;
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

    .two-column .block-title--md {
      font-size: 20px;
    }

    .two-column__titles + .two-column__grid {
      margin-top: 70px;
    }

    .two-colum .info__buttons + .two-column__grid {
      margin-top: 59px;
    }

    .two-column .block-text {
      font-size: 14px;
    }

    .block-text h2 {
      font-size: 2rem;
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

    .two-column .block-title--md {
      font-size: 24px;
      margin-top: 17px;
      margin-bottom: 29px;
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

    .two-column .block-title--lg + .block-text {
      margin-top: 16px;
    }

    .two-column__titles-buttons {
      margin-top: 21px;
    }

    .two-column__grid {
      column-count: 2;
      column-gap: 40px;
    }

    .two-column .info__buttons + .two-column__grid {
      margin-top: 60px;
    }

    .two-column__space {
      max-height: unset;
    }

    .two-column .block-text {
      font-size: 18px;
      line-height: 169%;
      letter-spacing: 0;
    }

    .two-column .block-text p + p {
      margin-top: 20px;
    }

    .two-column .info__buttons {
      margin-top: 27px;
    }

    .two-column .info__buttons .button.button--white {
      padding: 5px 32px;
    }

    .two-column--title .two-column__titles .info-title + .info-text {
      margin-top: 15px;
    }

    .block-title--lg {
      font-size: 50px;
    }

    .info__buttons .button {
      padding: 5px 20px;
      min-height: 50px;
      font-size: 20px;
      min-width: 220px;
    }

    .section__container-image {
      display: block;
      position: absolute;
      left: 2%;
      max-width: 96%;
      top: -20px;
      object-fit: contain;
      object-position: top;
      z-index: 0;
      pointer-events: none;
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

    .two-column__grid {
      column-count: 2;
      column-gap: 80px;
    }

    .two-column .block-title--lg {
      line-height: 142%;
    }

    .two-column .block-title--md {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 29px;
    }

    .two-column .info__buttons {
      margin-top: 21px;
    }

    .two-column .block-text p + p {
      margin-top: 10px;
    }

    .section__container-image {
      top: -55px;
    }
  }
</style>
