<template>
 <v-app id="body">
    <navbar/>
    <sidebar id="side"/> 
    <router-view/>
 </v-app>
</template>
<script>
 import navbar from '@/components/navbar'
 import sidebar from '@/components/sidebar'
 export default {
  components: {
    navbar,
    sidebar,
  },
  computed: {
     side: () => {
     var x = window.matchMedia("(max-width: 700px)");
     var body = document.querySelector('#side')
     if(x.matches) {
      body.parentNode.removeChild(body)
     } else {

     }
   }
  }
}
</script>
<style scoped>
  @media screen and (max-width: 600px){
    #side{
      display: none;
    }
  }
</style>