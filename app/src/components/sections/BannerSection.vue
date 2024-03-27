<script setup>
import Card from "../Card.vue";
</script>

<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container">
        <div class="main-banner columns">
          <div class="column">
            <div class="banner-content-wrapper">
              <h1 class="title">Hi, I’m Maria:</h1>
              <h2 class="subtitle">
                I design and build digital products for the<br />
                ideal user experience
              </h2>
              <button class="button is-rounded worktogether">
                <strong>Let’s work together!</strong>
                <img
                  src="../../assets/icons/arrow-right.svg"
                  alt="Arrow right"
                />
              </button>
            </div>
          </div>
          <div class="column">
            <div>
              <img
                src="../../assets/banner-image-base.svg"
                alt="Banner image"
              />
            </div>
          </div>
        </div>

        <div class="services columns">
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">
                <img src="../../assets/icons/rocket.svg" alt="Rocket icon" />
              </div>
              <h3 class="banner-service-title">Responsive Websites</h3>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">
                <img src="../../assets/icons/rocket.svg" alt="Rocket icon" />
              </div>
              <h3 class="banner-service-title">CMS solutions with Webflow</h3>
            </div>
          </div>
          <div class="column">
            <div class="banner-service-item">
              <div class="wrapper">
                <img src="../../assets/icons/rocket.svg" alt="Rocket icon" />
              </div>
              <h3 class="banner-service-title">Web Performance and SEO</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.title {
  font-size: 59px;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #33efab;
}
.subtitle {
  font-size: 59px;
  font-family: "Hind Siliguri Bold", sans-serif;
  color: #343841;
}
.main-banner {
  margin-top: 3rem;
}
.banner-service-title {
  font-size: 20px;
  font-family: "Hind Siliguri SemiBold", sans-serif;
  color: #343841;
  text-align: center;
  max-width: 170px;
  line-height: 1.2;
}
.banner-service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .wrapper {
    background-color: #33efab;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    margin-bottom: 1.5rem;
  }
}
.services {
  margin-top: 2rem;
  margin-bottom: 3rem;
  .column:nth-child(1) {
    .wrapper {
      background-color: #ffc701;
    }
  }
  .column:nth-child(2) {
    border-left: 1px solid #c9c9c9;
    border-right: 1px solid #c9c9c9;
    .wrapper {
      background-color: #3b1df4;
    }
  }
  .column:nth-child(3) {
    .wrapper {
      background-color: #33efab;
    }
  }
}
.worktogether {
  cursor: pointer;
  transition: all 0.3s;
  background-color: #3b1df4;
  padding: 0.5rem 1.5rem !important;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 18px;
  margin-top: 2rem;
  img {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: #33efab;
    color: white;
  }
}
.banner-content-wrapper {
  margin-top: 0.5rem;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: 0;
}
</style>
