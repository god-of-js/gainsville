<template>
  <v-app-bar app clipped-left color="green" class="mb-auto">
    <v-toolbar-title>GAINSVILLE SCHOOLS</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn to="/register" v-if="!currentStudent">register</v-btn>
    <v-container class="circle" v-if="currentStudent" ><v-icon>mdi-camera</v-icon></v-container>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "navbar",
  data: () => {
    return {
    };
  },  
  computed: {
      ...mapState(["currentStudent"])
  },
  methods: {
   
  }
};
</script>
<style scoped>
.circle {
  border-radius: 50%;
  background-color: grey;
  width: 50px;
  height: 50px;
}
</style>