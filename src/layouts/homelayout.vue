<template>
    <v-app>
        <homenav/>
    <router-view />  
    </v-app>
</template>
<script>
import homenav from '@/components/homenav.vue'
export default {
    components: {
        homenav
    }
}
</script>