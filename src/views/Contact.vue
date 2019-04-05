<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>     
      <v-flex xs12>
      <p class="teal darken-1 white--text text-md-center">
        <span> Professional Contact </span>
      </p>
      <user-profile 
      :email="contact.email" 
      :phone="contact.phone" 
      :name="personal.name"
      img="https://image.ibb.co/cOrOP8/IMG-em-casa.jpg"/>
      </v-flex>
      <material-card></material-card>
    </v-layout>
  </v-container>            
</template>
<script>
import UserProfile from '@/components/profile/UserProfile'
import { mapState } from 'vuex'
export default {
  computed: {
      ...mapState({
          contact: state => state.user.contact,
          personal: state => state.user.personalData
      })
  },
  components: {
    UserProfile
  }
}
</script>