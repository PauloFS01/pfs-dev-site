<template>
  <v-toolbar flat app class="white">
    <v-icon large>facet</v-icon>
    <v-toolbar-title>
       <router-link class="home-link" to="/">
        <span class="font-weight-light">PFS</span>
        <span>DEV</span>
       </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat router to="/portfoio"> Portifólio </v-btn>
      <v-btn flat router to="/writing">Artigos</v-btn>
      <v-btn flat router to="/contact">Contato</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>
  .home-link 
    text-decoration: none
    color: grey
</style>

