<template>
  <v-content>
    <v-container>
      <v-form @submit="fill_fields" action="submit" v-model="valid">
        <v-row>
          <v-text-field v-model="result1" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score1" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result2" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score2" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result3" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score3" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result4" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score4" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result5" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score5" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result6" label="Name of result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score6" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result7" label="Name of Result(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score7" label="Score(In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="result8" label="Name of Subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score8" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 8">
          <v-text-field v-model="result9" label="Name of Subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score9" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 9">
          <v-text-field v-model="result10" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score10" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 10">
          <v-text-field v-model="result11" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score11" label="Score(In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 11">
          <v-text-field v-model="result12" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score12" label="Score(In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 12">
          <v-text-field v-model="result13" label="Name of Subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score13" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 13">
          <v-text-field v-model="result14" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score14" label="Score (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 14">
          <v-text-field v-model="result15" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score15" label="Score(In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.noOfResultFields > 15">
          <v-text-field v-model="result16" label="Name of subject(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="score16" label="Score(In numbers)" type="number"></v-text-field>
        </v-row>
        <v-btn color="primary" class="d-flex justify-center" type="submit" :loading="loading">Submit fields</v-btn>
      </v-form>
    </v-container>
  </v-content>
</template>
<script>
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  data() {
    return {
      loading: false,
      valid: false,
      result1: "",
      score1: "",
      result2: "",
      score2: "",
      result3: "",
      score3: "",
      result4: "",
      score4: "",
      result5: "",
      score5: "",
      result6: "",
      score6: "",
      result7: "",
      score7: "",
      result8: "",
      score8: "",
      result9: "",
      score9: "",
      result10: "",
      score10: "",
      result11: "",
      score11: "",
      result12: "",
      score12: "",
      result13: "",
      score13: "",
      result14: "",
      score14: "",
      result15: "",
      score15: "",
      result16: "",
      score16: ""
    };
  },
  methods: {
    fill_fields(e) {
      e.preventDefault();
      this.loading = !this.loading;
      let result = {},
        vueApp = this;
      const fields = this.$store.state.noOfResultFields;
      for (let i = 1; i <= fields; i++) {
        result["result" + i] = this["result" + i];
        result["score" + i] = this["score" + i];
      }
      let obj = {fields ,result  };
      db.collection("results")
        .doc(this.$store.state.resultRecieverId)
        .set(obj)
        .catch(e => {
          this.loading = !this.loading;
          prompt(e);
        });
      const Toast = vueApp.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Signed in successfully"
      });
      Toast.fire({
        type: "success",
        title: "Successfully posted students result"
      });
      this.$router.push("/inputresults");
    }
  }
};
</script>