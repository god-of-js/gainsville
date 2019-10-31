<template>
  <v-app-bar app clipped-left dense color="transparent" class="mb-auto">
    <v-toolbar-title>GAINSVILLE SCHOOLS</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col class="d-flex justify-space-between">
      <v-btn to="/home" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/staff" text>Staffs</v-btn>
      <v-btn to="/location" text >Location</v-btn>
      <v-btn to="/activities" text>Activities</v-btn>
      <v-btn to="/publicinfo" text>Info</v-btn>
      <v-btn to="/studentdashboard" active rounded color="green" class="ml-2">Portal</v-btn>
    </v-col>
  </v-app-bar>
</template>