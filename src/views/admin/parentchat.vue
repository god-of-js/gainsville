<template>
  <v-content>
    <div class="chatroom">
      
    </div>
    <v-form @submit="submit">
      <v-row class="text ml-6 mb-n1">
        <v-textarea auto-grow filled color="green" label="Type a message" rows="1" height="5" ></v-textarea>
        <v-btn type="submit" class="ml-4 mr-2 mt-2 bn" variant="success">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </v-content>
</template>

<script>
import db from "@/plugins/firebase/firebaseinit.js"
export default {
  data: () => {
    return {
      chat: [],
    };
  },
  methods: {
    submit(evt) {
          evt.preventDefault();
          
      }
  }
};
</script>

<style>
.text {
  position: absolute;
  width: 95%;
  bottom: 0px;
}
.bn {
  border-radius: 50px;
}

</style>