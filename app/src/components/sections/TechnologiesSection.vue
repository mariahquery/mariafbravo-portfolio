<script setup>
import TechnologyItem from "../TechnologyItem.vue";
</script>

<template>
  <section id="technologies" class="bg">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title has-text-centered">Technologies</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter-fullhd">
          <TechnologyItem title="Vue.js" icon="vue" />
        </div>
        <div class="column">
          <TechnologyItem title="Javascript" icon="javascript" />
        </div>
        <div class="column">
          <TechnologyItem title="HTML5" icon="html5" />
        </div>
        <div class="column">
          <TechnologyItem title="SCSS" icon="sass" />
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter-fullhd">
          <TechnologyItem title="Typescript" icon="typescript" />
        </div>
        <div class="column">
          <TechnologyItem title="CSS3" icon="css3" />
        </div>
        <div class="column">
          <TechnologyItem title="Webflow" icon="webflow" />
        </div>
        <div class="column">
          <TechnologyItem title="Figma" icon="figma" />
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
  font-size: 36px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin: 2rem 0 4rem 0;
}
.bg {
  background-color: #f6f6f6;
}

@media screen and (max-width: 769px){
  section {
    padding: 40px 0;
  }
}
</style>
