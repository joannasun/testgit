<template>
  <div class="hello">
    <div id="axios">
      <h3>axios</h3>
      <router-link to='/HelloWorld/Axios'>go to Axios</router-link>
      <router-view ></router-view>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h3>{{title}}</h3>
    <h3>
      <li>{{ post }}</li>
    </h3>
    <h4>
      <button @click="add">+</button>
      {{counter}}
     
      <button  @click="increase">-</button>
    </h4>
    <h5>vuex</h5>
    compute {{count}}
    <button @click="add">+</button> <br>
    平方计算{{getter}}
    <button @click="update">+</button> <br>
    modules {{getmodule}} -->
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'HelloWorld',
  props:['title','post'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter:0
    }
  },
  computed:{
        count(){
             return this.$store.state.counter
        },
        getter(){
          return this.$store.getters.powercount
        },
        getmodule(){
          return this.$store.state.a.counter
        }
  },
  methods:{
    add(){
      this.counter++
      this.$store.commit('add')
      this.$emit('increment1')
    },
    increase(){
      this.counter--
      this.$emit('increment1')
    },
    update(){
       this.counter-10
       console.log('111')
       this.$store.dispatch('aupdate')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
