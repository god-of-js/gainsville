<template>
<v-app color="beige">
    <v-content>
    <navbar v-if="this.$route.path !== '/login' && this.$route.path !== '/register'"/>
    <sidebar v-if="this.$route.path !== '/login' && this.$route.path !== '/register'"/> 
    <router-view> </router-view>
    </v-content>
  </v-app>
</template>
<script>
import navbar from './components/navbar'
import sidebar from './components/sidebar'
export default {
  name: 'app',
  components: {
    navbar,
    sidebar
  }
}
</script>