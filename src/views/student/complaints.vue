<template>
  <v-content>
    <div class="chatroom">
      <div v-chat-scroll="{always: false , smooth: true}" class="messages">
         <div v-for="message in messages" :key="message.id">
          <span>{{message.name}}</span>
          <span>{{message.message}}</span>
          <span>{{message.time}}</span>
        </div> 
      </div>
    
      <createmessage />
    </div>
  </v-content>
</template>

<script>
import {mapState} from 'vuex'
import createmessage from '@/components/createmessage.vue'
export default {
  name: "complaints",
  props: ["name"],
  components: {
    createmessage
  },
  data: () => {
    return {
    };
  },
  computed: {
    ...mapState([
      "messages"
    ])
  },
  created() {
    // console.log(this.$store.state.messages, 'messages')
    this.$store.dispatch('getMessages')
  },
  methods: {
    message(){
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
  background-color: green;
}
</style>