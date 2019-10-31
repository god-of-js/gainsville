<template>
  <v-app>
    <navbar />
    <sidebar />
    <router-view />
  </v-app>
</template>
<script>
import sidebar from "@/components/adminsidebar";
import navbar from "@/components/adminnavbar";
export default {
  components: {
    sidebar,
    navbar
  }
};
</script>