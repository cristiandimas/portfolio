import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioView.vue')
  },
  {
    path: '/react',
    name: 'react',
    component: () => import('../views/ReactView.vue')
  },
  // {
  //   path: '/laravel',
  //   name: 'laravel',
  //   component: () => import('../views/LaravelView.vue')
  // },
  {
    path: '/vanilla',
    name: 'vanilla',
    component: () => import( '../views/VanillaView.vue')
  },
  {
    path: '/node',
    name: 'node',
    component: () => import( '../views/NodeView.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('../views/SkillView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
