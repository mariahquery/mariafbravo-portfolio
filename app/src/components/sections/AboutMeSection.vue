<template>
  <section id="about-me">
    <div class="container">
      <div class="column is-two-thirds">
        <h3 class="services title">
          Bridging the gap between <br /><span class="main-color"
            >design & development</span
          >
        </h3>
        <p class="description">
          Hello! I'm Maria, a front-end developer and designer with over 8 years
          of experience. I specialize in creating captivating web experiences
          and dynamic digital interfaces.
          <br /><br />
          With expertise in both design and development, I develop
          products to meet both design and functional requirements. My skills
          include UI components API design and development using vanilla
          JavaScript. I always try to create the best user experience on
          websites.
          <br /><br />
          I've worked with a diverse range of companies and clients, developing
          products like B2C websites, SaaS B2B PWAs, and more. Each project is
          tailored to meet the unique needs of the client, from engaging
          consumer websites to powerful enterprise tools.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.description {
  font-family: "Hind Siliguri SemiBold", sans-serif;
  font-size: 21px;
  margin-top: 30px;
}
.title {
  font-size: 58px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin: 5rem 0 3rem 0;
}

@media screen and (max-width: 769px) {
  .title {
    font-size: 40px;
  }
  .description {
    font-size: 18px;
  }
}
</style>
