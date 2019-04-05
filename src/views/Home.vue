<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>     
      <v-flex xs12>
      <p class="teal darken-1 white--text text-md-center">
        <span> About me </span>
      </p>          
        <custom-card/>
      </v-flex>
    </v-layout>
  </v-container>       
</template>
<script>
import CustomCard from '@/components/home/CustomCard'
  export default {
    components: {
      CustomCard
    }    
  }
</script>
