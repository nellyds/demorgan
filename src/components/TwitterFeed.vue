<template>
  <div>
    <div>
      <paginate name="tweets" :list="twitterFeed" :per="4">
        <li v-for="tweet in paginated('tweets')" v-bind:key="tweet.tweet">
          <div class="tweet">
            <v-card
              class="mx-auto"
              max-width="344"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <v-card-text>
                <p data-aos="slide-left" data-aos-duration="1400">
                  {{ tweet.tweet }}
                </p>
              </v-card-text>
            </v-card>
          </div>
        </li>
      </paginate>
      <paginate-links
        class="list"
        for="tweets"
        :simple="{
          next: 'Next »',
          prev: '« Back'
        }"
      ></paginate-links>
    </div>
  </div>
</template>
<script>
export default {
  name: "twitterFeed",
  data() {
    return {
      twitterFeed: [
        { tweet: "This is another tweet" },
        { tweet: "Why not another tweet." },
        { tweet: "Yet another tweet." },
        { tweet: "Still another tweet." },
        { tweet: "This is the fifth tweet" },
        { tweet: "Why not another tweet." },
        { tweet: "Yet another tweet." },
        { tweet: "Still another tweet." },
        { tweet: "This is the fifth tweet" }
      ],
      paginate: ["tweets"]
    };
  }
};
</script>
<style scoped>
.list {
  list-style: none;
  display: inline-block;
}
.tweet {
  padding: 5px;
  margin: 10px;
}
li {
  list-style: none;
}
@media screen and (max-width: 400px) {
}
</style>
