<script>
import MainHeader from '@/components/main/HeaderComp.vue';
import MainFotter from '@/components/main/FooterComp.vue';


export default {
    name:'DefaultView',
    components: {
        MainHeader,
        MainFotter,
    },
    }
</script>

<template>
    <MainHeader />
    <main>
        <slot/>
    </main>
    <MainFotter />
</template>

<style lang="css">
</style>

