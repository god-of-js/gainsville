<template>
<div>
  <v-app-bar app clipped-left color="green" class="mb-auto">
    <v-toolbar-title>GAINSVILLE</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn to="/register" v-if="!currentUser">register</v-btn>
    <v-container class="circle" v-if="currentUser" ><v-icon>mdi-camera</v-icon></v-container>
  <v-app-bar-nav-icon class="icon"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item to="/studentdashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item to="/home" >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='/studentprofile'>
        <v-list-item-action >
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>Profile</v-list-item-content>
      </v-list-item>
      <v-list-item to='/listofbooks'>
        <v-list-item-action >
          <v-icon>mdi-book</v-icon>
        </v-list-item-action>
        <v-list-item-content>stationaries</v-list-item-content>
      </v-list-item>
      <v-list-item to='/payment'>
        <v-list-item-action>
          <v-icon>mdi-cash</v-icon>
        </v-list-item-action>
        <v-list-item-content>Payments</v-list-item-content>
      </v-list-item>
      <!-- <v-list-item to="/complaints">
        <v-list-item-action>
          <v-icon>mdi-chat</v-icon>
        </v-list-item-action>
        <v-list-item-content>Suggestions and Complaints</v-list-item-content>
      </v-list-item>
      <v-list-item to="/info">
        <v-list-item-action>
          <v-icon>mdi-information-variant</v-icon>
        </v-list-item-action>
        <v-list-item-content>Informations</v-list-item-content>
      </v-list-item> -->
      <v-list-item @click="logOut">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>Log Out</v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
  
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "navbar",
  data: () => {
    return {
      drawer: null
    };
  },  
  computed: {
      ...mapState(["currentUser"])
  },
  methods: {
   
  }
};
</script>
<style scoped>
.icon{
  display: none;
}
.circle {
  display: block;
  border-radius: 50%;
  background-color: grey;
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 600px) {
 .circle {
  display: none;
} 
.icon{
  display: block;
}
}
</style>