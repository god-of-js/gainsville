<template>
 <v-content color="white"> 
   <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">View student information</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in studentsCollection" :key="student.fname">
          <td>{{ student.lname }} {{ student.fame }} {{ student.mname }}</td>
          <td>View</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
 </v-content> 
</template>
<script>
 import { mapState } from "vuex";
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