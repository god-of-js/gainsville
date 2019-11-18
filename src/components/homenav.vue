<template>
  <div>
    <v-app-bar app clipped-left dense color="transparent" class="mb-auto">
      <v-toolbar-title>GAINSVILLE SCHOOLS</v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <div class="flex-grow-1"></div>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="icon"></v-app-bar-nav-icon> -->
      <!-- <v-col class="d-flex justify-space-between options"> -->
        <!-- <v-btn to="/home" text>Home</v-btn> -->
        <!-- <v-btn to="/about" text>About</v-btn>
        <v-btn to="/staff" text>Staffs</v-btn>
        <v-btn to="/location" text>Location</v-btn>
        <v-btn to="/activities" text>Activities</v-btn>
        <v-btn to="/publicinfo" text>Info</v-btn> -->
        <v-btn to="/studentdashboard" active rounded color="green" class="ml-2">Portal</v-btn>
      <!-- </v-col> -->
    </v-app-bar>

    <!-- sidebar based on responsivity -->
    <!-- <v-navigation-drawer v-model="drawer" absolute right temporary app >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/home" >
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item> -->

          <!-- <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/staff">
            <v-list-item-title>Staffs</v-list-item-title>
          </v-list-item>

          <v-list-item to="/location">
            <v-list-item-title>Location</v-list-item-title>
          </v-list-item>
          
          <v-list-item to="/activities">
            <v-list-item-title>Activities</v-list-item-title>
          </v-list-item>
          
          <v-list-item to="/publicinfo">
            <v-list-item-title>Information</v-list-item-title>
          </v-list-item> -->
<!--           
          <v-list-item to="/studentdashboard">
            <v-list-item-title>Student Portal</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<style scoped>
.icon {
  display: none;
}
/* Extra small devices (phones, 600px and down) */
/* @media only screen and (max-width: 600px) {
  .options {
    display: none;
  }
} */

/* Small devices (portrait tablets and large phones, 600px and up) */
/* @media only screen and (min-width: 600px) {
  .options {
    display: none;
  }
} */

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {
  .options {
    display: none;
  }
} */

/* Large devices (laptops/desktops, 992px and up) */
/* @media only screen and (max-width: 992px) {
  .options {
    display: none !important;
  }
  .icon {
    display: block;
  }
} */

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {
  .options {
    display: none;
  }
} */
</style>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>