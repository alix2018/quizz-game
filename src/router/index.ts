import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import { AppRoute } from '@/enums';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: AppRoute.home,
      component: HomeView,
    },
    {
      path: '/menu',
      name: AppRoute.menu,
      component: MenuView,
    },
  ],
});

export default router;
