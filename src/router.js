import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Landing', component: async () => import('./views/Landing.vue') },
  ]
})

export default router
