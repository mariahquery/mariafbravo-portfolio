<script setup></script>

<template>
  <section class="portfolio">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title is-3">Portfolio</h1>
          <p class="subtitle">
            Here are some of the projects I've worked on. I've designed and
            developed websites, web apps, and mobile apps for a variety of
            clients and industries like Retail, Logistics, Recruitment and Healthcare.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="columns">
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
        <div class="column">
          <img src="../../assets/portfolio/site-img.jpg" alt="Portfolio site" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  padding: 90px 0;
}
.portfolio .title {
  font-size: 69px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin-bottom: 1.5rem;
}
.portfolio .subtitle {
  font-size: 18px;
  margin-bottom: 126px;
}

img {
  width: 100%;
}

.column,
.columns {
  padding: 0;
  margin: 0;
}
</style>
