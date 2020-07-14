<template>
  <v-container>
    <paginate name="patients" :list="patientList" :per="4">
      <div v-for="(patient, i) in paginated('patients')" v-bind:key="i">
        <Testimonial
          v-bind:name="patient.name"
          v-bind:description="patient.description"
          v-bind:imageUrl="patient.imageUrl"
        />
        <p>{{ patient.name }}</p>
      </div>
    </paginate>
    <paginate-links
      class="list"
      for="patients"
      :simple="{
        next: 'Next »',
        prev: '« Back'
      }"
    ></paginate-links>
  </v-container>
</template>
<script>
import Testimonial from "@/components/Testimonials/Testimonial.vue";
export default {
  components: {
    Testimonial
  },
  data() {
    return {
      patientList: [
        {
          name: "person1",
          description:
            "something was more than what was originally said,  I think three senetences will be enough.",
          imageUrl: "1.jpg"
        },
        { name: "person2", description: "something", imageUrl: "2.jpg" },
        { name: "person3", description: "something", imageUrl: "3.jpg" }
      ],
      paginate: ["patients"]
    };
  }
};
</script>
<style scoped></style>
