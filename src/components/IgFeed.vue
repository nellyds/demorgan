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
        <div>
          <v-img @click="toggleCaptionDisplay" :src="gram.imgUrl">
            <div
              v-if="!toggleCaption"
              class="captionDisplay"
              data-aos="fade-left"
              data-aos-duration="1800"
            >
              <p data-aos="slide-left" data-aos-duration="1800">
                {{ gram.caption }}
              </p>
            </div>
          </v-img>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div data-aos="fade-left" data-aos-duration="1000">
      <p data-aos="slide-left" data-aos-duration="1500">{{ header }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "IgFeed",
  data() {
    return {
      toggleCaption: false,
      instagramFeed: [
        {
          caption: "#content of an ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/12.jpg"
        },
        {
          caption: "#This #is #second ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          caption: "#This #is #the third #ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/3.jpg"
        },
        {
          caption: "#This #is the fourth #ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928418/DeMorgan/8.jpg"
        },
        {
          caption: "#This is #the fifth #ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        },
        {
          caption: "#This is #the #sixth #ig",
          imgUrl:
            "https://res.cloudinary.com/nelsondsilva/image/upload/v1585928417/DeMorgan/4.jpg"
        }
      ]
    };
  },
  methods: {
    toggleCaptionDisplay: function() {
      window.alert("hi");
      this.toggleCaption == true
        ? (this.toggleCaption = false)
        : (this.toggleCaption = true);
    }
  }
};
</script>
<style scoped>
v-carousel {
  border: solid 2px black;
}
.captionDisplay {
  width: 100%;
  height: 100%;
  background-color: rgba(65, 189, 225, 0.8);
  color: white;
  text-align: center;
  padding-top: 10%;
  font-size: 1.3em;
}
img {
  height: 100px;
}
@media screen and (max-width: 400px) {
}
</style>
