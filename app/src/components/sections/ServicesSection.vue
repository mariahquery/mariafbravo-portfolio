<script setup>
import Card from "../Card.vue";
</script>

<template>
  <section id="services">
    <div class="container">
      <div class="column">
        <h1 class="title">Services</h1>
      </div>

      <div class="columns">
        <div class="column is-one-third-fullhd">
          <Card
            title="Website Development"
            description="I develop custom websites using modern web technologies using Vue.js, HTML5, CSS3, and JavaScript. I also use Webflow for CMS solutions."
          >
            <template v-slot:emoji><div class="emoji">👩🏼‍💻</div></template>
          </Card>
        </div>
        <div class="column">
          <Card
            title="Responsive Web Design"
            description="I design responsive websites that look great on all devices and screen sizes such as desktops, tablets, and smartphones."
            ><template v-slot:emoji><div class="emoji">📱</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="User Experience and Interface Design"
            description="I create intuitive and user-friendly interfaces to enhance the user experience. I use Figma for design and prototyping."
            ><template v-slot:emoji><div class="emoji">⚙️</div></template></Card
          >
        </div>
      </div>

      <div class="columns">
        <div class="column is-one-third-fullhd">
          <Card
            title="Content Management Systems (CMS) Solutions"
            description="I build websites with CMS solutions like Webflow to make content management easy for clients. "
            ><template v-slot:emoji><div class="emoji">🛠️</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="SEO Optimization"
            description="I optimize websites for search engines to improve visibility and ranking."
            ><template v-slot:emoji><div class="emoji">🎯</div></template></Card
          >
        </div>
        <div class="column">
          <Card
            title="Performance Optimization"
            description="I optimize websites for speed and performance to provide a better user experience."
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
