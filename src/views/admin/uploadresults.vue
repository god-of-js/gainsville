<template>
  <v-content>
    <v-card width="500" class="mx-auto pr-4 pt-6 pl-4 pb-4 mt-12">
      <v-form @submit="checkClass">
        <v-autocomplete :items="classi" label="Class" v-model="classes" required></v-autocomplete>
        <v-text-field placeholder="Number of result fields" v-model="noOfFields"></v-text-field>
        <v-btn type="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  data() {
    return {
      classes: null,
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
      ],
      noOfFields: null,
      valid: false
    };
  },
  methods: {
    checkClass(e) {
      e.preventDefault();
      db.collection("gainsville")
        .where("classi", "==", this.classes)
        .get()
        .then(query => {
          query.forEach(element => {
            const vueApp = this;
            const student = element.data();
            const fields = this.noOfFields
            this.$store.dispatch("selectClassResults", {
              vueApp,
              student,
              fields
            });
          });
        });
    }
  }
};
</script>