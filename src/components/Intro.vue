<template>  <section id="welcome">

    <div class="container">
      <v-row cols="6">
        <v-col  sm="12" md="6">
         <div class="aboutContainer">
            {{intro}}
          </div>
        </v-col>
                <v-col sm="12" md="6" >
                           <div class="aboutContainer">
          <Timeline />
          </div>
        </v-col> -->
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
      intro:"April is almost here on the Talking Simpsons Network, and we're shaking things up a little for the next subject of our premium podcast, As you may know, once a month we release the What A Cartoon Movie! podcast, an extra-long discussion about an animated film, exclusively for our $10 Patreon subscribers. And when we open up the voting, we want to let all the $5 folks have a chance to be heard as well so they can help pick episodes they might enjoy down the line. But now, in light of our recent updated schedule, we want to get the votes for the next one moving earlier than we had before!"
    })
  }
</script>
<style scoped>
.container{
  height: 600px;
}
.aboutContainer{
  background-color:rgb(240,240,240);
  padding: 10px;
  height: 100px;
  width: 600px;
}
</style>
