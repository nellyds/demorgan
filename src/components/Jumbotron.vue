<template>
<v-responsive >
<div class="jumboTron">
<div class="jumboText" data-aos="fade-left" data-aos-duration="1200">
<p data-aos="slide-left" data-aos-duration="1800">Demorgan</p>
<p data-aos="slide-left" data-aos-duration="2000">WellNess</p>
<h4 data-aos="slide-left" data-aos-duration="2300">Your Health  <span class="highlight" data-aos="slide-left" data-aos-duration="2800">Our Mission </span> </h4>
<div data-aos="fade-up" data-aos-delay="2200" @click="$vuetify.goTo('#about')" class="toContact" v-if="$vuetify.breakpoint.mdAndUp">
  <p>About Us</p>
</div>
<div data-aos="fade-up" data-aos-delay="2500" @click="$vuetify.goTo('#service')" class="toContact" v-if="$vuetify.breakpoint.mdAndUp">
  <p>What We Do</p>
</div>
<div data-aos="fade-up" data-aos-delay="2800" @click="$vuetify.goTo('#contact')" class="toContact" v-if="$vuetify.breakpoint.mdAndUp">
  <p>Get In Contact</p>
</div>
</div>
</div>
</v-responsive>
</template>
<script>

export default {
  name: "Jumbotron",

  data(){
      return{
      }     
  },
};

</script>
<style scoped>
@media screen and (max-width:415px){
.jumboText p{
  font-size: 2.2em;
  padding-right: 1em;
}
.jumboText .highlight{
  font-size: 1.7em;
  font-weight:bold
}
.jumboText h4{
  font-size: 1.4em;
  color:white;
    padding-right: 1em;
}
.jumboTron{
  background-image: url('~@/assets/handsClasp.png');
  
}
.jumboText{ 
width: 300px;
height: 300px;
  background-color: rgba(69, 189, 255, 0.3);
  color: Black;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
  margin-left: 50px;
  margin-top: 50px;
  padding-top: 50px;
}
}
@media screen and (min-width: 416px){
  .toContact{
    font-size: .5em;
    text-align: right;
  }
  .jumboText{ 
width: 500px;
height: 500px;
  background-color: rgba(69,189,255,.3);
  color: Black;
  font-family: 'Montserrat', sans-serif;

  margin-left: 50px;
  margin-top: 50px;

}
.jumboText p{
margin-right: 80px;
  font-size: 3em;
  text-align: right;
}
.jumboText .highlight{
  font-weight:bold;
  font-size: 1.55em;
}
.jumboText h4{
  font-size: 1.4em;
margin-right: 80px;
  color:white;
  text-align: right;
}
.jumboTron{
  background-image: url('~@/assets/consultation.png');
  background-size:100vw;
  background-position-x: center;
  height: 600px;
}
}

</style>