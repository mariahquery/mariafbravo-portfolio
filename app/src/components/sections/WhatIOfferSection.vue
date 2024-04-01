<script setup></script>

<template>
  <section class="container what-i-can-offer-you">

      <div class="columns">
        <div class="column is-two-fifths">
          <img src="../../assets/building-websites.svg" />
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column">
          <div class="wrapper">
            <h4 class="item-title">Your Website is built from Design to Code</h4>
            <p class="item-subtitle">
              From innovative design to robust code, creating a website that perfectly embodies your vision. The process integrates great design with technical excellence, ensuring a responsive, visually stunning online presence tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="wrapper">
            <h4 class="item-title">Manage Your Website Content Easily</h4>
            <p class="item-subtitle">
              Simplify your website management with our intuitive content system. Effortlessly update, edit, and organize your web content with our user-friendly tools, ensuring your site stays fresh and relevant.
            </p>
          </div>
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column is-two-fifths">
          <img src="../../assets/editing.svg" />
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-fifths">
          <img src="../../assets/dashboards.svg" />
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column">
          <div class="wrapper">
            <h4 class="item-title">Powering Dashboards that drive decisions</h4>
            <p class="item-subtitle">
              Elevate your decision-making with our advanced dashboards, designed to provide insightful data at your fingertips. Harness the power of real-time analytics and visualizations to make informed decisions.
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 90px 0;
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
</style>
