<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 6" :key="`4${i}`" xs12>
        <writing-preview/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import WritingPreview from '@/components/writingPage/WritingPreview'
export default {
  components: {
    WritingPreview
  }
}
</script>
