<template>
    <div class="text-xs-center borderBotom">
        <v-layout row wrap>
            <v-flex xs2 sm2>
                <v-img 
                :src='require(`@/assets/images/${work.img}`)'
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
export default {
    props: {
        work: {
            type: Object
        }
    },
    data () {
        return {
            image: 'cryptoeasy2.jpg'
        }
    }
}
</script>
<style lang="scss" scoped>
    .borderBotom {
        border-bottom: 1px dashed #CFD8DC;
    }
</style>
