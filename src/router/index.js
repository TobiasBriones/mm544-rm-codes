/*
 * Copyright (c) 2021 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * This file is part of Course Project at UNAH-MM544: Reed Muller Codes.
 *
 * The underlying theoretical contents bibliography is found in the
 * BIBLIOGRAPHY.md file in the root directory of this project.
 *
 * This source code is licensed under the BSD-3-Clause License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/BSD-3-Clause.
 */

import { createRouter, createWebHistory } from 'vue-router';

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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
