import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/index/GuidePage.vue')
  },
  //设计模式
  {
    path: '/obmod',
    name: 'obmod',
    component:() => import('../views/designmoe/ObserverMod.vue')
  },
  {
    path: '/designmoe9',
    name: 'designmoe9',
    component:() => import('../views/designmoe/designmoe9.vue')
  },
  //vue2基础路由
  {
    path:"/vue2base",
    name:'vue2base',
    component:() =>import('../views/vue2/VuetBase.vue')
  },
  {
    path: '/vue2base2',
    name: 'vue2base2',
    component:() => import('../views/vue2/vuebase2.vue')
  },
  {
    path:"/vue2base3",
    name: 'vue2base3',
    component:()=> import('../views/vue2/vuebase3.vue')
  },
  {
    path: '/vue2base4',
    name: 'vue2base4',
    component:() => import('../views/vue2/vuebase4.vue')
  },
  {
    path: '/vue2base6',
    name: 'vue2base6',
    component:() => import('../views/vue2/vuebase6.vue')
  },
  //css基础路由
  {
    path:'/cssbase1',
    name:'cssbase1',
    component:() =>import('../views/css3/cssBase1.vue')
  },
  {
    path:'/cssbase7',
    name:'cssbase7',
    component:() =>import('../views/css3/cssBase7.vue')
  },
  {
    path:'/cssbase8',
    name:'cssbase8',
    component:() =>import('../views/css3/cssBase8.vue')
  },
  //算法
  {
    path:'/algbase1',
    name:'algbase1',
    component:() =>import('../views/alg/algBase1.vue')
  },
  {
    path:'/algbase2',
    name:'algbase2',
    component:() =>import('../views/alg/algbase2.vue')
  },
  {
    path:'/algbase5',
    name:'algbase5',
    component:() =>import('../views/alg/algBase5.vue')
  },
  //安全
  {
    path:'/safebase1',
    name:'safebase1',
    component:() =>import('../views/safe/safebase1.vue')
  },
  //自动化测试
  {
    path:'/testbase1'
  },
  //计算机网络
  {
    path:'netbase1',
    name:'netbase1',
    component:()=>import ('../views/net/netbase1.vue')
  },
  {
    path:'netbase2',
    name:'netbase2',
    component:()=>import ('../views/net/netbase2.vue')
  },
  //前端优化
  {
    path:'/optbase1',
    name:'optbase1',
    component:()=>import ('../views/opt/optbase1.vue')
  },
  {
    path:'/optbase2',
    name:'optbase2',
    component:()=>import ('../views/opt/optbase2.vue')
  },
  {
    path:'/optbase3',
    name:'optbase3',
    component:()=>import('../views/opt/optbase3.vue')
  },
  {
    path:'/optbase4',
    name:'optbase4',
    component:()=>import('../views/opt/optbase4.vue')
  },
  {
    path:'/optbase5',
    name:'optbase5',
    component:()=>import('../views/opt/optbase5.vue')
  },
  {
    path:'/optbase6',
    name:'optbase6',
    component:()=>import('../views/opt/optbase6.vue')
  },
  //node
  {
    path:"/node1",
    name:'node1',
    component:() =>import('../views/node/node1.vue')
  },
  {
    path:"/node2",
    name:'node2',
    component:() =>import('../views/node/node2.vue')
  },
  //react
  {
    path:'/react1',
    name:'react1',
    component:() =>import('../views/react/react1.vue')
  },
  {
    path:'/react2',
    name:'react2',
    component:() =>import('../views/react/react2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
