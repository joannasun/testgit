<template>
    <div>
        
        <p>child cpn slot test</p>
        <!-- <slot></slot>
        <slot name='up'></slot> -->
        <!-- <slot>我是子组件内容</slot> -->
        <slot :data='user'></slot>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Axios',
    data(){
        return{
             user: [
                {name: 'Jack', sex: 'boy'},
                {name: 'Jone', sex: 'girl'},
                {name: 'Tom', sex: 'boy'}
            ]
        }
    }
   
    // created(){
    //     axios.get('http://mscsunj2016.rnd.aspentech.com/ProcessData/AtProcessDataREST.dll/Command?command=folders&client=ProcessBrowser',{
    //         headers: {
    //             'Access-Control-Allow-Origin':'*'
    //             }

    //     }).then(function(res){
    //         console.log(res.data)
    //     }).catch(function(error){
    //         console.log(error)
    //     })
        
    // }
}
</script>