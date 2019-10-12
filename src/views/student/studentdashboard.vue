<template>
  <v-content class="d-flex flex-col ">
    <v-card max-height="344" max-width="400" class="mt-6 pl-6 pt-6 pb-12 ml-12">
      <div>
      <v-card-title>Hey, {{ currentUser.lname }} {{ currentUser.fname }} {{ currentUser.mname }} </v-card-title>
      </div>
      <v-card-text class="mt-2">You are welcome to GAINSVILLE portal this is your dashboard</v-card-text>
    </v-card>
    <div class="mt-12 ml-0 mr-12 d-flex flex-row justify-space-around">
      <v-card class="ml-6 mr-6">
        <v-card-title>Payment Status</v-card-title>
        <v-card-text>If student fees are paid in full</v-card-text>
      </v-card>
      <v-card class="ml-6 mr-6">
        <v-card-title>Book status</v-card-title>
        <v-card-text>If student has bought books in full</v-card-text>
      </v-card>
    </div>
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
  computed: { 
    ...mapState(["currentUser"]),
  },
  methods: {
    
  }
};
</script> 