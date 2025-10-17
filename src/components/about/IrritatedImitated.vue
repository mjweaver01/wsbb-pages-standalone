<script lang="ts">
  import westsideLogoSmall from '@/assets/pages/about/Group_3.png'

  export default {
    data() {
      return { westsideLogoSmall }
    },
  }
</script>

<template>
  <section id="html-grid-custom-html-grid" class="custom-html-grid">
    <div class="row tablet-constrain-items">
      <div class="block column-12">
        <div class="custom-html-grid-description">
          <div class="row-no-bottom custom-constrain-items center-text invert">
            <div class="column-12">
              <p>
                <img
                  :src="westsideLogoSmall"
                  alt="Westside Barbell Logo"
                  width="204"
                  height="154"
                  style="object-fit: contain"
                />
              </p>
              <br />
              <p>
                Westside Barbell is an invitation only training laboratory where only the strongest
                of mind and body survive. Our goal is simple. To become the best and push every
                boundary known to man in doing so.
              </p>
              <p>
                The lineage and achievements of all Westside Barbell athletes who have walked
                through our chalky doors is of legends. Our gym has broke over 140 world records,
                won olympic gold, heavyweight world championships, to name but a few of our
                achievements.
              </p>
              <p>
                Our education is based on theoretical research and is backed by practical
                application. We only write about what works, not what might work or what doesn't
                work. We believe that training information should filter down from the athletes at
                the the top rather than spew out from the keyboard hero's at the bottom.
              </p>
              <br />
              <h2 class="light-blue no-margin">Often Imitated<br />Always Irritated</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/scss/variables.scss' as *;

  #html-grid-custom-html-grid {
    padding: 3em 0 2em;
    background-color: #212121;
  }

  #html-grid-custom-html-grid .block .custom-html-grid-description {
    padding: 3em;
    color: white;
  }

  #html-grid-custom-html-grid .center-text {
    text-align: center;
  }

  #html-grid-custom-html-grid img {
    width: 100%;
    max-width: 200px;
    display: block;
    margin: 0 auto;
  }

  .light-blue {
    color: #2a95fa;
  }

  .no-margin {
    margin: 0;
  }
</style>
