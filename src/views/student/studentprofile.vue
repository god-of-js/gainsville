<template>
  <v-card class="mt-12 mr-12 ml-12">
    <v-catd-title class="title mt-12">{{ currentStudent.name }}</v-catd-title>
    <hr>
    <v-card-text>{{ currentStudent.classi }}</v-card-text>
    <v-action><v-btn></v-btn></v-action>
  </v-card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "Profile",
  data: () => {
    return {
      selectedFile: null
    };
  },
  computed: {
    ...mapState(['currentStudent'])
  },
  methods: {
  }
};
</script>
<style  scoped>
.title{

}
</style>