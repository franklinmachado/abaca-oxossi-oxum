import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/orixas',
      name: 'orixas',
      component: () => import('../views/OrixasView.vue'),
    },
    {
      path: '/orixas/oxossi',
      name: 'oxossi',
      component: () => import('../views/OxossiView.vue'),
    },
    {
      path: '/orixas/oxum',
      name: 'oxum',
      component: () => import('../views/OxumView.vue'),
    },
    {
      path: '/orixas/ogum',
      name: 'ogum',
      component: () => import('../views/OgumView.vue'),
    },
  ],
})

export default router
