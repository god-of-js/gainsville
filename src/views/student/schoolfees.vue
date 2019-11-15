<template>
  <v-content>
    <div class="firstlayer">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 txtwhite">GAINSVILLE</h1>
          <h4 class="subheading txtwhite">OFFICIAL FEE RECIEPT</h4>
        </v-col>
      </v-row>
    </div>
    <v-card class="pl-4 pr-4">
      <div>
        <div class="firstlayer ml-4">
          <v-row >
            <v-col  cols="12">
              <div>NAME: {{currentUser.lname}} {{currentUser.fname}} {{currentUser.mname}}</div>
              <div>CLASS: {{ currentUser.classi }}</div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div>
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">FEE TYPE</th>
                <th class="text-left">AMOUNT IN NUMBER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ schoolFees.obj.f1 }}</td>
                <td>{{ schoolFees.obj.v1}}</td>
              </tr>
              <tr>
                <td>{{ schoolFees.obj.f2 }}</td>
                <td>{{ schoolFees.obj.v2}}</td>
              </tr>
              <tr>
                <td>{{ schoolFees.obj.f3 }}</td>
                <td>{{ schoolFees.obj.v3}}</td>
              </tr>
              <tr>
                <td>{{ schoolFees.obj.f4 }}</td>
                <td>{{ schoolFees.obj.v4}}</td>
              </tr>
              <tr>
                <td>{{ schoolFees.obj.f5 }}</td>
                <td>{{ schoolFees.obj.v5}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 6">
                <td>{{ schoolFees.obj.f6 }}</td>
                <td>{{ schoolFees.obj.v6}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 7">
                <td>{{ schoolFees.obj.f7 }}</td>
                <td>{{ schoolFees.obj.v7}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 8">
                <td>{{ schoolFees.obj.f8 }}</td>
                <td>{{ schoolFees.obj.v8}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 9">
                <td>{{ schoolFees.obj.f9 }}</td>
                <td>{{ schoolFees.obj.v9}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 10">
                <td>{{ schoolFees.obj.f10 }}</td>
                <td>{{ schoolFees.obj.v10}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 11">
                <td>{{ schoolFees.obj.f11 }}</td>
                <td>{{ schoolFees.obj.v11}}</td>
              </tr>
              <tr v-if="schoolFees.inputs == 12">
                <td>{{ schoolFees.obj.f12 }}</td>
                <td>{{ schoolFees.obj.v12}}</td>
              </tr>
              <tr>
                  <td>TOTAL</td>
                  <td> {{schoolFees.sum }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div>
      <v-btn color="green" class="mb-4 mt-4">Pay Fees</v-btn>
      </div>
    </v-card>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getFeesFromDb");
  },
  beforeCreate() {},
  computed: {
    ...mapState(["schoolFees", "currentUser"])
  }
};
</script>