<template>
  <v-container>
   <v-row>
       <v-col 
            v-for="testimonial in testimonials" :key="testimonial.person"
       cols="12" sm="4">
           <div  data-aos="slide-left" 
            class="pa-2"
          >
                    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">{{testimonial.testimonialHeader}}</v-list-item-title>
          <v-list-item-subtitle>{{testimonial.person}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img
        :src="testimonial.url"
      ></v-img>
      <v-card-text>
       {{testimonial.testimonial}}
      </v-card-text>      
          </div>
       </v-col>
     </v-row>
  </v-container>
</template>
<script>

export default {
  name: "Testimonials",
  data() {
    return{
    testimonials: [
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', url: 'https://i.imgur.com/3ixn0qu.jpg'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', url: 'https://imgur.com/1MDpdSl'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', url: 'https://i.imgur.com/3ixn0qu.jpg'},
    ]
  }
  }
};
</script>
