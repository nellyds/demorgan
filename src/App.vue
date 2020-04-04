<template>
  <v-app>


    <v-content>
      <Header id="home"/>
        <Jumbotron class="jumbotron"/>
              <v-divider
        class="mx-4"
        :inset="inset"
      ></v-divider>
      <Divider header="Who We Are"/>
      <Intro />
      <Divider div1="true" header="What We Do"/>
      <div data-aos="slide-left" data-aos-duration="1800" >
      <Services id="service" />
      </div>
      <Divider div2="true" header="What People are saying" />
      <Testimonials />
      <Divider div3="true" header="DeMorgan today" />
      <Social id='news'/>
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
import Divider from "@/components/Divider.vue";
import Social from "@/views/Social.vue";
export default {
  name: "App",

  components: {
    Testimonials,
    Jumbotron,
    Contact,
    Header,
    Intro,
    Services,
    Divider,
    Social
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
