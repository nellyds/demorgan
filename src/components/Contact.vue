<template>
  <section
    id="contact"
    class="py-5"
  >

    <v-container>
      <v-row>
        <v-col
          xs12
          md6
        >
          <v-form>
            <v-container pa-0>
              <v-row>
                <v-col
                  cols="12"
                  class="mb-4 grey--text"
                >
                  Call or submit a note and let's talk about what DeMorgan will do for you!
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="First Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Last Name*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Your Email*"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Your Phone Number*"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Subject"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="Message"
                    outlined
                  />
                </v-col>

                <v-col cols="12">
                  <v-btn
                    :block="$vuetify.breakpoint.xsOnly"
                    color="primary"
                    depressed
                    x-large
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-container
            fluid
            pa-0
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
                <v-card-title>Mailing Address</v-card-title>
                <v-card-text>
                  <div>542 Evergreen Terrage</div>
                  <div>Springfield VT 79938</div>
                  <div>United States</div>
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="6"
                class="pa-0"
              >
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
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact',

  }}

</script>
<style scoped>

  .py-5{
    max-width: 350px;
  }

</style>
