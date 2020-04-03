<template>
<div>
    <div>
    <paginate name="tweets"
    :list="twitterFeed"
    :per="5"
    >
    <li v-for="tweet in paginated('tweets')" v-bind:key="tweet.tweet">
        <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p> {{tweet.tweet}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
    </li>
    </paginate>

    <div data-aos="fade-left" data-aos-duration="1800" >
    </div>
    </div>
</div>
</template>
<script>
export default {
name: "twitterFeed",
data(){
    return{
        twitterFeed:[
            {tweet: 'This is another tweet'},
            {tweet: 'Why not another tweet.'},
            {tweet: 'Yet another tweet.'},
            {tweet: 'Still another tweet.'},
            {tweet: 'This is the fifth tweet'},
            {tweet: 'Why not another tweet.'},
            {tweet: 'Yet another tweet.'},
            {tweet: 'Still another tweet.'},
            {tweet: 'This is the fifth tweet'}
        ],
        paginate: ['tweets']
    }
}
};
</script>
<style scoped>
li{
    list-style: none;
}
@media screen and (max-width: 400px){


}
</style>
