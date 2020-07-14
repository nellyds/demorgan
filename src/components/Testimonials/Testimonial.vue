<template>
  <div>
    <v-card class="card" rounded>
      <v-card-text class="quote">{{ description }}</v-card-text>
      <v-avatar style="margin-left:45%;">
        <img :src="require('@/assets/' + imageUrl)" />
      </v-avatar>
      <v-card-text class="name">{{ name }}</v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Testimonials",
  props: {
    name: String,
    description: String,
    imageUrl: String
  }
};
</script>
<style scoped>
.card {
  width: 300px;
}
.name {
  color: black;
  font-style: bold;
  font-size: 0.9em;
  text-align: right;
  margin-right: 15px;
}
.quote {
  color: rgba(20, 144, 255, 0.8);
  font-style: italic;
  font-size: 1.1em;
  text-align: left;
  margin-left: 15px;
}
img {
  border: solid 2px black;
}
</style>
