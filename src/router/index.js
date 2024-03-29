import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cities',
    name: 'Cities',
    component: () => import(/* webpackChunkName: "cities" */ '../views/Cities.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "Activity" */ '../views/Activity.vue')
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import(/* webpackChunkName: "Restaurant " */ '../views/Restaurant.vue')
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: () => import(/* webpackChunkName: "Hotel " */ '../views/Hotel.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
