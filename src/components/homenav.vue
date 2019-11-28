<template>
  <div>
    <v-app-bar app clipped-left dense color="transparent" class="mb-auto app">
      <v-toolbar-title>GAINSVILLE</v-toolbar-title>
      <v-col class="options d-flex justify-end" id="options">
        <v-btn to="/" text class="links">Home</v-btn>
        <v-btn to="/about" text class="links">About</v-btn>
        <v-btn to="/staff" text class="links">Staffs</v-btn>
        <v-btn to="/location" text class="links">Location</v-btn>
        <v-btn to="/activities" text class="links">Activities</v-btn>
        <v-btn to="/publicinfo" text class="links">Info</v-btn>
        <v-btn to="/studentdashboard" active color="green" class="links">Portal</v-btn>
      </v-col>
      <v-app-bar-nav-icon class="icon"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer  v-model="drawer" absolute temporary >
      <v-list dense>
        <v-list-item to="/" >Home</v-list-item>
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

<style scoped>
.app{
  overflow: hidden;
  position: fixed;
}
.icon {
  display: none;
}
.vspacer{
  display: none;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 360px) {
  .options.responsive {position: relative;}
  .options.responsive.links {
    float: none;
    display: block;
    text-align: left;
  }
  .flexGrow{
    display: none;
  }
  .vspacer{
  display: block;
}
  .icon{
    display: flex;
    justify-self: end;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 3px !important;
  }
  
}
@media only screen and (max-width: 600px) {
  .options {
    display: none;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .options {
    display: none;
  }
  .icon{
    display: flex;
    justify-self: end;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 3px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
  .options {
    display: none !important;
  }
  .icon {
   display: flex;
    justify-self: end;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 3px !important;
  }
}
@media only screen and (max-width: 1024px) {
   .options {
    display: none !important;
  }
  .icon {
   display: block;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 3px !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up)  */
@media only screen and (min-width: 1025px) {
  .options{
    display: block;
  }
  .icon{
    display: none !important;
  }
}
@media only screen and (min-width: 1200px) {
  .options {
    display: block;
  }
  .icon{
    display: none !important;
  }
}
</style>

<script>
  export default {
    data () {
      return {
        drawer: null
      }
    },
  }
</script>