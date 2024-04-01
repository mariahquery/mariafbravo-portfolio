<script setup>
const props = defineProps({
  icon: String,
  title: String,
});
</script>

<template>
  <div class="wrapper">
    <img
      :src="`./src/assets/icons/${props.icon}.svg`"
      :alt="`${props.title}`"
    />
    <h5>{{ props.title }}</h5>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: auto;
  width: 50%;
  text-align: center;
}
img {
  margin: 1.5rem 0;
}
h5 {
  font-size: 24px;
  font-family: "Hind Siliguri SemiBold", sans-serif;
  margin-top: 1rem;
  margin-bottom: 4rem;
  text-align: center;
}
</style>
