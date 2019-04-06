<template>
    <div>
        <v-flex xs12>
            <v-card color="white" class="Black--text">
                <v-layout>
                    <v-flex xs12 sm4>
                        <v-img class="hidden-sm-and-down"
                        :src="require('@/assets/barzera.jpg')"
                        max-height="400"
                        ></v-img>
                        <v-img  class="hidden-md-and-up"
                       :src="require('@/assets/barzera.jpg')"
                        max-height="200"
                        ></v-img>                    
                    </v-flex>
                    <v-flex xs12>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline"> {{ personalData.name }} </div>
                                <div>{{ personalData.profession }}</div>
                                <span class="hidden-sm-and-down">
                                    <v-card-text class="">
                                        {{ apresentation.text }}
                                    </v-card-text>
                                </span>                            
                            </div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions class="hidden-sm-and-down">
                    <div>
                        Skills and networks:
                    </div>                             
                    <v-spacer></v-spacer>           
                    <div class="text-xs-center avatar-container">
                        <span class="avatar-group" v-for="(skill, index) in skills" :key="index">
                            <v-avatar 
                            class="avatar-position"
                            :tile='false'
                            size="46px"
                            color="white"
                            >
                                <img :src="require(`@/assets/avatars/${skill}.png`)"  alt="avatar"/>
                            </v-avatar>    
                        </span>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="icons-group">
                        <a v-for="(net, index) in networks" :key="index" :href="net.value">
                           <i :class="icons[net.name]"></i>
                        </a>
                    </div>
                </v-card-actions>
            </v-card>
            <!-- mobile v-action -->
            <v-card color="white" class="hidden-md-and-up small-cards">
                <v-layout>
                    <v-card-text class="font-weight-bold">
                        {{ apresentation.text }}
                    </v-card-text>                    
                </v-layout>
                <v-divider light></v-divider>
                <v-card-actions>
                    <div class="text-xs-center">
                        <v-chip v-for="(skill, index) in skills" :key="index" >
                            {{ skill }}
                        </v-chip>                        
                    </div>
                </v-card-actions>
                <v-card-actions>
                    <v-spacer></v-spacer>  
                    <div class="icons-group">
                        <a v-for="(net, index) in networks" :key="index" :href="net.value">
                            <i :class="icons[net.name]"></i>
                        </a>                         
                    </div>
                    <v-spacer></v-spacer>  
                </v-card-actions>
            </v-card>
            <!-- end mobile actions-->
        </v-flex>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            personalData: state => state.user.personalData,
            apresentation: state => state.user.apresentation,
            networks: state => state.user.networks,
            skills: state => state.user.skills,
            icons: state => state.utils.icons,
            avatars: state => state.utils.avatars
        }),
        enders() {
            return "nodejs"
        }
    }
}
</script>
<style lang="scss" scoped>
.icons-group {
    font-size: 1.8rem;
    a {
        margin-left: 0.5rem;
        text-decoration: none;
        color: black;
    }
}
.avatar-container {
    position: relative;
    .avatar-group {
        margin-left: .5rem;
        margin-bottom: -2rem;
        z-index: 2;
    }    
}
.small-cards {
    margin-top: 0.5rem;
}
.avatar-position{
    margin-bottom: -35px;    
}
</style>
