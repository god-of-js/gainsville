<template>
  <div>
    <v-app-bar app color="white" elevate-on-scroll clipped-left>
      <v-toolbar-title>GAINSVILLE ADMIN</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon class="big">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="big">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-app-bar-nav-icon class="icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
       <v-list dense>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
.icon {
  display: none;
}
@media screen and (max-width: 600px) {
  .icon {
    display: block;
  }
}
</style>