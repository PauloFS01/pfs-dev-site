<template>
    <v-flex xs12 sm4 offset-sm4>
        <v-card class="v-card-profile">
            <v-avatar 
                :tile='true'   
                class="mx-auto avatar-position"
                size="150"
            >
                <img :src="require('@/assets/avatars/dev-logo.png')"  alt="avatar"/>
            </v-avatar>  
            <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-bold">
                <p>
                    {{ name }}
                </p>                 
            </h4>
            <p class="card-description font-weight-light">
                {{ email }} 
            </p>
            <p class="card-description font-weight-light">
                {{ phone }} 
            </p>
            <!--
            <v-btn
                color="success"
                round
                class="font-weight-light"
            >Follow</v-btn>
            -->
            </v-card-text>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: ['name', 'email', 'phone', 'img']
}
</script>
<style lang="scss" scoped>
.avatar-position{
    margin-top: -25px;
    border: solid black 1px;
}
</style>
