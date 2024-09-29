import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [{
        path: '/',
        name: "dashboard",
        component: () => import('@/views/DashboardView.vue')
      }]
    }
  ]
})

export default router
