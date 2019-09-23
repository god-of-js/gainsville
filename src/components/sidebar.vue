<template>
  <v-navigation-drawer app clipped >
      <v-list >
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
        <v-list-item-content>Books</v-list-item-content>
      </v-list-item>
      <v-list-item to='/payment'>
        <v-list-item-action>
          <v-icon>mdi-cash</v-icon>
        </v-list-item-action>
        <v-list-item-content>Payments</v-list-item-content>
      </v-list-item>
      <v-list-item to="/complaints">
        <v-list-item-action>
          <v-icon>mdi-chat</v-icon>
        </v-list-item-action>
        <v-list-item-content>Suggestions and Complaints</v-list-item-content>
      </v-list-item>
      <v-list-item to="/info">
        <v-list-item-action>
          <v-icon>info</v-icon>
        </v-list-item-action>
        <v-list-item-content>Informations</v-list-item-content>
      </v-list-item>
      <v-list-item @click="logOut">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>Log Out</v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template> 

<script>
 import { auth } from "../plugins/firebase/firebaseinit";
export default {
 name: 'Sidebar',
 methods: {
 logOut() {
  // auth.signOut().then(() => {
  //   this.$router.push('/login');
  // })
 }
 }
  
};
</script> 