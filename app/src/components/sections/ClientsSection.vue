<script setup>
import ClientItem from "../ClientItem.vue";
</script>

<template>
  <section id="clients" class="bg">
    <div class="container">
      <div class="wrapper is-flex is-justify-content-space-between is-align-items-center">
        <ClientItem client="JTI" />
        <ClientItem client="NOS" />
        <ClientItem client="Worten" />
        <ClientItem client="Koerber" />
        <ClientItem client="LTP" />
        <ClientItem client="PBS" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: 110px 0 0 0;
}
.bg {
  background-color: #f6f6f6;
}

@media screen and (max-width: 769px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
  section {
    padding: 40px 0;
  }
}
</style>
