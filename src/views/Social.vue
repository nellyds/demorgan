<template>
  <div class="container">
    <v-container>
      <v-row>
        <v-col cols="16" sm="4">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            class="socialContainer"
          >
            <img @click="showIg = !showIf" src="@/assets/instagram.png" />
            <v-btn
              class="button"
              color="rgb(65,189,255)"
              @click="showIg = !showIg"
              >Show Instagram Feed</v-btn
            >
            <IgFeed data-aos="fade-left" v-if="showIg" />
            <v-btn text v-if="showIg" @click="showIg = false">Close</v-btn>
          </div>
        </v-col>
        <v-col cols="16" sm="4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="socialContainer"
          >
            <img @click="showNews = !showNews" src="@/assets/blog.png" />
            <v-btn
              class="button"
              color="rgb(65,189,255)"
              @click="showNews = !showNews"
              >Show Blog Feed</v-btn
            >
            <NewsFeed data-aos="fade-up" v-if="showNews" />
            <v-btn text v-if="showNews" @click="showNews = false">Close</v-btn>
          </div>
        </v-col>
        <v-col cols="16" sm="4">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            class="socialContainer"
          >
            <img
              @click="showTwitter = !showTwitter"
              src="@/assets/twitterBird.png"
            />
            <v-btn
              color="rgb(65,189,255)"
              class="button"
              @click="showTwitter = !showTwitter"
              >Show Twitter Feed</v-btn
            >
            <TwitterFeed data-aos="fade-right" v-if="showTwitter" />
            <v-btn text v-if="showTwitter" @click="showTwitter = false"
              >Close
            </v-btn>
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
  components: {
    IgFeed,
    NewsFeed,
    TwitterFeed
  },
  data() {
    return {
      showIg: false,
      showNews: false,
      showTwitter: false,
      newsItem: [
        {
          content: "This is the content of an article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/12.jpg"
        },
        {
          content: "This is the second article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          content: "This is the third article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/3.jpg"
        },
        {
          content: "This is the fourth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/8.jpg"
        },
        {
          content: "This is the fifth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          content: "This is the sixth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
img {
  width: 125px;
  height: auto;
  margin: 10px;
  text-align: center;
  display: block;
  margin-left: 35%;
}
.socialContainer {
  justify-content: center;
}
.button {
  margin-left: 20%;
}
@media screen and (max-width: 500px) {
}
@media screen and (min-width: 1000px) {
}
</style>
