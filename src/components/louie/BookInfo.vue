<template>
  <section class="section-book-info">
    <span
      id="ConjugateMethodBook"
      style="position: relative; width: 100%; display: block; height: 0; scroll-margin-top: 100px"
      class="anchor"
    ></span>

    <div class="max-width max-width--paddings" style="max-width: 1360px">
      <div class="book-info__grid">
        <!-- Further Reading Block -->
        <div class="book-info__further book-info__block">
          <h4 class="block-title block-title--lg">Further Reading</h4>

          <div class="block-text">
            <p>
              _<br /><a
                href="https://www.westside-barbell.com/blogs/the-blog"
                target="_blank"
                title="https://www.westside-barbell.com/blogs/the-blog"
                >Latest Strength Training Articles</a
              >
            </p>
            <p>_</p>
            <p>
              <a
                href="https://www.westside-barbell.com/blogs/the-blog/conjugate-system"
                target="_blank"
                title="https://www.westside-barbell.com/blogs/the-blog/conjugate-system"
                >Louie Simmons' Conjugate System</a
              >
            </p>
            <p>_</p>
            <p>
              <a
                href="https://www.westside-barbell.com/blogs/the-blog/tthe-westside-barbell-template-for-athletic-development"
                target="_blank"
                title="https://www.westside-barbell.com/blogs/the-blog/tthe-westside-barbell-template-for-athletic-development"
                >Westside Template for Athletic Development<br /><br /></a
              >_
            </p>
            <p>
              <a
                href="https://www.westside-barbell.com/collections/books"
                target="_blank"
                title="https://www.westside-barbell.com/collections/books"
                >Louie Simmons Authored Books</a
              >
            </p>
            <p></p>
          </div>
        </div>

        <!-- Book Info Article Block -->
        <div class="book-info__article book-info__block">
          <div class="book-info__article-media">
            <img
              class="book-info__article-media-image"
              :src="ironSamuraiBook"
              alt="The Iron Samurai Book Cover"
              width="1600"
              height="1600"
            />
          </div>

          <h4 class="block-title block-title--lg">The Iron Samurai</h4>

          <div class="block-text block-text--lg">
            <p>
              The Iron Samurai is the official biography of Louie Simmons and the true story behind
              Westside Barbell in Columbus Ohio.
            </p>
            <p>
              This book is an unfiltered lens behind the curtain of Westside Barbell. It starts from
              Louie's childhood and he brings you on the journey he took that lead to the creation
              of Westside Barbell Columbus Ohio.
            </p>
            <p>
              It is jammed back with insanely strong people and personalities, provides accurate
              historical events, and best of all, It is 100%, unedited, Louie Simmons.
            </p>
          </div>

          <div class="info__buttons">
            <a
              href="https://www.westside-barbell.com/products/wsbb-the-iron-samurai-the-true-story-of-westside-barbell"
              class="button button--secondary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ironSamuraiBook from '@/assets/pages/louie/ironsamuraiPAPERBACKPRODUCT_1600.jpg'
</script>

<style scoped>
  .section-book-info {
    padding-top: 9px;
    padding-bottom: 40px;
  }

  .book-info__grid {
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  .book-info__block {
    border-radius: 16px;
  }

  .book-info__further {
    background: #f3f5fb;
    padding: 12px 16px 19px;
    border: 1px solid #e5e9f2;
  }

  .book-info__further .block-title {
    font-size: 24px;
    line-height: 150%;
    text-transform: none;
  }

  .book-info__further .block-text {
    font-weight: 500;
    line-height: 130%;
    font-size: 13px;
    font-family:
      Knockout Ult Sumo,
      Helvetica,
      sans-serif;
    text-align: left;
  }

  .book-info__further .block-text p + p {
    margin-top: 11px;
  }

  .book-info__further .block-text a {
    text-decoration: none;
  }

  .book-info__further .info__buttons {
    margin-top: 17px;
  }

  .book-info__further .info__buttons .button {
    padding: 9px 28px;
  }

  .book-info__article-media {
    background-color: transparent;
    max-width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }

  .book-info__article-media-image {
    max-width: 100%;
    height: auto;
    position: relative;
    border-radius: 16px;
  }

  .book-info__article .block-title {
    font-size: 24px;
    line-height: 150%;
    text-transform: none;
    margin-top: 15px;
  }

  .book-info__article .block-text {
    line-height: 147%;
    font-size: 11px;
    margin-top: 5px;
    text-align: left;
  }

  .book-info__article .block-list ol {
    margin-left: 0;
    padding-left: 15px;
  }

  .book-info__article .block-list ol li {
    font-size: 11px;
    font-family:
      Knockout HTF31 JuniorMiddle,
      Helvetica,
      sans-serif;
    line-height: 146%;
    margin-top: 3px;
  }

  .book-info__article .block-text p + p {
    margin-top: 11px;
  }

  .book-info__article .block-text a {
    text-decoration: none;
  }

  .book-info__article .info__buttons {
    margin-top: 31px;
  }

  .book-info__article .info__buttons .button {
    padding: 9px 31px;
  }

  @media screen and (min-width: 500px) {
    .book-info__article {
      background: #f3f5fb;
      padding: 12px 16px 19px;
      border: 1px solid #e5e9f2;
    }

    .book-info__article-media {
      max-width: 216px;
      float: left;
      margin-right: 35px;
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 750px) {
    .book-info__article .block-list ol li,
    .book-info__article .block-text {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1025px) {
    .section-book-info {
      padding-top: 52px;
      padding-bottom: 110px;
    }

    .book-info__grid {
      gap: 30px;
      display: flex;
      flex-direction: row;
    }

    .book-info__block {
      border-radius: 16px;
      flex-grow: 1;
      flex-shrink: 0;
      width: 59%;
    }

    .book-info__further {
      width: 38%;
    }

    .book-info__further .block-text {
      font-size: 20px;
    }

    .book-info__article-media {
      max-width: 216px;
      float: left;
      margin-right: 35px;
      margin-bottom: 28px;
    }

    .book-info__article .block-list {
      width: 100%;
    }

    .book-info__article .block-list ol li,
    .book-info__article .block-text {
      font-size: 18px;
      line-height: 166%;
      letter-spacing: 0;
    }
  }

  @media screen and (min-width: 1240px) {
    .book-info__grid {
      gap: 76px;
    }

    .book-info__further {
      width: 40%;
      padding: 42px 49px 45px;
    }

    .book-info__further .block-title {
      font-size: 40px;
      margin-bottom: 33px;
    }

    .book-info__further .block-text p + p {
      margin-top: 18px;
    }

    .book-info__further .info__buttons {
      margin-top: 40px;
    }

    .book-info__further .info__buttons .button {
      padding: 7px 21px;
      min-width: unset;
    }

    .book-info__article {
      width: 54%;
      padding: 45px 48px 19px;
    }

    .book-info__article .block-title {
      font-size: 40px;
      line-height: 134%;
      text-transform: none;
      margin-top: 0px;
      margin-bottom: 14px;
    }

    .book-info__article .block-list ol {
      padding-left: 32px;
    }

    .book-info__article .block-list ol li::marker {
      margin-right: 10px;
    }

    .book-info__article .block-list ol li {
      margin-top: 1px;
    }

    .book-info__article .info__buttons {
      margin-top: 29px;
    }

    .book-info__article .info__buttons .button {
      padding: 7px 39px;
      min-width: unset;
    }
  }
</style>
