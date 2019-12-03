<template>
  <div class="drawer">
    <v-navigation-drawer
      app
      clipped
      mobile-break-point="600"
      width="260"
      class="drawer"
      v-model="drawer"
    >
      <v-list>
        <v-list-item to="/studentdashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/studentprofile">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>Profile</v-list-item-content>
        </v-list-item>
        <v-list-item to="/listofbooks">
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>stationaries</v-list-item-content>
        </v-list-item>
        <v-list-item to="/payment">
          <v-list-item-action>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-action>
          <v-list-item-content>Payments</v-list-item-content>
        </v-list-item>
        <v-list-item to="/update-profile">
          <v-list-item-action>
            <v-icon>mdi-update</v-icon>
          </v-list-item-action>
          <v-list-item-content>Update Info</v-list-item-content>
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
        </v-list-item>-->
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
import { auth } from "../plugins/firebase/firebaseinit";
export default {
  name: "Sidebar",
  data() {
    return {
      mini: true,
      drawer: true
    };
  },
  methods: {
    logOut() {
      auth.signOut().then(() => {
        localStorage.removeItem("currentUser");
        this.$router.push("/login");
      });
    }
  }
};
</script> 
<style >
@media screen and (max-width: 600px) {
  .drawer {
    display: none;
  }
}
</style>
