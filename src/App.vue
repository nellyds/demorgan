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
     
      <Services id="service" />
      <Testimonials />
      <v-divider/>
      <Contact id='contact'/>
    </v-content>
  </v-app>
</template>

<script>

import Header from "@/components/Header.vue";
import Jumbotron from "@/components/Jumbotron.vue";
  import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import Services from "@/views/Services.vue";
import Intro from "@/components/Intro.vue";
export default {
  name: "App",

  components: {
    Testimonials,
    Jumbotron,
    Contact,
    Header,
    Intro,
    Services,
  },

  data: () => ({
    //
  })
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&family=Nunito:wght@200&display=swap');
body{
  font-family: 'Montserrat Subrayada', sans-serif;

}
</style>
