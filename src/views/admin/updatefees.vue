<template>
  <v-content>
    <v-card
      v-if="this.$store.state.noOfFeesInputs == null"
      width="500"
      class="mx-auto pr-4 pl-4 pb-4 mt-12"
    >
      <v-form @submit="inputNumberOfFields">
        <v-autocomplete :items="classi" label="Class" v-model="selectedClass" required></v-autocomplete>
        <v-text-field v-model="number" label="Input the number of fields(not less than 5)"></v-text-field>
        <v-btn type="submit">submit</v-btn>
      </v-form>
    </v-card>
    <v-container v-if="this.$store.state.noOfFeesInputs !=  null">
      <v-form @submit="fill_fields" action="submit" v-model="valid">
        <v-row>
          <v-text-field v-model="field1" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee1" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="field2" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee2" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="field3" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee3" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="field4" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee4" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="field5" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee5" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 5">
          <v-text-field v-model="field6" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee6" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 6">
          <v-text-field v-model="field7" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee7" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 7">
          <v-text-field v-model="field8" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee8" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 8">
          <v-text-field v-model="field9" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee9" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 9">
          <v-text-field v-model="field10" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee10" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 10">
          <v-text-field v-model="field11" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee11" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-row v-if="this.$store.state.no_of_fees_inputs > 11">
          <v-text-field v-model="field12" label="Name of field(In words)"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="fee12" label="Amount of fees (In numbers)" type="number"></v-text-field>
        </v-row>
        <v-btn color="primary" class="d-flex justify-center" type="submit">Submit fields</v-btn>
      </v-form>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      number: null,
      selectedClass: null,
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
      valid: false,
      field1: "null",
      fee1: '5',
      field2: "null",
      fee2: '6',
      field3: "null",
      fee3: '7',
      field4: " null",
      fee4: '3',
      field5: "null",
      fee5: '3',
      field6: "null",
      fee6: '7',
      field7: "null",
      fee7: '2',
      field8: null,
      fee8: null,
      field9: null,
      fee9: null,
      field10: null,
      fee10: null,
      field11: null,
      fee11: null,
      field12: null,
      fee12: null,
      total: 0
    };
  },
  methods: {
    fill_fields(e) {
      e.preventDefault();
      let i;
      let obj = {};
      const year = this.selectedClass;
      for (i = 1; i <= this.number; i++) {
        obj["f" + i] = this["field" + i];
        obj["v" + i] = this["fee" + i];
       this.total += Number(obj['v' + i]) ;
      }
       const sum = this.total 
      let vueApp = this;
      this.$store.dispatch("getFees", {obj, year, vueApp, sum});
    },
    inputNumberOfFields() {
      const numba = this.number;
      const classiSelected = this.selectedClass;
      const vueApp = this;
      this.$store.dispatch("getNoOfFees", { numba, vueApp, classiSelected });
    }
  }
};
</script>