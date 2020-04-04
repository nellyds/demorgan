<template>
<v-responsive >
<div class="jumboTron">
<div class="jumboText" data-aos="fade-left" data-aos-duration="1200">
<p data-aos="slide-left" data-aos-duration="1800">Demorgan</p>
<p data-aos="slide-left" data-aos-duration="2000">WellNess</p>
<h4 data-aos="slide-left" data-aos-duration="2300">Your Health  <span class="highlight" data-aos="slide-left" data-aos-duration="2800">Our Mission </span> </h4>
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
.jumboText p{
  font-size: 2.2em;
  padding-right: 1em;
}
.jumboText .highlight{
  font-size: 1.2em;
  font-weight:bold
}
.jumboText h4{
  font-size: 1em;
  color:white;
    padding-right: 1em;
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
@media screen and (min-width: 500px){
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
}
.jumboText .highlight{
  font-weight:bold;
  font-size: 1.3em;
}
.jumboText h4{
  font-size: 1em;
margin-right: 80px;
  color:white;
}

}
.jumboTron{
  background-image: url('~@/assets/consultation.png');
  height: 600px;
}
</style>