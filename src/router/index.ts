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
  //vue2基础路由
  {
    path:"/vue2base",
    name:'vue2base',
    component:() =>import('../views/vue2/VuetBase.vue')
  },
  //css基础路由
  {
    path:'/cssbase1',
    name:'cssbase1',
    component:() =>import('../views/css3/cssBase1.vue')
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
  //安全
  {
    path:'/salfbase1'
  },
  //自动化测试
  {
    path:'/testbase1'
  },
  //计算机网络
  {
    path:'netbase1'
  }
]

const router = new VueRouter({
  routes
})

export default router
