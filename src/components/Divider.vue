<template>
  <div class="divider">
    <div
      v-if="divider1"
      data-aos="fade-left"
      data-aos-duration="1800"
      class="divider1"
    >
      <p class="jumboText">{{ header }}</p>
    </div>
    <div
      v-if="divider2"
      data-aos="fade-left"
      data-aos-duration="1800"
      class="divider2"
    >
      <p class="jumboText">{{ header }}</p>
    </div>
    <div
      v-if="divider3"
      data-aos="fade-left"
      data-aos-duration="1800"
      class="divider3"
    >
      <p class="jumboText">{{ header }}</p>
    </div>
    <div
      v-if="divider4"
      data-aos="fade-left"
      data-aos-duration="1800"
      class="divider4"
    >
      <p class="jumboText">{{ header }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    div1: Boolean,
    div2: Boolean,
    div3: Boolean,
    div4: Boolean
  },
  data() {
    return {
      divider1: this.div1,
      divider2: this.div2,
      divider3: this.div3,
      divider4: this.div4
    };
  }
};
</script>
<style scoped>
.divider {
  margin: 10px;
}
@media screen and (max-width: 415px) {
  .divider {
    margin: 10px;
    height: 250px;
  }
  .divider1 {
    width: 100vw;
    height: 200px;
    color: white;
    font-size: 2em;
    text-align: center;
    background-size: 100vw;

    background-image: url("~@/assets/infant.png");
  }
  .divider2 {
    width: 100vw;
    height: 400px;
    color: white;
    font-size: 2em;
    background-image: url("~@/assets/shot.jpg");
    background-size: 100vw;
    text-align: center;
  }
  .divider3 {
    width: 100vw;
    height: 200px;
    color: white;
    font-size: 2em;
    background-image: url("~@/assets/pt.png");
    background-size: 100vw;
    text-align: center;
  }
  .divider4 {
    width: 100vw;
    height: 200px;
    color: white;
    font-size: 2em;
    background-image: url("~@/assets/shot2.jpg");
    background-size: 100vw;
    text-align: center;
  }
  .jumboText {
    width: 200px;
    background-color: rgba(69, 189, 255, 0.8);
    color: white;
    font-family: "Montserrat", sans-serif;
    text-align: right;
    margin-left: 50px;
    padding-right: 10px;
  }
}
@media screen and (min-width: 416px) {
  .divider {
    margin: 10px;
  }
  .jumboText {
    width: 300px;
    height: 300px;
    background-color: rgba(64, 188, 255, 0.3);
    color: white;
    font-family: "Montserrat", sans-serif;
    text-align: right;
    margin-left: 50px;
    padding-right: 10px;
  }
  .divider4 {
    width: 100vw;
    background-blend-mode: hard-light;
    color: white;
    font-size: 2.5em;
    height: 600px;
    text-align: center;
    background-image: url("~@/assets/Banner4.jpg");
    background-size: 100vw;
  }
  .divider3 {
    width: 100vw;
    background-blend-mode: hard-light;
    color: white;
    font-size: 2.5em;
    height: 600px;
    text-align: center;
    background-image: url("~@/assets/banner5.jpg");
    background-size: 100vw;
  }
  .divider2 {
    width: 100vw;
    background-blend-mode: hard-light;
    color: white;
    font-size: 2.5em;
    height: 600px;
    text-align: center;
    background-image: url("~@/assets/banner2.png");
    background-size: 100vw;
  }
  .divider1 {
    width: 600vw;
    background-blend-mode: hard-light;
    color: white;
    font-size: 2.5em;
    height: 600px;
    text-align: center;
    background-image: url("~@/assets/Banner.jpg");
    background-size: 100vw;
  }
}
</style>
