// Copyright (c) 2021 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes

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
