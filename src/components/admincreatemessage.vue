<template>
  <div class="mt-2">
    <p v-if="errortext">You have to send an actual message.</p>
    <v-form @submit="createmessage" ref="form">
      <v-row class="text ml-6 mt-6 mb-n1">
        <v-textarea
          auto-grow
          filled
          name="messages"
          color="green"
          label="Type a message"
          rows="1"
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
          id: this.$store.state.currentUser.userId,
          message: this.newmessages,
          name: this.$store.state.currentUser.lname,
          time: Date.now(),
          recieverId: this.$store.state.currentUser.userId
        };
        db.collection("adminmessages")
          .doc()
          .set(data)
          .then(() => {
            this.$refs.form.reset()
          })
          
      } else {
        this.errortext = "You can only send an actual message";
      }
    }
  }
};
</script>

<style scoped>
.text {
  position: fixed;
  width: 89%;
  bottom: 0px;
}
.bn {
  border-radius: 50px;
  background-color: green;
}
@media only screen and (max-width: 600px) {
  .text {
    position: fixed;
    width: 35%;
    bottom: 0px;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .text {
    position: fixed;
    width: 79%;
    bottom: 0px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text {
    position: fixed;
    width: 82%;
    bottom: 0px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .text {
    position: fixed;
    width: 85%;
    bottom: 0px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .text {
    position: fixed;
    width: 90%;
    bottom: 0px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .text {
    position: fixed;
    width: 90%;
    bottom: 0px;
  }
}
</style>