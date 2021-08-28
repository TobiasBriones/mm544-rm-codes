import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/present',
    name: 'Present',
    component: () => import('../components/Present.vue'),
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('../components/Examples.vue'),
  },
  {
    path: '/antecedents',
    name: 'Antecedents',
    component: () => import('../components/Antecedents.vue'),
  },
  {
    path: '/general-construction',
    name: 'GenCons',
    component: () => import('../components/GeneralConstruction.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
