<template>
  <v-content>
    <v-card max-width="600" class="mx-auto background">
      <v-container class="mt-12 pl-12 pr-12 pt-6 pb-12">
        <v-form ref="form" action="submit" @submit="reg" v-model="valid">
          <v-text-field :rules="nameRules" label="First Name" v-model="fname" required></v-text-field>
          <v-text-field :rules="nameRules" label="Middle Name" v-model="mname" required></v-text-field>
          <v-text-field :rules="nameRules" label="Last Name" v-model="lname" required></v-text-field>
          <v-text-field label="Address" v-model="address" required></v-text-field>
          <v-text-field :rules="nameRules" label="Email" v-model="email" required></v-text-field>
          <v-autocomplete :items="state" label="State" v-model="selectedState" required></v-autocomplete>
          <v-autocomplete :items="gender" label="Gender" v-model="selectedGender" required></v-autocomplete>
          <v-autocomplete :items="classi" label="Class" v-model="selectedClass" required></v-autocomplete>
          <v-text-field :rules="nameRules" label="Mothers name" v-model="guardiansName" required></v-text-field>
          <v-text-field :rules="nameRules" label="Phone Number of mother" v-model="gnum" required></v-text-field>
          <v-text-field
            :rules="passRules"
            label="password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
          <v-row>
            <v-btn color="primary" :loading="loading" type="submit" outlined>register</v-btn>
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
      address: "",
      loading: false,
      email: "",
      selectedState: "",
      selectedGender: "",
      guardiansName: "",
      password: "",
      selectedClass: "",
      state: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ],
      gender: ["male", "female"],
      classi: [
        "Play Group",
        "Reception 1",
        "Reception 2",
        "Nursery 1",
        "Nursery 2",
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5"
      ]
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
