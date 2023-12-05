import { createRouter, createWebHistory } from 'vue-router'
import Shorts from '@/views/Shorts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shorts',
      component: Shorts
    }
  ]
})

export default router