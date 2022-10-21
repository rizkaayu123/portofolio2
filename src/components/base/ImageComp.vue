<script setup>
const props = defineProps(['src']);
const imageUrl = new URL(`/src/assets/image/${props.src}`, import.meta.url).href;
</script>

<template>
  <img class="grid-img" :src="imageUrl" alt="img"/>
</template>

<style lang="css">
.grid-img {
    width: 100%;
}
</style>