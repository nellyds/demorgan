<template>
  <v-container>
   <v-row>
       <v-col cols="16" sm="4">
         <div class="serviceContainerBlue" >
         <Service  name="'Prevention and Wellness" description="We offer the best advice and current news to keep your family as healthy and safe as possible." imageUrl="assistantWhite.png"/>
         </div>
          </v-col>
          <v-col cols="16" sm="4">
              <div class="serviceContainerWhite" >
         <Service name="Disease and Conditions" description="Get proactive and schedule a visit and receive the best medical support." imageUrl="studentBlue.png" />
         </div>
        </v-col>
               <v-col cols="16" sm="4">
         <div class="serviceContainerBlue" >
         <Service  name="Online Visits with Clocktree" description='Talk with Sandy and then sign up at www.clocktree.com' imageUrl="heartCalenderWhite.png"/>
         </div>
          </v-col>
   </v-row>
  </v-container>
</template>

<script>
import Service from "@/components/Service.vue";

export default {
  name: "Services",
  components:{
    Service
  },
  data(){
    return{
    services: [
      {name: 'Prevention and Wellness', imageUrl: 'assistantWhite.png', description:'We offer the best advice and current news to keep your family as healthy and safe as possible.', id:'1'},
      {name: 'Disease and Conditions', imageUrl: 'assistant.png', description: 'Get proactive and schedule a visit and receive the best medical support.', id:'2'},
      {name: 'Online Visits with Clocktree', imageUrl: 'workWhite.png', description: 'Talk with Sandy and then sign up at www.clocktree.com', id:'3'}
    ]
  }
  }
};
</script>
<style scoped>
body{
  background-color:rgb(55, 189, 255);
}
.serviceContainerBlue{
    background-color: rgb(55, 189, 255);
    color: white;
    padding: 1em;
}
.serviceContainerWhite{
    background-color: rgb(255, 255, 255);
    color: rgb(55, 189, 255);
    padding: 1em;
}
@media screen and (max-width: 500px){
  .serviceContainerBlue{
    background-color: rgb(55, 189, 255);
    color: white;
    padding: 1em;
    width: 100vw;
}
.serviceContainerWhite{
    background-color: rgb(255, 255, 255);
    color: rgb(55, 189, 255);
    padding: 1em;
        width: 100vw;
}
}
</style>
