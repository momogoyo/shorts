import { createRouter, createWebHistory } from 'vue-router'
import ShortsPage from '@/views/Shorts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shorts',
      component: ShortsPage
    }
  ]
})

export default router