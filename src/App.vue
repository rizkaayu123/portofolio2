<script>
import DefaultLayout from '@/layout/DefaultView.vue';

export default  {
  name: 'App',
  components: {
    DefaultLayout,
  }
}
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>


