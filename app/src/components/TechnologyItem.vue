<script setup>
const props = defineProps({
  icon: String,
  title: String,
});

function getImageUrl() {
  return new URL(`../assets/icons/${props.icon}.svg`, import.meta.url)
}

</script>

<template>
  <div class="wrapper">
    <img :src="getImageUrl()" :alt="`${props.title}`" loading="lazy" />
    <div class="title">{{ props.title }}</div>
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
.title {
  font-size: 24px;
  font-family: "Hind Siliguri SemiBold", sans-serif;
  margin-top: 1rem;
  margin-bottom: 4rem;
  text-align: center;
}
</style>
