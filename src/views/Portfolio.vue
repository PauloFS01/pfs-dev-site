<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 6" :key="`4${i}`" xs12>
        <list-portfolio/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ListPortfolio from '@/components/portfolio/ListPortfolio'
export default {
  components: {
    ListPortfolio
  }
}
</script>