<script>
import BaseCard from '../components/Base/CardComp.vue'
import imageStore from '../stores/image';
import { mapState } from 'pinia';

export default {
  name: 'HomePage',
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ['g$list']),
  }
};
</script>
<template>
<section>
  <h2 class="text-center">MY project</h2>
  <div class="grid-container">
    <template v-for="(img, index) in g$list" :key="index">
      <RouterLink :to="{ name: 'detail', params: { id: img.slug}}">
        <BaseCard :data="img" />
      </RouterLink>
  </template>
</div>
<br/>
<br/>
<br/>
 </section>
</template>

<style lang="css">

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 10px;
  height: 100%;
  width: 100%;
}

h2 {
    color: black;
}

</style>

