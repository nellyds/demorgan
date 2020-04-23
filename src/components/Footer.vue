<template>
    <div>
          <v-card color="rgba(65,189,255)" width="100%" height="100px">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
      color="rgba(65,189,255)"
    >
      <v-card
        flat
        tile
        width="100%"
        color="rgba(65,189,255)"
      >
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>DeMorgan WellNess Group</strong>
        </v-card-text>
      </v-card>
    </v-footer>
          </v-card>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style>
</style>