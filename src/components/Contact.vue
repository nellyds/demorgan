<template>
  <section id="contact">
    <v-col class="contactForm" align="center">
      <v-form ref="form" v-model="valid">
        Call or submit a note and let's talk about what DeMorgan will do for
        you!
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          outlined
          label="phone"
        />

        <v-text-field
          v-model="email"
          :rules="emailRules"
          outlined
          label="email"
        />

        <v-text-field v-model="location" label="location" outlined />

        <v-textarea v-model="message" label="message" outlined />

        <v-select
          :items="contactPreference"
          v-model="preference"
          label="How should we contact you?"
        ></v-select>
        <p>{{ preference }}</p>

        <v-btn
          :block="$vuetify.breakpoint.xsOnly"
          color="rgb(65,189,255)"
          depressed
          x-large
          @click="submitMessage"
        >
          Send Message
        </v-btn>
      </v-form>
    </v-col>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  },
  data() {
    return {
      name: null,
      valid: true,
      phone: null,
      email: null,
      message: null,
      preference: null,
      location: null,
      success: false,
      failure: null,
      contactPreference: [
        "By phone, please leave a voice mail",
        "By phone, feel free to send a text message",
        "By email"
      ],
      emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      phoneRules: [
        v =>
          /^[2-9]\d{2}-\d{3}-\d{4}$/.test(v) ||
          "Phone number must be in formatted xxx-xxx-xxxx"
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      messageRules: [v => !!v || "Message can not be blank"]
    };
  },
  methods: {
    submitMessage: function() {
      this.validate();
      this.$http
        .post(this.apiUrl, {
          name: this.name,
          email: this.email,
          message: this.message,
          preference: this.preference,
          location: this.location
        })
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.failure = true;
        });
    },
    validate: function() {
      this.$refs.form.validate();
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 500px) {
  .py-5 {
    width: 350px;
  }
}
@media screen and (min-width: 500px) {
  .py-5 {
    min-width: 100%;
  }
}
</style>
