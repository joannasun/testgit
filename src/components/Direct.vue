<template>
    <div id="Direct">
        <p>user </p>
        <div>
            <router-link to="/Direct/WorkInfo" tag='button' replace>go to work info</router-link>
            <router-link to='/Direct/FamilyInfo' tag='button' replace>go to family info</router-link>
           
            <router-view></router-view>
        </div>
        
    </div>
    
</template>
<script>
import FamilyInfo from './FamilyInfo'
import WorkInfo from './WorkInfo'
export default {
    name:'Direct',
   
    data(){
        return {counter:0}
    },
    components:{
        FamilyInfo,
        WorkInfo
    },
    // computed:{
    //     getUser(){
    //         return this.$route.params.id
    //     }
    // }
    
}
</script>