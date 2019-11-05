<template>
  <v-content>
    <v-card height="180" width="400" class="mt-12 mx-auto pt-4">
      <v-card-title>Hey, {{ currentUser.name }} </v-card-title>
      <v-card-text class="">You are welcome to GAINSVILLE student portal this is your dashboard</v-card-text>
    </v-card>
    <v-row class="mt-6 d-flex justify-center justify-content-space-between">
      <v-card class="" width="300" height="150">
        <v-card-title>Payment Status</v-card-title>
        <v-card-text>If student fees are paid in full</v-card-text>
      </v-card>
      <v-card class="" width="300" height="150">
        <v-card-title>Book status</v-card-title>
        <v-card-text>If student has bought books in full</v-card-text>
      </v-card>
    </v-row>
  </v-content>
</template>
<script>
 import { mapState } from "vuex";
 export default {
  name: "dashboard",
  data: () => {
    return {
    };
  },
  mounted() {
    },
    created() {
      this.$store.dispatch("getUserProfile")
    },
  computed: { 
    ...mapState(["currentUser"]),
  },
  methods: {
    
   }
 };
</script> 