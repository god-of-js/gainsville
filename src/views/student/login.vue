<template>
  <v-content>
  <v-card max-width="600" class="mx-auto background mt-12 pt-0 pb-6">
    <v-container class="mt-12 pl-12 pr-12 pt-6 pb-6">
      <v-form ref="form" action="submit" @submit="login">
        <v-text-field label="E-mail" type="email" required v-model="email"></v-text-field>
        <v-text-field label="password" required type="password" v-model="password"></v-text-field>
        <v-flex>
          <v-btn :loading="loading" color="primary" type="submit" class="mx-auto">Log in</v-btn>
          <v-btn color="success" to="/register" class="mr-12 ml-6 mx-auto">Register</v-btn>
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
        .then(() => {
         const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            type: 'success',
            title: 'Signed in successfully'
          })
          Toast.fire({
            type: "success",
            title: "Successfully logged in"
          })
        })
        .catch(err => {
          this.loading = !this.loading;
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            type: 'error',
            title: err.message
          })
          Toast.fire({
            type: "error",
            title: err
          })
         });
    }
  }
}
</script> 