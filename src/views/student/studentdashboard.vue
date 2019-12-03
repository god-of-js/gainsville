<template>
  <v-content class="content">
    <v-card class="mt-12 mx-auto pt-4 names">
      <v-card-title>
        Hey, {{ currentUser.fname }} {{ currentUser.lname }}
        <v-icon>mdi-school</v-icon>
      </v-card-title>
      <v-card-text class>You are welcome to GAINSVILLE student portal this is your dashboard</v-card-text>
    </v-card>
    <v-card class="progress mx-auto">
      <v-row class="d-flex justify-space-around">
        <v-progress-circular :rotate="360" :size="100" :width="15" :value="value" color="teal">Fees</v-progress-circular>
        <v-progress-circular :rotate="360" :size="100" :width="15" :value="value" color="blue">Books</v-progress-circular>
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
      value: 0
    };
  },
  // mounted() {
  //   this.interval = setFeeStatus(() => {
  //     if (this.$store.state.paidFee === true) {
  //     }
  //   });
  // },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {}
};
</script> 
<style scoped>
.progress {
  width: 500px;
  display: flex;
  margin-top: 30px;
  justify-self: center;
  padding-bottom: 30px;
  padding-top: 30px;
}
.names {
  width: 300px;
  padding-bottom: 30px;
}
@media only screen and (max-width: 360px) {
  .progress {
    width: 300px !important;
    margin-top: 30px;
    padding-bottom: 30px;
    /* margin-left: 0% !important; */
    padding-top: 30px;
  }
  .names {
    width: 250px;
    /* margin-left: 0% !important; */
  }
}
@media only screen and (max-width: 450px) {
  .names {
    width: 250px;
  }
  .progress {
    width: 250px;
    display: flex;
    margin-top: 30px;
    justify-self: center;
    padding-bottom: 30px;
    padding-top: 30px;
  }
}
</style>