<template>
<div>
 <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      interval="2000"
    >
      <v-carousel-item v-for="gram in instagramFeed" :key="gram.caption">
        <v-sheet height="100%">
            <v-img :src="gram.imgUrl" />
            <div class="display-3">{{ gram.caption }}</div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div data-aos="fade-left" data-aos-duration="1800" >
        <p data-aos="slide-left" data-aos-duration="2200">{{header}}</p>
    </div>
</div>
</template>
<script>
export default {
name: "IgFeed",
data(){
    return{
        instagramFeed:[
            {caption: '#content of an ig', imgUrl:'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/12.jpg'},
            {caption: '#This is the second ig', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'},
            {caption: '#This is the third ig', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/3.jpg'},
            {caption: '#This is the fourth ig', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/8.jpg'},
            {caption: '#This is the fifth ig', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'},
            {caption: '#This is the sixth ig', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'}
        ],
    }
}
};
</script>
<style scoped>
img{
    height: 100px;
}
@media screen and (max-width: 400px){


}
</style>
