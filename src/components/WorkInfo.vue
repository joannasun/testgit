<template>
    <div>
        <h2>work infomation -store</h2>
        <p>store state{{count}}</p>
        <p>mutations
            <button @click="add1">{{count}} + {{bob}}</button><br>
            <button @click="param">{{count}} + {{name}}</button>
        </p>
        <p>actions
            <button @click="actionTest">{{count}}</button>

        </p>

    </div>
</template>
<script>
import store from '../store'
export default {
    name:'WorkInfo',
    store,
    computed:{
        count(){
             return this.$store.state.counter
        },
        name(){
            return this.$store.state.name1
        },
        bob(){
            return this.$store.state.name2
        }
    },
    methods:{
        add1(){
            this.$store.commit('add')
        },
        param(){
            this.$store.commit('increament',{
                amount1:200,
                amount2:'mutations param'
            })
        },
        actionTest(){
            this.$store.dispatch('aupdate')
        }
    }
   
}
</script>