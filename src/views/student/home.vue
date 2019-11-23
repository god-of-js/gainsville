<template>
  <v-content>
    <div class="firstlayer">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 txtwhite">Gainsville Children Academy</h1>
          <h4 class="subheading txtwhite">Register your child today!</h4>
        </v-col>
      </v-row>
    </div>
    
  </v-content>
</template>

<style scoped>
.txtwhite {
  color: white;
}
.options {
  border: block;
  background-color: lavender;
  width: inherit;
  text-align: center;
}
.icon {
  font-size: 50px;
  color: green;
}
.font {
  font-size: 25px;
}
.firstlayer {
   overflow-y: hidden;
  position: fixed;
  margin: 0;
  background-image: url("../../assets/primary.jpg");
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>