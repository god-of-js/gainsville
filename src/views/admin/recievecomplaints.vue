<template>
<v-content>
    <v-list subheader>
      <v-subheader>Recent chat</v-subheader>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <!-- <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'green' : 'grey'">mdi-new</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>Previous chats</v-subheader>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
      >
        <!-- <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-content>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { active: true, title: 'Jason Oner', avatar: '', route:"" },
        { active: true, title: 'Ranee Carlson', avatar: '', route:"" },
        { title: 'Cindy Baker', avatar: '', route:"" },
        { title: 'Ali Connors', avatar: '', route:"" },
      ],
      items2: [
        { title: 'Travis Howard', avatar: '', route:"" },
      ],
    }),
    computed: {
      getConvo() {
        
        this.$store.state
      }
    }
  }
</script>