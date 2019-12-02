<template>
  <v-content>
    <v-card class="mx-auto mt-6 wid pt-4 pb-4 pl-4 pr-4">
      <v-textarea placeholder="Write to posts" v-model="post"></v-textarea>
      <v-btn @click="submitPost()" class="mx-auto">Post</v-btn>
    </v-card>
  </v-content>
</template>
<style scoped>
.wid {
  width: 70%;
}
.input {
  width: 60%;
  margin-left: 2%;
}
@media screen and (max-width: 1024px) and (max-height: 1366px) and (min-width: 769px) {
  .wid {
    margin-left: 6% !important;
  }
}
</style>
<script>
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  data: () => {
    return {
      post: ""
    };
  },
  methods: {
    submitPost() {
      const posts = this.post;
      const info = { posts };
      db.collection("publicPosts")
        .doc()
        .set(info)
        .then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "Deleted student from Database"
          });
          Toast.fire({
            type: "success",
            title: "Information successfully posted"
          });
        });
    }
  }
};
</script>