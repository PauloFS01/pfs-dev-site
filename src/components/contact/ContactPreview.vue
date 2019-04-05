<template>
    <v-flex xs12 sm6 offset-sm4>
        <v-card class="pa-4" max-width="400">
            <p class="text-sm-left"><i class="fas fa-user"></i> Contact</p>
            <p class="text-sm-left"><i class="fas fa-envelope"></i>  {{ contact.email }} </p>
            <p class="text-sm-left"><i class="fas fa-mobile"></i> - <i class="fab fa-whatsapp-square"></i>  {{ contact.phone }} </p>
        </v-card>
    </v-flex>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            contact: state => state.user.contact,
        })
    }
}
</script>
