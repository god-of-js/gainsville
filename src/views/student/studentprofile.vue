<template>
  <v-content>
    
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 txtwhite">GAINSVILLE</h1>
          <h4 class="subheading txtwhite">STUDENT PROFILE</h4>
        </v-col>
      </v-row>
    <v-card class="mx-auto mt-2 pt-4 pb-4 mb-6" width="500">
         
      <div class="ml-6  bord">Surname: <span class="lname"> {{ currentUser.lname }}</span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">First Name: <span class="fname"> {{ currentUser.fname }}</span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Middle Name: <span class="mname">{{ currentUser.mname }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Gender: <span class="gender">{{ currentUser.gender }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Present Class: <span class="class">{{ currentUser.classi }} </span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">State:<span class="state">{{ currentUser.state }} </span> </div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Guardian's Name: <span class="momname"> {{ currentUser.mothersName }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  bord">Guardian's Number: <span class="mnum">{{ currentUser.mnum }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6 ">Home Address: <span class="address"> {{ currentUser.address }}</span> </div>
      <v-divider></v-divider>
      <div class="ml-6 ">Home Address: <span class="address"> {{ currentUser.email }}</span> </div>
    </v-card>

  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Profile",
  data: () => {
    return {
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
};
</script>
<style  scoped>

hr{
  margin-top: 10px;
  margin-bottom: 10px;
}
.lname{
  margin-left: 12%;
}

.fname{
  margin-left: 8.9%;
}
.mname{
  margin-left: 5.8%;
}
.gender{
  margin-left: 16.1%;
}
.class{
  margin-left: 6%;
}
.state{
  margin-left: 20%;
}
.momname{
  margin-left: 5%
}
.mnum{
  margin-left: 2.8%
}
.address{
  margin-left: 6%;
}
</style>