<template>
  <v-content class="content">
    <v-card max-width="600" class="background mb-12">
      <v-container class="mt-12 pl-12 pr-12 pt-6 pb-12">
        <v-form ref="form" action="submit" @submit="reg" v-model="valid">
          <v-text-field :rules="nameRules" label="First Name" v-model="fname" required></v-text-field>
          <v-text-field :rules="nameRules" label="Middle Name" v-model="mname" required></v-text-field>
          <v-text-field :rules="nameRules" label="Last Name" v-model="lname" required></v-text-field>
          <v-text-field :rules="nameRules" label="Email" v-model="email" required></v-text-field>
          <v-text-field
            :rules="passRules"
            label="password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
          <v-row class="butn">
            <v-btn color="primary" :loading="loading" type="submit" >register</v-btn>
            <v-btn color="success" class="mr-12 ml-6" to="/login" outlined>sign in</v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-content>
</template>
<script>
import { auth } from "@/plugins/firebase/firebaseinit";
export default {
  name: "register",
  data: () => {
    return {
      valid: false,
      nameRules: [v => !!v || "Name is required"],
      passRules: [v => !!v || "Password is required"],
      fname: "",
      mname: "",
      lname: "",
      gnum: "",
      loading: false,
      email: "",
      password: "",
    };
  },

  methods: {
    reg(e) {
      e.preventDefault();
      this.loading = !this.loading;
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          let vueApp = this; //because *this* is not available in the store

          this.$store.dispatch("createUserProfile", {
            //dispatch is used to activate actions. we are dispatching this values to the store actions
            vueApp,
            user: result.user
          });
        })
        .catch(e => {
          this.loading = !this.loading;
          prompt(e);
        });
    }
  }
};
</script>
<style scoped>
  .background{
    margin: auto;
  }
  .content{
    overflow: auto;
  }
   @media screen and (max-width: 370px) {
    .background{
      margin-left:  0% !important;
      margin-right: 0% !important;
      margin-bottom: 9% !important;
    }
    .butn{
      display: flex;
      flex-direction: row
    }
  }
   @media screen and (max-width: 414px) {
    .background{
      margin-left:  0% !important;
      margin-right: 0% !important;
      margin-top: 0% !important;
    }

  }
  @media screen and (max-width: 680px) {
    .background{
      margin-left:  20%;
      margin-right: 20%;
    }

  }
</style>
