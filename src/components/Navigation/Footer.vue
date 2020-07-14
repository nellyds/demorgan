<template>
  <div>
    <v-card color="rgba(65,189,255)" width="100%">
      <v-row>
        <v-col cols="12" md="6" class="pa-0">
          <v-card-title>Mailing Address</v-card-title>
          <v-card-text>
            <div>542 Evergreen Terrage</div>
            <div>Springfield VT 79938</div>
            <div>United States</div>
          </v-card-text>
        </v-col>

        <v-col cols="12" md="6" class="pa-0">
          <v-card-title>Contact Info</v-card-title>
          <v-card-text>
            <div>+1 (321) 383-4531</div>
            <div>
              <a href="#">contact@YourBusinessName.com</a>
            </div>
            <div>
              <a href="#">@YourBusinessName</a>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-footer v-bind="localAttrs" :padless="padless" color="rgba(65,189,255)">
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
  name: "Footer"
};
</script>
<style></style>
