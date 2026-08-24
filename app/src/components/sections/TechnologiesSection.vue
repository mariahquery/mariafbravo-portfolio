<script setup>
import TechnologyItem from "../TechnologyItem.vue";

const technologyRows = [
  [
    { title: "Vue.js", icon: "vue" },
    { title: "Javascript", icon: "javascript" },
    { title: "HTML5", icon: "html5" },
    { title: "SCSS", icon: "sass" },
  ],
  [
    { title: "Typescript", icon: "typescript" },
    { title: "CSS3", icon: "css3" },
    { title: "Webflow", icon: "webflow" },
    { title: "Figma", icon: "figma" },
  ],
];
</script>

<template>
  <section id="technologies" class="bg">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h6 class="title has-text-centered">Technologies</h6>
        </div>
      </div>
      <div v-for="(row, rowIndex) in technologyRows" :key="rowIndex" class="columns">
        <div
          v-for="(tech, index) in row"
          :key="tech.title"
          class="column"
          :class="{ 'is-one-quarter-fullhd': index === 0 }"
        >
          <TechnologyItem :title="tech.title" :icon="tech.icon" />
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
  .title {
    margin: 5rem 0 4rem 0;
  }
}
</style>
