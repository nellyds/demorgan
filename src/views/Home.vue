<template>
  <div div class="home">
    <Jumbotron class="jumbotron" />
    <Divider id="about" div3="true" header="Who We Are" />
    <Intro />
    <!-- <PatientTestimonials /> -->
    <Divider div1="true" header="What We Do" />
    <div data-aos="slide-left" data-aos-duration="1800">
      <Services id="service" />
      <Education />
    </div>
    <Divider div2="true" header="What People are saying" />
    <!-- <StudentTestimonials /> -->
    <Divider div4="true" header="DeMorgan today" />
    <Social id="news" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
// import StudentTestimonials from "@/components/Testimonials/StudentTestimonial.vue";
// import PatientTestimonials from "@/components/Testimonials/PatientTestimonial.vue";
import Contact from "@/components/Contact.vue";
import Services from "@/views/Services.vue";
import Intro from "@/components/Intro.vue";
import Divider from "@/components/Divider.vue";
import Social from "@/views/Social.vue";
import Education from "@/components/Education.vue";
import Footer from "@/components/Navigation/Footer.vue";

export default {
  name: "Home",
  components: {
    // StudentTestimonials,
    // PatientTestimonials,
    Jumbotron,
    Contact,
    Intro,
    Services,
    Divider,
    Social,
    Education,
    Footer
  }
};
</script>
<style scoped>
.home{
  margin-left:5vw;
  width: 90vw;
}
</style>
