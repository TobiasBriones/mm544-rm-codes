<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->

<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Códigos de Reed-Muller</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navegación
        </md-toolbar>

        <md-list>
          <md-list-item v-on:click="onNavItemClick('/')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Inicio</span>
          </md-list-item>

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

          <md-list-item v-on:click="onNavItemClick('/bib')">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Bibliografía</span>
          </md-list-item>

          <md-list-item class="sep" v-on:click="onNavItemClick('/bonus')">
            <md-icon>link</md-icon>
            <span class="md-list-item-text">Bono</span>
          </md-list-item>
        </md-list>

        <Footer></Footer>
      </md-app-drawer>

      <md-app-content>
        <div class="content">
          <router-view></router-view>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import Footer from './Footer.vue';

  export default {
    name: 'Nav',
    components: {
      Footer
    },
    data: () => ({
      menuVisible: false
    }),
    methods: {
      onNavItemClick(path) {
        if (this.$route.path === path) {
          return;
        }
        this.$router.push({ path });
        this.menuVisible = false;
      }
    }
  };
</script>

<style scoped>
  .md-app-drawer {
    max-height: 960px;
  }

  .md-app-drawer > footer {
    margin-top: 64px;
  }

  .content {
    padding: 16px 5%;
  }

  .sep::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: 0;
    background-color: #757575;
  }

  @media (min-width: 1360px) {
    .md-app-drawer {
      max-height: 1080px;
    }

    .content {
      padding: 32px 15%;
    }
  }
</style>
