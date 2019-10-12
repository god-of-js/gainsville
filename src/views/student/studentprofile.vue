<template>
  <v-content>
  <v-card class="d-flex flex-row mt-12 ml-12 mr-12 pt-12 pl-12 pr-12 pb-12">
    <span class="border pt-6 pb-6 ">
      <div class="ml-6  bord">Surname: <span class="space"> {{ currentUser.lname }}</span></div>
      <hr />
      <div class="ml-6  bord">First Name: <span class="space"> {{ currentUser.fname }}</span> </div>
      <hr />
      <div class="ml-6  bord">Last Name: <span class="space">{{ currentUser.mname }} </span></div>
      <hr />
      <div class="ml-6  bord">Gender: <span class="space">{{ currentUser.gender }} </span></div>
      <hr />
      <div class="ml-6  bord">Present Class: <span class="space">{{ currentUser.classi }} </span> </div>
      <hr />
      <div class="ml-6  bord">State:<span class="space">{{ currentUser.state }} </span> </div>
      <hr />
      <div class="ml-6  bord">Mother's Name: <span class="space"> {{ currentUser.mothersName }} </span></div>
      <hr />
      <div class="ml-6  bord">Mother's Number: <span class="space">{{ currentUser.mnum }} </span></div>
      <hr />
      <div class="ml-6  bord">Father's Name:  <span class="space">{{ currentUser.fathersName }} </span></div>
      <hr />
      <div class="ml-6  bord">Father's Number: <span class="space">{{ currentUser.fnum }} </span></div>
      <hr />
      <div class="ml-6 ">Home Address: <span class="space"> {{ currentUser.address }}</span> </div>
    </span>
    <div class="flex-grow-1"></div>
    <span class="picture">
      <v-icon class="profpic">mdi-camera</v-icon>
      <br />
      <v-card-action>
        <v-btn >Attach photo</v-btn>
      </v-card-action>
    </span>
  </v-card>
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
.profpic {
  background-color: grey;
  width: 50px;
  height: 50px;
  margin-bottom: 10%;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 30%;
}
hr{
  margin-top: 10px;
  margin-bottom: 10px;
}
.space{
  margin-left: 5%;
}
.border{
  color: black;
  border: solid;
  width: 50%;
}

</style>