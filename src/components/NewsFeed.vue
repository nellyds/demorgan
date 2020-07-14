<template>
  <div>
    <div>
      <paginate name="newsList" :list="newsItem" :per="1">
        <li v-for="news in paginated('newsList')" v-bind:key="news.title">
          <News
            v-bind:title="news.title"
            v-bind:content="news.content"
            v-bind:imgUrl="news.imgUrl"
          />
        </li>
      </paginate>
      <paginate-links
        class="list"
        for="newsList"
        :simple="{
          next: 'Next »',
          prev: '« Previous'
        }"
      ></paginate-links>
      <div data-aos="fade-left" data-aos-duration="1800">
        <p data-aos="slide-left" data-aos-duration="2200">{{ header }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import News from "@/components/News.vue";

export default {
  name: "NewsFeed",
  components: {
    News
  },
  data() {
    return {
      newsItem: [
        {
          title: "First Article",
          content: "This is the content of an article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/12.jpg"
        },
        {
          title: "Second Article",
          content: "This is the second article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          title: "Third Article",
          content: "This is the third article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/3.jpg"
        },
        {
          title: "Fourth Article",
          content: "This is the fourth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/8.jpg"
        },
        {
          title: "Fifth Article",
          content: "This is the fifth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          title: "Sixth Article",
          content: "This is the sixth article",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        }
      ],
      paginate: ["newsList"]
    };
  }
};
</script>
<style scoped>
.title {
  background-color: rgba(65, 189, 255, 0.7);
  color: white;
  padding: 5px;
}
img {
  height: 100px;
}
li {
  list-style: none;
}
.list {
  list-style: none;
}
@media screen and (max-width: 400px) {
}
</style>
