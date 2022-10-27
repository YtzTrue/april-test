import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import UserPage from '@/pages/UserPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'user', component: UserPage, path: '/user/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes,
});

export default router;
