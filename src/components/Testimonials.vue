<template>
  <v-container>
      <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
        <v-carousel-item  v-for="testimonial in testimonials" :key="testimonial.person">
          <v-card  color="white" class="mx-auto pa-5" 
    max-width="344"
 >
          <Quotation />
          <p class="testimonial">{{testimonial.testimonial}}</p>
          <v-list-item-subtitle>{{testimonial.person}}</v-list-item-subtitle>
          <img :src="require('@/assets/'+ testimonial.imageUrl)" >  
          </v-card>   
        </v-carousel-item>
      </v-carousel>

  </v-container>

</template>
<script>
import Quotation from "@/components/Quotation.vue";
export default {
  name: "Testimonials",
  components:{
    Quotation},
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
<style scoped>

.testimonial{
color: black;
font-size: 1.4em;

font-style:italic
}
.container{
  /* margin-left: 50%; */
  /* background-image: url('~@/assets/handsClasp.png'); */
}
img{
  width: 200px;
}
/* @media screen and (max-width: 400px){
  
}
@media screen and (min-width: 1000px){
 .container{
  margin-left: 25%;
}
} */

</style>
