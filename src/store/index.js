import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA={
    state:{
        counter:5000,
        
    },

}
const store = new Vuex.Store({
    state:{
        counter:1000,
        name1:'state',
        name2:'bob'
    },
    mutations:{
        add(state){
            state.counter++
            
        },
        increament(state, payload){
            state.counter=payload.amount1*1
            state.name1=payload.amount2
        }
    },
    actions:{
        aupdate(context){
            setTimeout(() => {
                context.commit('add')
            }, 1000);
        }
    },
    getters:{
        powercount(state){
            return state.counter*state.counter
        }
    },
    modules:{
        a:moduleA
    }
})

export default store