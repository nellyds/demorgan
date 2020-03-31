<template>
  <v-container>
<div class="serviceContainer">
   <v-row>
       <v-col cols="16" sm="4"
            v-for="service in services" :key="service.name"
       >

  <v-card
    class="mx-auto"
    color="black"
    rounded
    dark
  >
    <v-card-title>
      {{service.name}}
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{services.description}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
       </v-col>
   </v-row>
</div>
  </v-container>

</template>

<script>

export default {
  name: "Services",
  data(){
    return{
    services: [
      {name: 'Prevention and Wellness', imageUrl: 'https://nebula.wsimg.com/88fd4bfd9a251a85a2542489528843e7?AccessKeyId=978665728D7EF9E1C9B5&disposition=0&alloworigin=1', description:'We offer the best advice and current news to keep your family as healthy and safe as possible.', id:'1'},
      {name: 'Disease and Conditions', imageUrl: 'https://nebula.wsimg.com/a43ab115bb5d89530d1b3e7b3a7cb618?AccessKeyId=531592D248B589D87A56&disposition=0&alloworigin=1', description: 'Get proactive and schedule a visit and receive the best medical support.', id:'2'},
      {name: 'Online Visits with Clocktree', imageUrl: 'https://nebula.wsimg.com/0897511961f4bf140f247f007ca45a66?AccessKeyId=978665728D7EF9E1C9B5&disposition=0&alloworigin=1', description: 'Talk with Sandy and then sign up at www.clocktree.com', id:'3'}
    ]
  }
  }
};
</script>
<style scoped>
.serviceContainer{
    background-color: rgb(0, 135, 235);
    color: white;
    padding: 1em;
}
</style>
