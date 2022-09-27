// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes

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
  },
  {
    path: '/recursive-def',
    name: 'RecursiveDef',
    component: () => import('../components/RecursiveDef.vue'),
  },
  {
    path: '/uv-construction',
    name: 'UvConstruction',
    component: () => import('../components/UvConstruction.vue'),
  },
  {
    path: '/dimension',
    name: 'Dim',
    component: () => import('../components/Dim.vue'),
  },
  {
    path: '/bib',
    name: 'Bibliography',
    component: () => import('../components/Bibliography.vue'),
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: () => import('../components/Bonus.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
