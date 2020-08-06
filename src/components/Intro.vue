<template>
  <section id="welcome">
    <div class="container">
      <v-row cols="6">
        <v-col sm="12" md="6">
          <div class="aboutContainer">
            <p>{{ intro }}</p>
            <p>{{ aboutSandy }}</p>
            <img src="@/assets/sandy.jpeg" />
          </div>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.smAndUp" sm="12" md="6">
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    intro:
     "Welcome to The DeMorgan Wellness Group. We put your family’s health and well being first. If you live in the metro area, you can stop by our office for a health and well being consultation. However, don’t worry if you don’t live near us. The majority of our information and services are available on this website and through Clocktree.",
    aboutSandy:
      "Sandy Anderson CNP is a certified Nurse Practirioner with more than 25 as a practicing nurse and a Family Practice professional.",
    aboutFNP: "Unlike other specialties that are limited to a particular organ or disease, family medicine integrates care for patients of all genders and every age, and advocates for the patient in a complex health care system."
  })
};
</script>
<style scoped>
@media screen and (min-width: 416px) {
  .container {
    height: 75vh;
  }
  img {
    width: 80%;
  }
  .aboutContainer {
    border-left: 2px solid rgb(65, 189, 255);
    border-bottom: 2px solid rgb(65, 189, 255);
    margin: 10px;
    padding: 10px;
    width: 600px;
  }
}
@media screen and (max-width: 415px) {
  .aboutContainer {
    width: 100vw;
  }
  img {
    width: 80%;
  }
}
</style>
