<script setup>
    import HeroSection from "../components/Hero-section.vue"
    import HomeCards from "../components/HomeCards.vue";
    import Joblistings from "../components/Joblistings.vue"; 
</script>
<template>
   <HeroSection/>
   <HomeCards/>
   <Joblistings :limit="3" :showButton=true />
</template>