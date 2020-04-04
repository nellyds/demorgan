<template>
<div>
    <div>
 <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="item in newsItem" :key="item.content"
      >
         <v-card
      class="mx-auto"
      max-width="400"
      color="white"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="item.imgUrl"
      >
        <v-card-title><span class="title">Article Title</span> </v-card-title>
      </v-img>
  
      <v-card-text class="text--primary">
  
        <div>{{item.content}}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="rgb(65,189,255"
          text
        >
          Share
        </v-btn>
  
        <v-btn
          color="rgb(65,189,255"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
      </v-carousel-item>
    </v-carousel>

    <div data-aos="fade-left" data-aos-duration="1800" >
        <p data-aos="slide-left" data-aos-duration="2200">{{header}}</p>
    </div>
    </div>
</div>
</template>
<script>
export default {
name: "NewsFeed",
data(){
    return{
        newsItem:[
            {content: 'This is the content of an article', imgUrl:'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/12.jpg'},
            {content: 'This is the second article', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'},
             {content: 'This is the third article', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/3.jpg'},
              {content: 'This is the fourth article', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/8.jpg'},
               {content: 'This is the fifth article', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'},
                {content: 'This is the sixth article', imgUrl: 'https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg'}
        ],
    }
}
};
</script>
<style scoped>
.title{
    background-color:rgba(65,189,255, .7);
    color: white;
    padding: 5px;
}
img{
    height: 100px;
}
@media screen and (max-width: 400px){


}
</style>
