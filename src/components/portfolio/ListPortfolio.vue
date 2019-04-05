<template>
    <div class="text-xs-center borderBotom">
        <v-layout row wrap>
            <v-flex xs2 sm2>
                <v-img 
                src="https://picsum.photos/510/300?random" 
                aspect-ratio="1.7"
                max-width="200"
                ></v-img>
            </v-flex>        
            <v-flex xs8 sm10 class="pa-3 mb-2">
                <h1 class="text-lg-left"> {{ work.title }} </h1>
                <p class="text-sm-left"> {{ work.description }} </p>
                <p class="text-xs-right"> <a :href="work.links">link</a> </p>
            </v-flex>                                                 
        </v-layout>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            work: state => state.portfolio.work
        })
    }  
}
</script>
<style lang="scss" scoped>
    .borderBotom {
        border-bottom: 1px dashed #CFD8DC;
    }
</style>
