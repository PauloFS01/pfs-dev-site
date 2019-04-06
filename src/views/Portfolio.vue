<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(work, index) in works" :key="index" xs12>
        <list-portfolio :work="work"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import ListPortfolio from '@/components/portfolio/ListPortfolio'
export default {
  components: {
    ListPortfolio
  },
    computed: {
        ...mapState({
            works: state => state.portfolio.works
        })
    }   
}
</script>