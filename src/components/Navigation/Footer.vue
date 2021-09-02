<template>
  <div>
    <v-card color="rgba(65,189,255)" width="100%">
      <v-footer v-bind="localAttrs" :padless="padless" color="rgba(65,189,255)">

            <v-row>

      <v-col sm="4">
        <div v-for="(location, i) in locations" v-bind:key="i">
          <ul
            class="footerItem"
            style="border-bottom: solid white 2px; padding: 5px; margin:5px;"
          >
            <li>
              <p style="color: white; font-weight: bolder; font-size: 1.2em;">
                {{ location.name }}
              </p>
            </li>
            <li>
              <i
                style="color: white; margin:5px; "
                class="fa fa-phone"
                aria-hidden="true"
              ></i>
              <a :href="location.phoneNumber" style="color:white;">{{
                location.phone
              }}</a>
            </li>
            <li>
              <i
                style="color: white; margin:5px;"
                class="fa fa-map-marker"
                aria-hidden="true"
              ></i>
              <a :href="location.addressUrl" style="color:white;">{{
                location.address
              }}</a>
            </li>
            <li>
              <a :href="location.addressUrl" style="color:white;">{{
                location.hours
              }}</a>
            </li>
          </ul>
        </div>
      </v-col>
      <v-col md="4"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.9220472457773!2d-84.25402158498326!3d39.83116539896765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88408019aba5beef%3A0xfc4e1c48ec2b3ff9!2s7271%20N%20Main%20St%20%232dayton%2C%20Dayton%2C%20OH%2045415!5e0!3m2!1sen!2sus!4v1630542409516!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </v-col>
    </v-row>
            <v-card flat tile width="100%" color="rgba(65,189,255)">
          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>DeMorgan WellNess Group</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      locations: [
        {
          addressUrl:
            "https://www.google.com/maps/place/7271+N+Main+St+%232dayton,+Dayton,+OH+45415/@39.8311654,-84.2540216,17z/data=!3m1!4b1!4m5!3m4!1s0x88408019aba5beef:0xfc4e1c48ec2b3ff9!8m2!3d39.8311613!4d-84.2518329",
          address: "7271 N Main St Unit 2, Dayton, OH",
          phone: "(937) 365-2110",
          phoneNumber: "tel:937-256-4000",
          hours: "M-TH 9 AM -5PM, F 8AM -1PM"
        }
      ]
    };
  }
};
</script>
<style>
ul{
  text-decoration: none;
  list-style: none;
  text-underline-offset: none;
}
a{
  text-decoration: none;
}
</style>
