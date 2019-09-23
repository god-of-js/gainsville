<template>
  <v-content>
    <v-card max-height="344" max-width="400" class="mt-6 pl-6 pt-6 pb-12 ml-12">
      <v-card-title>Hey, {{currentStudent.name}}</v-card-title>
      <v-card-text>This is your dashboard :)</v-card-text>
    </v-card>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "dashboard",
  data() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapState(["currentStudent"])
  }
};
</script> 
<style  scoped>
div{
  border-radius: 50%;
}
</style>