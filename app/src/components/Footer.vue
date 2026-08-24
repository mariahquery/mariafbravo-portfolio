<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>Maria Furtado Bravo © {{ year }}</p>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #000;
  color: white;
  text-align: center;
  padding: 2rem;
  bottom: 0;
  width: 100%;
}
</style>
