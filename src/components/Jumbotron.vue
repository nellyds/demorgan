<template>
<v-responsive >

    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item 
       v-for="(item,i) in items"
        :key="i"

      >      

          <v-row
            class="jumboRow"
          >
                <v-img class="jumboImage"
              :src="item.src"
   />  
<v-col
          cols="12"
          sm="8">
          <div data-aos="slide-up" class="headerContainer" data-aos-duration="1200" >
            <p data-aos="slide-left" data-aos-duration="1500" class="headerCopy"> {{item.copyHeader}}</p>
            <p data-aos="slide-left" data-aos-duration="1800" class="headerTitle">{{ item.copy }} </p>
        </div>
</v-col>
          </v-row>

      </v-carousel-item>
    </v-carousel>
</v-responsive>
</template>
<script>

export default {
  name: "Jumbotron",

  data(){
      return{
        items: [
        {
          src: 'https://i.imgur.com/lrevIFw.jpg',
          copy: 'Not just better healthcare, but a better healthcare experience.',
          copyHeader: 'SERVICE'
        },
        {
          src: 'https://i.imgur.com/KVTmHpl.jpg',
          copy: 'Not just better healthcare, but a better healthcare experience.',
          copyHeader: 'Your health comes first'
        },
        {
          src: 'https://i.imgur.com/2cWh1Qm.jpg',
          copy: 'Not just better healthcare, but a better healthcare experience.',
          copyHeader: 'Medicine that touches the world'
        },
        {
          src: 'https://i.imgur.com/1MDpdSl.jpg',
          copy: 'Not just better healthcare, but a better healthcare experience.',
          copyHeader: 'Bettering the Human Condition'
        },
      ],
      mWidth: 1100
      }
  },
};

</script>
<style scoped>
.headerCopy{
    font-size: 2em;
    font-weight: bolder;
    margin-left: 33%;
    color:white;
    
}
.headerTitle{
font-size: 1.2em;
  margin-left: 33%;
  color:white;
     
}
.headerContainer{
    background-color: rgba(69,189,255,1);
    width: 40%;  
}
.jumboImage{
    margin-top:2em;
    position: absolute;
    margin-left:15%;
    width: 65vw
}
</style>