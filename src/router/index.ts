import { createRouter, createWebHistory } from 'vue-router'
import Shorts from '@/views/Shorts'
import Sample from '@/components/Video/sample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shorts',
      component: Shorts
    },
    // {
    //   path: '/sample',
    //   name: 'Sample',
    //   component: Sample
    // }
  ]
})

export default router