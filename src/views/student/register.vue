<template>
  <v-card max-width="600" class="mx-auto background">
    <v-container class="mt-12 pl-12 pr-12 pt-6 pb-12">
      <v-form ref="form" action="submit" @submit="reg" v-model="valid">
        <v-text-field :rules="nameRules" label="Full Name" v-model="name" required></v-text-field>
        <v-text-field :rules="nameRules" label="Present Class" v-model="classi" required></v-text-field>
        <v-text-field :rules="nameRules" label="Email" v-model="email" required></v-text-field>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Avatar"
          required
          v-model="picture"
        ></v-file-input>
        <v-autocomplete :items="state" label="State" v-model="selectedState" required></v-autocomplete>
        <v-autocomplete :items="gender" label="Gender" v-model="selectedGender" required></v-autocomplete>
        <v-text-field :rules="nameRules" label="Mothers name" v-model="mothersName" required></v-text-field>
        <v-text-field :rules="nameRules" label="Fathers name" v-model="fathersName" required></v-text-field>
        <v-text-field
          :rules="passRules"
          label="password"
          v-model="password"
          type="password"
          required
        ></v-text-field>
        <v-flex>
          <v-btn color="primary" :loading="loading" type="submit">register</v-btn>
          <v-btn color="success" class="mr-12 ml-6" to="/login">sign in</v-btn>
        </v-flex>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
import { auth } from "@/plugins/firebase/firebaseinit";
export default {
  name: "register",
  data: () => ({
    valid: false,
    nameRules: [v => !!v || "Name is required"],
    passRules: [v => !!v || "Password is required"],
    name: "Eze Henry Tochukwu",
    loading: false,
    email: "mmm@gmail.com",
    selectedState: "imo",
    selectedGender: "male",
    picture: "",
    mothersName: "mom",
    fathersName: "dad",
    password: "mmmmmmmm",
    classi: "nursery one",
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
    gender: ["male", "female"]
  }),
  methods: {
    reg(e) {
      e.preventDefault();
      this.loading = !this.loading;
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          let vueApp = this;//because *this* is not available in the store
          this.$store.dispatch("createStudentProfile", { //dispatch is used to activate actions we are dispatching this values to the store actions 
            vueApp,
            user: result.user
          });
        })
        .catch(e => {
          alert(e);
        });
    },
    picture() {

    }
  }
};
</script>
