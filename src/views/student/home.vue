<template>
  <v-content>
          <div class="firstlayer">
      <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-4 txtwhite">Gainsville</h1>
              <h4 class="subheading txtwhite">Register your ward today!</h4>
            </v-col>
          </v-row>
    </div>

    <!-- <div class="options pt-4 pb-4">Address: Akpiri bus-stop 2nd branch: okoko iyanishashi</div>
 07086939858 
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
    </div> -->
  </v-content>  
</template>

<style scoped>
.txtwhite{
  color: white;
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
.firstlayer{
  background-image: url('../../assets/primary.jpg');
  width: 100%;
  height: 100%;
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>