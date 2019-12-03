<template>
  <v-app color="beige">
    <router-view></router-view>
  </v-app>
</template>
<style  scoped>
</style>
<script>
export default {
  computed: {
    consolee() {
      console.clear();
    }
  }
};
</script>