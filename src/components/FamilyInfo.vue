<template>
    <div>
        <h2>family infomation</h2>
        <button @click="gotoMenu">go to back</button>
        <!-- <ul>
            <li v-for="a in data" :key="a">{{a}}</li>
        </ul> -->
        <!-- <Axios>
            <p>1</p>
            <p>2</p>
        </Axios>
        <Axios slot="up">
            <p>1up</p>
            <p>2up</p>
        </Axios> -->
        <!-- <Axios>我是父组件down内容{{name}}</Axios> -->
        <Axios>
            <template slot-scope="user">
            <!-- <template v-slot:user> -->
                <div v-for="(item, index) in user.data" :key="index">
                {{item.name}}
                </div>
            </template>
        </Axios>
    </div>
</template>
<script>
import route from '../router'
import Axios from './Axios'
export default {
    name:'FamilyInfo',
    data(){
        return {
           name:'jack'
        }
    },
    methods:{
        gotoMenu(){
            console.log(this.$route)
            //this.$router.go(-2)//跳转到上一次浏览的页面
            this.$router.replace('/Direct/WorkInfo')
            // this.$router.replace({name:'menuLink'})
             //this.$router.push('/Direct/WorkInfo')
            // this.$router.push({name:'menuLink'})
        }
    },
    components:{
        Axios
    }
}
</script>