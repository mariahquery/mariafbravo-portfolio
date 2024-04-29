<script setup>
import Card from "../Card.vue";
</script>

<template>
  <section id="services">
    <div class="container">
      <div class="column">
        <h4 class="title">Services</h4>
      </div>

      <div class="columns">
        <div class="column is-one-third-fullhd">
          <Card
            title="Website Development"
            description="Simple or tailormade websites using top notch modern web technologies like Vue.js, Typescript, Vite and Vuex."
          >
            <template v-slot:emoji><div class="emoji">👩🏼‍💻</div></template>
          </Card>
        </div>
        <div class="column">
          <Card
            title="Responsive Web Design"
            description="Websites are specially designs to look great on all devices and screen sizes such as desktops, tablets, and smartphones."
            ><template v-slot:emoji><div class="emoji">📱</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="User Experience and Interface Design"
            description="Intuitive and user-friendly interfaces to improve your website's user experience. The user is the center by studying its goals and pain points."
            ><template v-slot:emoji><div class="emoji">⚙️</div></template></Card
          >
        </div>
      </div>

      <div class="columns">
        <div class="column is-one-third-fullhd">
          <Card
            title="Content Management Systems Solutions"
            description="Manage the content of your website automnously with a user-friendly interface supported by Webflow."
            ><template v-slot:emoji><div class="emoji">🛠️</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="Search Engine Optimization"
            description="The code of your website is specially prepared to improve visibility in order to get on top of the search engines ranking."
            ><template v-slot:emoji><div class="emoji">🎯</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="Performance Optimization"
            description="All kind of assets on your website will be optimized for speed and performance to provide a better user experience."
            ><template v-slot:emoji><div class="emoji">🚀</div></template></Card
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#services {
  .title {
    font-size: 36px;
    font-family: "Hind Siliguri Bold", sans-serif;
    color: #292830;
    margin-top: 80px;
  }
}
.emoji {
  font-size: 30px;
}
</style>
