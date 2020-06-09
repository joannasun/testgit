import VueRouter from 'vue-router'
import Vue from 'vue'
import Direct from '../components/Direct'
import HelloWorld from '../components/HelloWorld'
import WorkInfo from '../components/WorkInfo'
import FamilyInfo from '../components/FamilyInfo'
import Axios from '../components/Axios'
Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/Direct',component: Direct,
        meta:{
            titlle:'direct',
            keepAlive:true
        }
    },
    { path:'/Direct', component: Direct,meta:{titlle:'direct', keepAlive:true},
      children: [
          {
              path:'/Direct/WorkInfo', component:WorkInfo,name:'work',meta:{titlle:'work', keepAlive:true},
              
          },
          {
              path:'/Direct/FamilyInfo',component:FamilyInfo,name:'family',meta:{titlle:'FamilyInfo', keepAlive:true},
              
          },
      ]
    },
    {path:'/HelloWorld', component: HelloWorld,meta:{titlle:'HelloWorld', keepAlive:true},
     children:[
        {
            path:'/HelloWorld/Axios', 
            component:Axios, 
            name:'Axios', 
            meta:{title:'axios',keepAlive:true},
            
        }
    ]
    },
]
const router=new VueRouter({
    mode:'history',
    routes,
    linkActiveClass:'active',
   
})
router.beforeEach((to,from,next)=>{
    console.log(to)
    to.meta.keepAlive = true;
    document.title=to.meta.titlle
    next()
})
// router.beforeEach(function (to, from,next) {
        
// })
export default router
