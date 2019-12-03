<template>
  <v-app>
    <navbar />
    <sidebar class="side"/>
    <router-view />
  </v-app>
</template>
<script>
import navbar from "@/components/navbar";
import sidebar from "@/components/sidebar";
export default {
  components: {
    navbar,
    sidebar
  }
};
</script>
<style >
  .side{
    display: block;
  }
  @media screen and (max-width: 600px) {
    .side{
      display: none
    }
  }
</style>