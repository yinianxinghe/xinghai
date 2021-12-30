import Vue from 'vue'
import VueRouter from 'vue-router'
import gongzuotai from '../views/gongzuotai.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gongzuotai',
    component: gongzuotai
  },
  {
    path: '/daiban',
    name: 'daiban',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/daiban.vue')
  },
  {
    path: '/other',
    name: 'other',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/other.vue')
  },
  {
    path: '/msg',
    name: 'msg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/msg.vue')
  },
  {
    path: '/self',
    name: 'self',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/self.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
