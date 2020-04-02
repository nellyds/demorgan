<template>
  <v-container>
<v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
  <v-carousel-item  v-for="testimonial in testimonials" :key="testimonial.person">

          <v-list-item-title class="headline">{{testimonial.testimonialHeader}}</v-list-item-title>
          <v-list-item-subtitle>{{testimonial.person}}</v-list-item-subtitle>

      <img :src="require('@/assets/'+ testimonial.imageUrl)" >
      <v-card-text>
       {{testimonial.testimonial}}
      </v-card-text>      

 
  
</v-carousel-item>
</v-carousel>
  </v-container>
</template>
<script>

export default {
  name: "Testimonials",
  data() {
    return{
    testimonials: [
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '1.png'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '2.png'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '3.jpg'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '2.png'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '2.png'},
            {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '1.png'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '2.png'},
      {person: 'I signed a relase form', testimonialHeader: 'AN ITRIGUING TITLE', testimonial:'The substance of whatever it is I loved or used', imageUrl: '3.jpg'}
    ]
  }
  }
};
</script>
