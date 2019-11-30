<template>
    <v-content>
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Class</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in selectedClass" :key="student.userId" @click="setResults(student.userId)">
          <td>{{ student.fname }} {{ student.lname }}</td>
          <td>{{ student.classi }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-content>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['selectedClass'])
    },
    methods: {
      setResults(id)  {
          this.$store.commit('setStudentIdForResult', id)
          this.$router.push('/studentresultpost')
      }
    }
}
</script>