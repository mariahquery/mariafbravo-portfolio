<script setup>
import Card from "../Card.vue";
</script>

<template>
  <!-- <section id="services">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Services</h1>
        </div>
      </div>

      <div class="columns">
        <div class="columns">
          <div class="column">
            <Card
              title="Website Development"
              description="Experienced in building websites using modern web technologies such as HTML, CSS, and JavaScript."
            >
              <template v-slot:emoji><div class="emoji">👩🏼‍💻</div></template>
            </Card>
          </div>
          <div class="column">
            <Card
              title="Responsive Design"
              description="Adept at creating responsive designs that adapt to various screen sizes and devices."
              ><template v-slot:emoji
                ><div class="emoji">📱</div></template
              ></Card
            >
          </div>

          <div class="column">
            <Card
              title="User Experience and Interface Design"
              description="Skilled in creating intuitive and user-friendly interfaces that enhance the user experience."
              ><template v-slot:emoji
                ><div class="emoji">⚙️</div></template
              ></Card
            >
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="columns">
          <div class="column">
            <Card
              title="Content Management Systems (CMS) Solutions"
              description="Proficient in developing custom CMS solutions to manage website content efficiently."
              ><template v-slot:emoji
                ><div class="emoji">🛠️</div></template
              ></Card
            >
          </div>
          <div class="column">
            <Card
              title="SEO Optimization"
              description="Knowledgeable in SEO best practices to improve search engine rankings and drive organic traffic."
              ><template v-slot:emoji
                ><div class="emoji">🎯</div></template
              ></Card
            >
          </div>
          <div class="column">
            <Card
              title="Performance Optimization"
              description="Skilled in optimizing websites for speed and performance to provide a great user experience."
              ><template v-slot:emoji
                ><div class="emoji">🚀</div></template
              ></Card
            >
          </div>
        </div>
      </div>  
    </div>
  </section> -->
</template>

<style scoped lang="scss">
#services {
  .title {
    font-size: 36px;
    font-family: "Hind Siliguri Bold", sans-serif;
    color: #292830;
    margin-top: 60px;
  }
}
.emoji {
  font-size: 30px;
}
</style>
