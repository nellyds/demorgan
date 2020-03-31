<template>
  <div class="home">
    <Jumbotron />
    jkj
    <Testimonials />
    jklbnk
  </div>
</template>

<script>
// @ is an alias to /src
import Testimonials from "@/components/Testimonials.vue";
import Jumbotron from "@/components/Jumbotron.vue"

export default {
  name: "Home",
  components: {
    Testimonials,
    Jumbotron
  }
};
</script>
