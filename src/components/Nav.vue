<!--
  - Copyright (c) 2021 Tobias Briones. All rights reserved.
  -
  - SPDX-License-Identifier: BSD-3-Clause
  -
  - This file is part of Course Project at UNAH-MM544: Reed Muller Codes.
  -
  - The underlying theoretical contents bibliography is found in the
  - BIBLIOGRAPHY.md file in the root directory of this project.
  -
  - This source code is licensed under the BSD-3-Clause License found in the
  - LICENSE file in the root directory of this source tree or at
  - https://opensource.org/licenses/BSD-3-Clause.
  -->

<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Códigos de Reed-Muller</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item v-on:click="onNavItemClick('/present')">
            <md-icon>link</md-icon>
            <span class="md-list-item-text">Presentaciones</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/examples')">
            <md-icon>link</md-icon>
            <span class="md-list-item-text">Ejemplos</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/antecedents')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Antecedentes</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/general-construction')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Construcción general</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/recursive-def')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Definición recursiva</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/uv-construction')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Construcción (u, u+v)</span>
          </md-list-item>

          <md-list-item v-on:click="onNavItemClick('/dimension')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Dimensión</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      onNavItemClick(path) {
        if (this.$route.path === path) {
          return;
        }
        this.$router.push({ path });
      }
    }
  };
</script>
