<script setup></script>

<template>
  <section class="container what-i-can-offer-you">
    <div class="columns row">
      <div class="column is-two-fifths is-flex">
        <img src="../../assets/building-websites.svg" />
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column">
        <div class="wrapper">
          <h4 class="item-title">Responsive Websites from Vision to Life</h4>
          <p class="item-subtitle">
            From innovative design to robust code, creating a website that
            perfectly suits your vision. From custom-built websites to small
            e-commerce platforms, we deliver a seamless experience that
            captivates your audience.
          </p>
        </div>
      </div>
    </div>

    <div class="columns row">
      <div class="column is-flex-center-tablet">
        <div class="wrapper">
          <h4 class="item-title">Manage Your Website Content Easily</h4>
          <p class="item-subtitle">
            Simplify your website management with our intuitive content system.
            Effortlessly update, edit, and organize your web content with our
            user-friendly tools, ensuring your site stays fresh and relevant.
          </p>
        </div>
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column is-two-fifths is-flex-center-tablet">
        <img src="../../assets/editing.svg" />
      </div>
    </div>

    <div class="columns row">
      <div class="column is-two-fifths is-flex">
        <img src="../../assets/dashboards.svg" />
      </div>
      <div class="column is-one-fifth"></div>
      <div class="column">
        <div class="wrapper">
          <h4 class="item-title">Powering Dashboards that drive decisions</h4>
          <p class="item-subtitle">
            Elevate your decision-making with our advanced dashboards, designed
            to provide insightful data at your fingertips. Harness the power of
            real-time analytics and visualizations to make informed decisions.
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
    justify-content: center;
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
    margin: 20px 0;
  }
  .columns:nth-child(2) {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
