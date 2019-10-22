<template>
 <v-content color="white"> 
  <div  v-for="student in studentsCollection" class="pt-4 pb-4">
   <span class="ml-4">
     {{ student.lname }} {{ student.fname }} {{ student.mname }}
    <div class="flex-grow-1"></div>
   <div id="personal" v-if="show" >
      <div>Class: {{ student.classi }}  </div>
      <div>State: {{ student.state }}  </div>
      <div>Gender: {{ student.gender }}  </div>
      <div>Home Address: {{ student.address }}  </div>
      <div>Mother's Name: {{ student.mothersName }}  </div>
      <div>Mother's Number: {{ student.mnum }}  </div>
      <div>Father's name: {{ student.fathersName }}  </div>
      <div> Father's Number: {{ student.dnum }} </div>
    </div>
   <v-btn @click="show = true" class="ml-6 mt-4" v-if="!show">View</v-btn>
   <v-btn @click="show = false" class="ml-6 mt-4"  v-if="show">Hide</v-btn>
    <hr class="mt-4 ml-0"/>
   </span>
  </div>
 </v-content> 
</template>
<script>
 import { mapState } from "vuex";
 export default {
     name: 'studentlist',
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
          }
 }
</script>
<style>
    #personal{
        padding-left: 30px;
    }
    hr{
        color: hsv(0, 6%, 86%);
    }
</style>