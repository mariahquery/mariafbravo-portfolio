<script setup>
const props = defineProps({
  client: String,
});

function getImageUrl() {
  return new URL(`../assets/clients/${props.client}.svg`, import.meta.url)
}

</script>

<template>
  <div>
    <img :src="getImageUrl()" :alt="`${props.client}`" loading="lazy" />
  </div>
</template>

<style scoped lang="scss">
img {
  margin: 1.5rem 0;
}
</style>
