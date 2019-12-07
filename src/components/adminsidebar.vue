<template>
  <v-navigation-drawer dark app clipped mobile-break-point="600" width="260" class="drawer">
    <v-list>
      <v-list-item to="/admin">
        <v-list-item-action class="d-flex">
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

      <v-list-item to="/updatebooks">
        <v-list-item-action>
          <v-icon>mdi-book</v-icon>
        </v-list-item-action>
        <v-list-item-content>Add books</v-list-item-content>
      </v-list-item>
      <v-list-item to="/updatefees">
        <v-list-item-action>
          <v-icon>mdi-cash</v-icon>
        </v-list-item-action>
        <v-list-item-content>Add Payments</v-list-item-content>
      </v-list-item>
      <!-- <v-list-item to="/complaintspage">
        <v-list-item-action>
          <v-icon>mdi-chat</v-icon>
        </v-list-item-action>
        <v-list-item-content>Parent Chat</v-list-item-content>
      </v-list-item>-->
      <!-- <v-list-item to="/adminpost">
        <v-list-item-action>
          <v-icon>mdi-post</v-icon>
        </v-list-item-action>
        <v-list-item-content>Post Information</v-list-item-content>
      </v-list-item>-->
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
  name: "Sidebar",
  data() {
    return {
    };
  },
  methods: {
    logOut() {
      auth.signOut().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script> 
<style scoped>
  .drawer{
    display: block;
  }
  @media screen and (max-width: 600px){
    .drawer{
      display: none
    }
  }
</style>