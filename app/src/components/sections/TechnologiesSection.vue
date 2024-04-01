<script setup>
import TechnologyItem from "../TechnologyItem.vue";
</script>

<template>
  <section class="container technologies">
    <div class="columns">
      <div class="column">
        <h1 class="title has-text-centered">Technologies</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <TechnologyItem title="Vue.js" icon="vue" />
      </div>
      <div class="column">
        <TechnologyItem title="Webflow" icon="webflow" />
      </div>
      <div class="column">
        <TechnologyItem title="Typescript" icon="typescript" />
      </div>
      <div class="column">
        <TechnologyItem title="Figma" icon="figma" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <TechnologyItem title="Javascript" icon="javascript" />
      </div>
      <div class="column">
        <TechnologyItem title="SCSS" icon="sass" />
      </div>
      <div class="column">
        <TechnologyItem title="CSS3" icon="css3" />
      </div>
      <div class="column">
        <TechnologyItem title="HTML5" icon="html5" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-bottom: 90px;
}
.title {
  font-size: 48px;
  font-family: "Hind Siliguri Bold", sans-serif;
  margin: 2rem 0 4rem 0;
}
</style>
