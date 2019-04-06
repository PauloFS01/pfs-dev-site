<template>
  <v-card
    class="mx-auto black--text"
    color="white"
    dark
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="headline font-weight-bold"> 
        <a class="write-link" :href="write.link"> {{ write.title }} </a>
      </span>
    </v-card-title>

    <v-card-text class="font-weight-light">
      {{ write.snippet }}
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="require('@/assets/avatars/logo-min.png')"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Paulo Silva</v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">01</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">01</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    write: {
      type: Object
    }
  }
}
</script>
<style scoped>
.write-link {
  text-decoration: none;
  color: black;
}
</style>
