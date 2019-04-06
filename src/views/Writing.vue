<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(write, index) in writes" :key="index" xs12>
        <writing-preview :write="write"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from "vuex"
import WritingPreview from '@/components/writingPage/WritingPreview'
export default {
  components: {
    WritingPreview
  },
  computed: {
    ...mapState({
      writes: state => state.writing.writes
    })
  }
}
</script>
