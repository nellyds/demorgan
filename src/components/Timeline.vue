<template>
  <section id="welcome">
    <v-container class="timeLine">
      <v-timeline align-top dense class="timeLineContainer">
        <v-timeline-item
          v-for="milestone in milestones"
          :key="milestone"
          data-aos="fade-down"
          data-aos-duration="1000"
          color="rgba(55,189,255)"
          small
          fill-dot
        >
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <div data-aos="fade-up" data-aos-duration="1000">
              <v-card :elevation="hover ? 0 : 10">
                <v-card-title>
                  {{ milestone.date }}
                </v-card-title>
                <v-card-text>
                  {{ milestone.action }}
                </v-card-text>
              </v-card>
            </div>
          </v-hover>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Timeline",
  data: () => ({
    milestones: [
      { date: "9/22/08", action: "Business Milestone 1" },
      { date: "9/30/09", action: "Business Milestone 2" },
      { date: "9/30/09", action: "Business Milestone 3" },
      { date: "9/30/09", action: "Business Milestone 4" },
      { date: "9/30/09", action: "Business Milestone 5" }
    ]
  })
};
</script>
<style scoped>
.timeline {
  width: 400px;
  margin-bottom: 35px;
}
</style>
