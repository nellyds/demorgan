<template>
<div class="news">
     <v-card
      class="mx-auto"
      max-width="400"
      color="white"
      
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="imgUrl"
      >
        <v-card-title><span class="title">{{title}}</span> </v-card-title>
      </v-img>
  
      <v-card-text class="text--primary">
      </v-card-text>
      <v-card-actions>

  
        <v-btn
          color="rgb(65,189,255"
          text
          @click="overlay = !overlay"
        >
          Read on 
        </v-btn>
        <v-overlay
        color="black"
        opacity=".8"
        :value="overlay"
        z-index=5
        >
            <p>{{content}}</p>
            <v-btn color="primary" @click="overlay=false" >Close </v-btn>
        </v-overlay>
      </v-card-actions>
    </v-card>
</div>
</template>
<script>
export default {
    name: 'News',
    props:{
        title: String,
        imgUrl: String,
        content: String
    },
    data(){
        return{
            overlay:false
        }
    }
}
</script>
<style >
.title{
    background-color:rgba(65,189,255, .7);
    color: white;
    padding: 5px;
}
img{
    height: 100px;
}
.news{
  margin:10px;
}
@media screen and (max-width: 400px){


}
</style>