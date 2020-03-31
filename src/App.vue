<template>
  <v-app>


    <v-content>
      <Header />

        <Jumbotron class="jumbotron"/>
              <v-divider
        class="mx-4"
        :inset="inset"
      ></v-divider>
      <Intro />
      <Services />
      <Testimonials ></Testimonials>
      <v-divider/>
      <Contact />
    </v-content>
  </v-app>
</template>

<script>

import Header from "@/components/Header.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import Services from "@/components/Services.vue";
import Intro from "@/components/Intro.vue";

export default {
  name: "App",

  components: {
    Testimonials,
    Jumbotron,
    Contact,
    Header,
    Intro,
    Services
  },

  data: () => ({
    //
  })
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
body{
  font-family: 'Prompt', sans-serif;
}
</style>
