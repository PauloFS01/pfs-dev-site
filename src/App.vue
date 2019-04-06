<template>
  <v-app>
    <v-content class="body-color">
    <custom-header></custom-header>
     <v-fade-transition mode="out-in">
       <router-view/>
     </v-fade-transition>    
    </v-content>
  </v-app>
</template>

<script>
import CustomHeader from '@/components/LandingPage/CustomHeader.vue'
export default {
  name: 'App',
  components: {
    CustomHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>
.body-color {
  background-color: #E3F2FD;
}
</style>
