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

import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import router from './router';
import VueMathjax from 'vue-mathjax';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueMathjax);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
