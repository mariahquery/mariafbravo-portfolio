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
          Hello, my name is Maria and I'm a Senior Frontend Developer specialized in Design Systems, with over 10 years of experience across design and code.
          <br><br>
          I build scalable, accessible Web Components with Lit and TypeScript, and help teams adopt them independently in Vue, increasingly through AI agents and agentic workflows, from agent instructions and guardrails to automated evals and test generation.
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
