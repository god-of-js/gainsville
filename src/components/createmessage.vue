<template>
  <div>
    <p v-if="errortext">You have to send an actual message.</p>
    <v-form @submit="createmessage">
      <v-row class="text ml-6 mb-n1">
        <v-textarea
          auto-grow
          filled
          name="messages"
          color="green"
          label="Type a message"
          rows="1"
          height="5"
          v-model="newmessages"
        ></v-textarea>
        <v-btn type="submit" class="ml-4 mr-2 mt-2 bn">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import uuidv4 from "uuid/v4";
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  name: "createmessage",
  props: ["name"],
  data() {
    return {
      newmessages: "",
      errortext: ""
    };
  },
  methods: {
    createmessage(evt) {
      evt.preventDefault();
      if (this.newmessages) {
        const data = {
          id: uuidv4(),
          message: this.newmessages,
          name: this.$store.state.currentUser.lname,
          time: Date.now()
        };
        this.$store
          .dispatch("sendmessages", {
            data
          })
          .then(() => {
            this.$store.dispatch('getMessages');
            this.newmessages === null;
            this.errortext == "";
          });
      } else {
        this.errortext = "You can only send an actual message";
      }
    }
  }
};
</script>