<template>
  <v-app>
    <v-content>
    <custom-header></custom-header>
    <router-view/>
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
