<template>  <section id="welcome">
    <v-container
      :pt-5="$vuetify.breakpoint.mdAndUp"
      px-0
      pb-0
    >
    <v-row>
        <v-col>
      <v-img
        max-width="600"
        height="400"
        class="mx-auto"
        :class="$vuetify.breakpoint.mdAndUp ? 'mb-5' : ''"
        contain
        src="https://nebula.wsimg.com/1c21c2fad2da0d90a14e6d31f4d3b3bf?AccessKeyId=978665728D7EF9E1C9B5&disposition=0&alloworigin=1"
      />
      </v-col>

     
          </v-row>

    </v-container>
  </section>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>
