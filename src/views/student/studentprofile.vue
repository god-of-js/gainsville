<template>
  <v-content>
    <span class="border  mt-6">
      <div class="ml-6  bord">Surname: <span class="space"> {{ currentUser.lname }}</span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">First Name: <span class="space"> {{ currentUser.fname }}</span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Last Name: <span class="space">{{ currentUser.mname }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Gender: <span class="space">{{ currentUser.gender }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Present Class: <span class="space">{{ currentUser.classi }} </span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">State:<span class="space">{{ currentUser.state }} </span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Mother's Name: <span class="space"> {{ currentUser.mothersName }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Mother's Number: <span class="space">{{ currentUser.mnum }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Father's Name:  <span class="space">{{ currentUser.fathersName }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Father's Number: <span class="space">{{ currentUser.dnum }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6 ">Home Address: <span class="space"> {{ currentUser.address }}</span> </div>
    </span>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Profile",
  data: () => {
    return {
      selectedFile: null
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {}
};
</script>
<style  scoped>

hr{
  margin-top: 10px;
  margin-bottom: 10px;
}
.space{
  margin-left: 5%;
}
/* .border{
  color: black;
  border: solid;
  width: 50%;
} */

</style>