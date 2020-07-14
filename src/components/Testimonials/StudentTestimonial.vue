<template>
  <v-container>
    <paginate name="students" :list="studentList" :per="4">
      <div v-for="(student, i) in paginated('students')" v-bind:key="i">
        <Student
          v-bind:name="student.name"
          v-bind:description="student.description"
          v-bind:imageUrl="student.imageUrl"
          v-bind:title="student.title"
          v-bind:placement="student.placement"
        />
      </div>
    </paginate>
    <paginate-links
      class="list"
      for="students"
      :simple="{
        next: 'Next »',
        prev: '« Back'
      }"
    ></paginate-links>
  </v-container>
</template>
<script>
import Student from "@/components/Testimonials/Student.vue";
export default {
  components: {
    Student
  },
  data() {
    return {
      studentList: [
        {
          name: "person1",
          description: "something",
          imageUrl: "1.jpg",
          title: "Oncology",
          placement: "Kettering Memorial Hospital"
        },
        {
          name: "person2",
          description: "something",
          imageUrl: "2.jpg",
          title: "Oncology",
          placement: "Kettering Memorial Hospital"
        },
        {
          name: "person3",
          description: "something",
          imageUrl: "3.jpg",
          title: "Oncology",
          placement: "Kettering Memorial Hospital"
        },
        {
          name: "person4",
          description: "another thing",
          imageUrl: "4.jpg",
          title: "Oncology",
          placement: "Kettering Memorial Hospital"
        }
      ],
      paginate: ["students"]
    };
  }
};
</script>
<style scoped></style>
