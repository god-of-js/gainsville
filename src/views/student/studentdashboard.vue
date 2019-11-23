<template>
  <v-content>
    <v-card height="180" width="400" class="mt-12 mx-auto pt-4">
      <v-card-title>Hey, {{ currentUser.fname }} {{ currentUser.lname }} <v-icon>mdi-school</v-icon> </v-card-title>
      <v-card-text class="">You are welcome to GAINSVILLE student portal this is your dashboard</v-card-text>
    </v-card>
      <v-card>
        <v-row class="d-flex justify-space-around">
          <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      Fees
    </v-progress-circular>
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="blue"
    >
      Books
    </v-progress-circular>
        </v-row>
         
      </v-card>
   
  </v-content>
</template>
<script>
 import { mapState } from "vuex";
 export default {
  name: "dashboard",
  data: () => {
    return {
        interval: {},
        value: 0,
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
<style scoped>
  
</style>