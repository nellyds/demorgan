<template>
  <v-app>
    <NavBar />
<v-content>
      <router-view></router-view>

</v-content>
  </v-app>
</template>
<script>
import NavBar from "@/components/Navigation/NavBar.vue";
export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  })
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Prompt&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&family=Nunito:wght@200&display=swap");
body {
  font-family: "Montserrat Subrayada", sans-serif;
}
</style>
