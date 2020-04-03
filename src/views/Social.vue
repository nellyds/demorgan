<template>
<div class="container">
  <v-container>
   <v-row >
          <v-col cols="16" sm="4">
              <div class="socialContainer" >
         <IgFeed />
         </div>
        </v-col>
               <v-col cols="16" sm="4">
         <div class="socialContainer" >
                <NewsFeed />
         </div>
          </v-col>
            <v-col cols="16" sm="4">
         <div class="socialContainer" >
                <TwitterFeed />
         </div>
          </v-col>
   </v-row>
       
  </v-container>
  </div>
</template>

<script>
import IgFeed from "@/components/IgFeed.vue";
import NewsFeed from "@/components/NewsFeed.vue";
import TwitterFeed from "@/components/TwitterFeed.vue";
export default {
  name: "Social",
  components:{
    IgFeed,
    NewsFeed,
    TwitterFeed
  },
  data(){
    return{
        showIg: false,
        showNews: true,
        showTwitter: false,
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


@media screen and (max-width: 500px){

}
 @media screen and (min-width: 1000px){

} 
</style>
