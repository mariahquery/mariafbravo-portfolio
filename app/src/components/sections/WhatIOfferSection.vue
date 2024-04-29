<script setup></script>

<template>
  <section class="container what-i-can-offer-you">
    <div class="columns row">
      <div class="column is-two-fifths is-flex">
        <img src="../../assets/building-websites.svg" loading="lazy" alt="Responsive Websites from Vision to Life"/>
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column">
        <div class="wrapper">
          <h5 class="item-title">Websites from Design to Code</h5>
          <p class="item-subtitle">
            Creating websites that
            perfectly suits your vision. From custom-built web apps to small websites, captivating your audience with a great user experience.
          </p>
        </div>
      </div>
    </div>

    <div class="columns row">
      <div class="column is-flex-center-tablet">
        <div class="wrapper">
          <h5 class="item-title">Manage your Website Content Easily</h5>
          <p class="item-subtitle">
            Simplify your website management with a intuitive content system.
            Effortlessly update, edit, and organize your web content with
            user-friendly tools, ensuring your site stays fresh and relevant.
          </p>
        </div>
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column is-two-fifths is-flex-center-tablet">
        <img src="../../assets/editing.svg" loading="lazy" alt="Manage Your Website Content Easily"/>
      </div>
    </div>

    <div class="columns row">
      <div class="column is-two-fifths is-flex">
        <img src="../../assets/dashboards.svg" loading="lazy" alt="Powering Dashboards that drive decisions"/>
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column">
        <div class="wrapper">
          <h5 class="item-title">Powering Dashboards that drive decisions</h5>
          <p class="item-subtitle">
            Improve your web app by with tailormade dashboards to provide insightful data at your fingertips. Include analytics on your website to make informed decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.row {
  margin: 100px 0;
}
.title {
  font-size: 48px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin: 2rem 0;
}
.wrapper {
  padding: 70px 0;
  .section-title {
    font-size: 69px;
    font-family: "Hind Siliguri Bold", sans-serif;
    color: #292830 !important;
  }
  .item-title {
    font-size: 48px;
    color: #292830;
    line-height: 48px;
    font-family: "Hind Siliguri Bold", sans-serif;
    margin: 1.5rem 0;
  }
  .item-subtitle {
    font-size: 18px;
    color: #292830;
    line-height: 24px;
    font-family: "Hind Siliguri Regular", sans-serif;
  }
}

@media screen and (max-width: 1024px) {
  .is-flex-center-tablet {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
  }
}

@media screen and (max-width: 769px) {
  .wrapper {
    padding: 20px 0;
    .item-title {
      font-size: 36px;
      line-height: 36px;
    }
    .item-subtitle {
      font-size: 16px;
      line-height: 22px;
    }
  }
  .row {
    margin: 90px 0;
  }
  .columns:nth-child(2) {
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: column-reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
  }
}
</style>
