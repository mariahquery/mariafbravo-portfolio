<script setup>
const props = defineProps({
  title: String,
  description: String,
  icon: String,
});
</script>

<template>
  <div class="card">
    <slot name="emoji"></slot>
    <h5>{{ props.title }}</h5>
    <p>{{ props.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  border-radius: 4px;
  padding: 40px;
  min-height: 270px;
  margin-bottom: 1.5rem;
  h5 {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #343841;
  }
  p {
    color: #343841;
    font-size: 16px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .card h3 {
    font-size: 17px;
  }
}

@media screen and (max-width: 769px) {
  .card {
    margin: 0 0.75rem;
    h3 {
      font-size: 17px;
    }
  }
}
</style>
