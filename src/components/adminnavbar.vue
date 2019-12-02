<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-toolbar-title>GAINSVILLE ADMIN</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon class="big">
        <v-icon >mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="big">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/about">About</v-list-item>
        <v-list-item to="/staff">Staffs</v-list-item>
        <v-list-item to="/location">Location</v-list-item>
        <v-list-item to="/activities">Activities</v-list-item>
        <v-list-item to="/publicinfo">Info</v-list-item>
        <v-list-item to="/studentdashboard">Portal</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null
      }
    },
  }
</script>
