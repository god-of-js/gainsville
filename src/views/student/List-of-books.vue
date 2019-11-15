<template>
  <v-content>
    <div class="firstlayer">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 txtwhite">GAINSVILLE</h1>
          <h4 class="subheading txtwhite">OFFICIAL BOOKS</h4>
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
                <th class="text-left">BOOK NAME</th>
                <th class="text-left">AMOUNT IN NUMBER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ schoolBooks.obj.f1 }}</td>
                <td>{{ schoolBooks.obj.v1}}</td>
              </tr>
              <tr>
                <td>{{ schoolBooks.obj.f2 }}</td>
                <td>{{ schoolBooks.obj.v2}}</td>
              </tr>
              <tr>
                <td>{{ schoolBooks.obj.f3 }}</td>
                <td>{{ schoolBooks.obj.v3}}</td>
              </tr>
              <tr>
                <td>{{ schoolBooks.obj.f4 }}</td>
                <td>{{ schoolBooks.obj.v4}}</td>
              </tr>
              <tr>
                <td>{{ schoolBooks.obj.f5 }}</td>
                <td>{{ schoolBooks.obj.v5}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 6">
                <td>{{ schoolBooks.obj.f6 }}</td>
                <td>{{ schoolBooks.obj.v6}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 7">
                <td>{{ schoolBooks.obj.f7 }}</td>
                <td>{{ schoolBooks.obj.v7}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 8">
                <td>{{ schoolBooks.obj.f8 }}</td>
                <td>{{ schoolBooks.obj.v8}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 9">
                <td>{{ schoolBooks.obj.f9 }}</td>
                <td>{{ schoolBooks.obj.v9}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 10">
                <td>{{ schoolBooks.obj.f10 }}</td>
                <td>{{ schoolBooks.obj.v10}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 11">
                <td>{{ schoolBooks.obj.f11 }}</td>
                <td>{{ schoolBooks.obj.v11}}</td>
              </tr>
              <tr v-if="schoolBooks.inputs == 12">
                <td>{{ schoolBooks.obj.f12 }}</td>
                <td>{{ schoolBooks.obj.v12}}</td>
              </tr>
              <tr>
                  <td>TOTAL</td>
                  <td> {{schoolBooks.sum }}</td>
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
    this.$store.dispatch("getBooksFromDb");
  },
  beforeCreate() {},
  computed: {
    ...mapState(["schoolBooks", "currentUser"])
  }
};
</script>