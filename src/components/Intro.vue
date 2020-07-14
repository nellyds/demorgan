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
          <!-- <div class="aboutContainer">
            <Timeline />
          </div> -->
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
// import Timeline from "@/components/Timeline.vue";
export default {
  components: {
    // Timeline
  },
  data: () => ({
    intro:
      "At the DeMorgan group, our mission is to partner with the community for everyone’s health by providing health care services regardless of ability to pay; treating patients with compassion, dignity and respect; protecting confidentiality; and offering culturally sensitive services and community outreach.  With our roots in the Dayton area, we are proud to serve our community and our neighbors.",
    aboutSandy:
      "Sandy Anderson CNP is a certified Nurse Practirioner with more than 25 as a practicing nurse and a Family Practice professional."
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
