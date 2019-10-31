<template>
 <v-content color="white"> 
          <v-expansion-panels>
    <v-expansion-panel
     v-for="student in studentsCollection" :key="student.fname"
    >
      <v-expansion-panel-header>{{ student.lname }} {{ student.fame }} {{ student.mname }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        
            <div>Address: {{ student.address }}</div>
            <div> Class:{{ student.classi }}</div> 
            <div> State:{{ student.state }}</div>
            <div>Gender:{{  student.gender }}</div>
            <div>Email: {{ student.email }} </div>
            <div>fathers Name : {{ student.fathersName }}</div>
            <div>fathers Number: {{ student.dnum }}</div>
            <div>Mothers Name : {{ student.mothersName }}</div>
            <div>Mothers Number: {{ student.mnum }}</div>
            <div>Email: {{ student.email}} </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
 </v-content> 
</template>
<script>
 import { mapState } from "vuex";
import { METHODS } from 'http';
 export default {
     data: () => {
         return {
             show: false
         }
     },
     computed: {
         ...mapState(["studentsCollection"]),  
     },
     beforeMount() {
          this.$store.dispatch("getStudentCollection");
          },
          methods: {
           hide() {
               const hide = document.getElementsByClassName("hide");
               hide.style.display
            
           } 
          },
 }
</script>
<style>
    #personal{
        padding-left: 30px;
    }
    hr{
        color: hsv(0, 6%, 86%);
    }
    .hide{
      display: none;
    }
</style>