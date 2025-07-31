import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/goals/:id',
      name: 'goal-details',
      component: () => import('../views/GoalView.vue'),
    },
  ],
})

export default router
