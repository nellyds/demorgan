<template>  <section id="welcome">

    <div class="container">
      <v-row cols="6">
        <v-col  sm="12" md="6">
            <div class="aboutContainer">
              {{intro}}
              <img src="@/assets/sandy.jpeg" />
            </div>
          </v-col>
          <v-col v-if="$vuetify.breakpoint.smAndUp" sm="12" md="6" >
            <div class="aboutContainer">
              <Timeline />
            </div>
        </v-col> 
      </v-row>
</div>
  </section>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
  export default {
    components: {
      Timeline
    },
    data: () => ({
      intro:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })
  }
</script>
<style scoped>
@media screen and (min-width: 416px){
.container{
  height: 75Vh;
}
img{
  width: 80%;
}
.aboutContainer{
  border-left: 2px solid rgb(65,189,255);
  border-bottom: 2px solid rgb(65,189,255);
  margin: 10px;
  padding: 10px;
  width: 600px;
}
}
@media screen and (max-width: 415px){
  .aboutContainer{
  width: 100vw;
}
img{
  width: 80%;
}
}
</style>
