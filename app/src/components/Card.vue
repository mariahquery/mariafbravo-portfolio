<script setup>
const props = defineProps({
  title: String,
  description: String,
  icon: String,
});
</script>

<template>
  <div class="card">
    <div class="icon">
      <img :src="`../src/assets/icons/${props.icon}.svg`" :alt="props.title" />
    </div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<style lang="scss">
.card {
  background-color: #fff;
  border-radius: 4px;
  padding: 40px;
  text-align: center;
  box-shadow: none  ;
  .icon {
    font-size: 35px;
    margin-bottom: 16px;
  }
  h3 {
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
</style>
