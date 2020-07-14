<template>
  <div>
    <div class="card" rounded>
      <Quotation />
      <p class="quote">{{ description }}</p>
      <v-avatar style="margin-left:200px;">
        <img :src="require('@/assets/' + imageUrl)" />
      </v-avatar>
      <p class="name">{{ name }}</p>
      <p class="bio">{{ title }}</p>
      <p class="bio">{{ placement }}</p>
    </div>
  </div>
</template>
<script>
import Quotation from "@/components/Testimonials/Quotation.vue";

export default {
  name: "Testimonials",
  components: {
    Quotation
  },
  props: {
    name: String,
    description: String,
    imageUrl: String,
    title: String,
    placement: String
  }
};
</script>
<style scoped>
.card {
  width: 300px;
  margin: 10px;
}
.name {
  color: black;
  font-style: bold;
  font-size: 1.1em;
  text-align: right;
}
.bio {
  text-align: right;
  font-weight: lighter;
  font-size: 0.9em;
}
.quote {
  color: rgba(20, 144, 255, 0.8);
  font-style: italic;
  font-size: 1.3em;
  text-align: left;
}
</style>
