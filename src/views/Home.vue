<template>
  <div>
   

    <Hero />
    <Gallery />
    <LatestPosts />

    
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Gallery from "../components/Gallery.vue";
import LatestPosts from "../components/LatestPosts.vue";

export default {
  name: "Home",

  components: {
    Hero,
    Gallery,
    LatestPosts,
  },
};
</script>
