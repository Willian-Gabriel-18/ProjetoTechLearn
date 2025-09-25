import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import LearnCatalogView from '@/view/LearnCatalogView.vue';
import NotFoundView from '@/view/NotFoundView.vue';
import NewsCatalogView from '@/view/NewsCatalogView.vue';
import LearnView from '@/view/LearnView.vue';
import NewsView from '@/view/NewsView.vue';

//Cria um comportamento para o scroll ao abrir novas rotas
const scrollBehavior = (to, from, savedPosition) => {
  //Se tiver uma posição do scroll já salva retorne ela
  if(savedPosition) return savedPosition;

  //Por padrao vai retornar o topo da página
  return { left: 0, top: 0};
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
    {
      path: '/learn',
      name: 'learnCatalog',
      component: LearnCatalogView
    },
    {
      path: '/news',
      name: 'newsCatalog',
      component: NewsCatalogView
    },
    {
      path: '/news/:id',
      name: 'newRead',
      component: NewsView
    },
    {
      path: '/learn/:categoria/:id',
      name: 'learn',
      component: LearnView
    }
  ],
  scrollBehavior,
})

export default router
