<script>
import imageStore from '@/stores/image';
import ImageComp from '@/components/base/ImageComp.vue';
import { mapState } from 'pinia';

export default {
    name: 'DetailView',
    components: {
        ImageComp,
    },
    computed: {
        ...mapState(imageStore, ['g$detail']),
        detail() {
            return this.g$detail(this.$route.params.id);
        },
    },
  
}
</script>

<template>
<div class="container my-3">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
                <div class="text-center">
                    <h2 class="mt-2 mb-2">{{detail.title}}</h2>
                    <ImageComp :src="detail.img" />
                </div>
                    <div class="px-4 mt-1">
                        <p class="text-md-start">{{detail.desc}}</p>
                    </div>
                  
               </div>
            </div>
        </div>
</template>

<style lang="css">

.mt-2 mb-2 {
  color: rgb(253, 249, 249);
}

.px-4 mt-1 {
    text-align: justify-self;
}
</style>


