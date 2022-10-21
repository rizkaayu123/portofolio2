<script>
import AboutComp from '../components/base/AboutComp.vue'
import BaseCard from '../components/Base/CardComp.vue'
import imageStore from '../stores/image';
import { mapState } from 'pinia';

export default {
  name: 'HomePage',
  components: {
    AboutComp,
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ['g$list']),
  }
};
</script>
<template>
<AboutComp/>
<section>
  <h2 class="text-center">MY Project</h2>
  <div class="grid-container">
    <template v-for="(img, index) in g$list" :key="index">
      <RouterLink :to="{ name: 'detail', params: { id: img.slug}}" class="card-image-top">
        <BaseCard :data="img" width="200" height="250"/>
      </RouterLink>
  </template>
</div>
 </section>
</template>

<style lang="css">

.text-center {
  color: rgb(253, 249, 249);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    , 1fr);
  gap: 1rem;
  padding: 10px;
  width: 100%;
}


h2 {
    color: black;
}

</style>

