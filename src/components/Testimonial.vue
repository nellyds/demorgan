<template>
  <v-container>
   <v-row>
       <v-col sm="4">
           <div  data-aos="slide-left" 
            >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="headline">{{name}}</v-list-item-title>
                <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
 <img :src="require('@/assets/'+ imageUrl)" >
      <v-card-text>
      </v-card-text>      
          </div>
       </v-col>
     </v-row>
  </v-container>
</template>
<script>

export default {
  name: "Testimonials",
  props:{
      name: String,
      description: String,
      imageUrl: String
  }
};
</script>
