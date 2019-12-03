<template>
  <v-content class="content">
    <v-card max-width="600" class="background mb-12">
      <v-container class="mt-12 pl-12 pr-12 pt-6 pb-12">
        <v-form ref="form" action="submit" @submit="reg" v-model="valid">
          <v-text-field label="Address" v-model="address" required></v-text-field>
          <v-autocomplete :items="state" label="State" v-model="selectedState" required></v-autocomplete>
          <v-autocomplete :items="gender" label="Gender" v-model="selectedGender" required></v-autocomplete>
          <v-autocomplete :items="classi" label="Class" v-model="selectedClass" required></v-autocomplete>
          <v-text-field :rules="nameRules" label="Guardian name" v-model="guardiansName" required></v-text-field>
          <v-text-field :rules="nameRules" label="Phone Number of Guardian" v-model="gnum" required></v-text-field>
          <v-row class="butn">
            <v-btn color="primary" :loading="loading" type="submit">Update Profile</v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase/firebaseinit";
export default {
  name: "register",
  data: () => {
    return {
      valid: false,
      nameRules: [v => !!v || "Name is required"],
      passRules: [v => !!v || "Password is required"],
      loading: false,
      selectedClass: "",
      address: "",
      gnum: "",
      guardiansName: "",
      selectedGender: "",
      selectedState: "",
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
      const userData = {
          state: this.selectedState,
          classi: this.selectedClass,
          gender: this.selectedGender,
          gnum: this.gnum,
          guardiansName: this.guardiansName
        },
        vueApp = this;
      db.collection("gainsville")
        .where("userId", "==", this.$store.state.currentUser.userId)
        .get()
        .then(result => {
          result.forEach(element => {
            const userDb = element.data();
            this.$store.dispatch("updateInfo", {
              userData,
              userDb,
              vueApp
            });
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
.background {
  margin: auto;
}
.content {
  overflow: auto;
}
@media screen and (max-width: 370px) {
  .background {
    margin-left: 0% !important;
    margin-right: 0% !important;
    margin-bottom: 9% !important;
  }
  .butn {
    display: flex;
    flex-direction: row;
  }
}
@media screen and (max-width: 414px) {
  .background {
    margin-left: 0% !important;
    margin-right: 0% !important;
    margin-top: 0% !important;
  }
}
@media screen and (max-width: 680px) {
  .background {
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>
