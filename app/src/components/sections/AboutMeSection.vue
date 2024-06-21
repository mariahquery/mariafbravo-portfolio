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
          Hello, my name is Maria and I'm a passionate front end developer with
          design skills with over 8 years experience. I love creating stuff for web and giving life to digital user experiences!
          <br><br> 
          I design and develop products from end to end, from the initial design draft to the last character of code.
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
