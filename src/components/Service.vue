<template>
  <v-container>
    <div class="serviceContainer">
        <img :src="require('@/assets/'+ imageUrl)" >
        <v-card-title>
            {{name}}
        </v-card-title>
        <v-card-text class="headline font-weight-bold">
        {{description}}
        </v-card-text>
    </div>
  </v-container>
</template>
<script>
export default {
    props:{
        name: String,
        description: String,
        imageUrl: String
    }
};
</script>
<style scoped>
body{
  background-color: rgba(0,0,0,0);
}
img{
  height: 55px;
  margin-left:50%;

}

</style>
