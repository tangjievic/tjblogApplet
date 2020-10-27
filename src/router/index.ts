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
  }
]

const router = new VueRouter({
  routes
})

export default router
