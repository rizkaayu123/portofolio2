<script>
import ImageComp from './ImageComp.vue';
export default {
    name:'CardComp',
    props: {
        data: Object,
    },
    components: {
    ImageComp,
  
},
}; 
</script>

<template>
    <figure class="grid-item">
        <ImageComp class="grid-img" :src="data.img"/>
        <figcaption>{{ data.title }}</figcaption>
    </figure>
</template>

<style lang="css">

  .grid-item {
    width: 100%;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 1rem;
    object-fit: cover;
  }

    figcaption {
      padding:.25rem 1rem;
      text-align: center;
    }

  .grid-img{
    width: 100%
  }

</style>