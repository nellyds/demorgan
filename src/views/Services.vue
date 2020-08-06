<template>
  <div class="container">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <p class="sectionTitle">
            Care Services:
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="16" sm="4">
          <div class="serviceContainerBlue">
            <Service
              name="'Prevention and Wellness"
              description="We offer the best advice and current news to keep your family as healthy and safe as possible."
              imageUrl="assistantWhite.png"
            />
          </div>
        </v-col>
        <v-col cols="16" sm="4">
          <div class="serviceContainerWhite">
            <Service
              name="Disease and Conditions"
              description="Get proactive and schedule a visit and receive the best medical support."
              imageUrl="studentBlue.png"
            />
          </div>
        </v-col>
        <v-col cols="16" sm="4">
          <div class="serviceContainerBlue">
            <Service
              name="Online Visits with Clocktree"
              description="Talk with Sandy and then sign up at www.clocktree.com"
              imageUrl="heartCalenderWhite.png"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
      <v-col>
      <div class="blueIntro">

                  <p data-aos="fade-right" data-aos-duration="800">{{aboutFNP}}</p>
      </div>
      </v-col>
      <v-col>
            <v-card class="serviceListCard" max-width="350" raised outlined data-aos="fade-down" data-aos-duration="800">
        <v-card-text>
        </v-card-text>
        <v-list >
          <v-list-item data-aos="fade-left" data-aos-duration="800" v-for="(item,i) in serviceList" v-bind:key="i">
            <p>{{item}}</p>
          </v-list-item>
        </v-list>
      </v-card>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Service from "@/components/Service.vue";

export default {
  name: "Services",
  components: {
    Service
  },
  data() {
    return {
      services: [
        {
          name: "Prevention and Wellness",
          imageUrl: "assistantWhite.png",
          description:
            "We offer the best advice and current news to keep your family as healthy and safe as possible.",
          id: "1"
        },
        {
          name: "Disease and Conditions",
          imageUrl: "assistant.png",
          description:
            "Get proactive and schedule a visit and receive the best medical support.",
          id: "2"
        },
        {
          name: "Online Visits with Clocktree",
          imageUrl: "workWhite.png",
          description: "Talk with Sandy and then sign up at www.clocktree.com",
          id: "3"
        }
      ],
            aboutFNP: "Unlike other specialties that are limited to a particular organ or disease, family medicine integrates care for patients of all genders and every age, and advocates for the patient in a complex health care system.  Whether than entails diagnosing and manageing your issues or making sure you get to the the specialists you need, Family Medicine will potentially deal with any issue you can think of.  If it is affecting your health, family medicine can address it!",
      serviceList: [
        "Geriatric Care",
        "Acute Care",
        "Chronic Disease Management", 
        "Substance Abuse Treatment",
        "Reproductive Health",
        "Immunizations",
        "Pediatric Carea",
        "Medication Management"
      ]
    };
  }
};
</script>
<style scoped>
.serviceListCard{
  width: 45vw;
}
.blueIntro{
  width: 45vw;
  text-align: left;
}
.sectionTitle {
  font-weight: bolder;
  font-size: 3em;
  text-align: right;
}
.serviceContainerBlue {
  background-color: rgb(55, 189, 255);
  color: white;
  padding: 1em;
}
.serviceContainerWhite {
  background-color: rgb(255, 255, 255);
  color: rgb(55, 189, 255);
  padding: 1em;
}
@media screen and (max-width: 500px) {
  .serviceContainerBlue {
    background-color: rgb(55, 189, 255);
    color: white;
    padding: 1em;
    width: 100vw;
  }
  .serviceContainerWhite {
    background-color: rgb(255, 255, 255);
    color: rgb(55, 189, 255);
    padding: 1em;
    width: 100vw;
  }
  .serviceListCard{
  width: 85vw;
}
.blueIntro{
  width: 85vw;
  text-align: left;
}
}
</style>
