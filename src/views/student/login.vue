<template>
  <v-content class="content">
  <v-card max-width="600" class="mx-auto background mt-12 pt-0 pb-6">
    <v-container class="mt-12 pl-12 pr-12 pt-6 pb-6">
      <v-form ref="form" action="submit" @submit="login">
        <v-text-field label="E-mail" type="email" required v-model="email"></v-text-field>
        <v-text-field label="password" required type="password" v-model="password"></v-text-field>
        <v-flex>
          <v-btn :loading="loading" color="primary" type="submit">Log in</v-btn>
          <v-btn color="success" to="/register" class="ml-4" outlined>Register</v-btn>
        </v-flex>
      </v-form>
    </v-container>
  </v-card>
  </v-content>
</template>
<script>
 import { auth } from "@/plugins/firebase/firebaseinit";
 export default {
  name: "login",
  data: () => {
    return {
      email: "",
      password: "",
      loading: false
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.loading = !this.loading;
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then((currentUser) => {
          const user = currentUser.user;
          const vueApp = this;
          this.$store.dispatch("adminCheck", {
            vueApp,
            user
          })  
        })  
        .catch(err => {
          this.loading = !this.loading;
          alert(err);
         });
    }
  }
}
</script> 
<style scoped>
.content{
  overflow: inherit;
}
 @media screen and (max-width: 411px) {
   .background{
     margin-left: 10% !important;
     margin-right: 10% !important;
     margin-top: 30% !important;
   }
 }
  @media screen and (max-width: 415px) {
   .background{
     margin-left: 0% !important;
     margin-right: 0% !important;
     margin-top: 40% !important;
   }
 }
  @media screen and (max-width: 385px) {
   .background{
     margin-left: 0% !important;
     margin-right: 0% !important;
     margin-top: 40% !important;
   }
 }
</style>