<template>
    <v-content>
        <span></span>
    </v-content>
</template>
<script>
 export default {
    data() {
        return {

        }
    },
    methods: {

    },
     mounted() {
        //  console.log(this.$store.state.currentUser, 'mount')
         this.$store.dispatch("getFeesFromDb")
    },
    beforeCreate() {
    },
    created() {
        // console.log(this.$store.state.currentUser, 'create')
    },
    computed: {
       dispatch() {
        //    this.$store.dispatch('getFeesFromDb')
       }
    }
 }
</script>