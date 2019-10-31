<template>
  <v-content>
    <v-img></v-img>
    <v-parallax :src="require('../../assets/exams.svg')" class="background" height="1000">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Gainsville</h1>
          <h4 class="subheading">Register your ward today!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <div class="options mt-n12 pt-4 pb-4">Address: Akpiri bus-stop 2nd branch: okoko iyanishashi</div>

    <div class="pt-4">
      <v-row>
        <v-col class="d-flex justify-end flex-column">
          <v-icon class="icon d-flex justify-end mr-12">mdi-account-plus</v-icon> 
          <span class="d-flex justify-end  font">Enroll your kids</span>
          
        </v-col>
        <div class="flex-grow-1"></div>
        <v-col class="d-flex justify-start flex-column">
          <v-icon class="icon d-flex justify-start ml-12">mdi-calendar</v-icon>
          <span class="d-flex justify-start font ">School Calendar</span> 
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<style scoped>
.background {
    width: 100vw 100vh;
    background-size: cover;
}
.options {
  border: block;
  background-color: lavender;
  width: inherit;
  text-align: center;
}
.icon{
  font-size: 50px;
  color: green;
}
.font{
  font-size: 25px;
}
</style>