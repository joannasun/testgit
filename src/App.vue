<template>
  <div id="app">
    <div>
      <h5>路由</h5>
      <router-link to="/Direct" >Go to Direct</router-link>
      <router-link to="/HelloWorld" >Go to HelloWorld</router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </div>
    
    <!-- <input v-focus value="自定义指令forcos" v-changeColor>
    <Direct>  </Direct>  
    <input type="text" v-model="title">
    
    <HelloWorld v-bind:title="title"> </HelloWorld>
    <ol>
      <HelloWorld v-for="item in posts" v-bind:key="item.text" v-bind:post="item"></HelloWorld>
    </ol>
    
    <HelloWorld v-on:increment1="incrementtotal"> </HelloWorld>{{total}} -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//import Direct from'./components/Direct'

export default {
  name: 'App',
  data:function(){
    return {
      title:'propchild cpn 2',
      total:0,
      posts:[
        { text: 'Runoob' },
        { text: 'Google' },
      ]
    }
  },
  created(){
    console.log('created');
    
  },
   mounted(){

  },
   updated(){

  },
  components: {
    HelloWorld,
    //Direct,
  },
  methods:{
    incrementtotal: function () {
      this.total ++
    }
  },
  directives:{
        focus:{
            inserted:function(el){
               el.focus()
            }
        },
        changeColor:{
          bind:function(el){
            el.style.background='red'
          }
        }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
