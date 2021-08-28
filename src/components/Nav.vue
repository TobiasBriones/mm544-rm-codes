<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Códigos de Reed-Muller</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item v-on:click="onNavPresent">
            <md-icon>link</md-icon>
            <span class="md-list-item-text">Presentaciones</span>
          </md-list-item>

          <md-list-item v-on:click="onNavExamples">
            <md-icon>link</md-icon>
            <span class="md-list-item-text">Ejemplos</span>
          </md-list-item>

          <md-list-item v-on:click="onNavAntecedent">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Antecedentes</span>
          </md-list-item>

          <md-list-item v-on:click="onNavGeneralConstruction">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Construcción general</span>
          </md-list-item>

          <md-list-item v-on:click="onNavRecursiveDef">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Definición recursiva</span>
          </md-list-item>

          <md-list-item v-on:click="onNavUVConstruction">
            <md-icon>navigate_next</md-icon>
            <span class="md-list-item-text">Construcción (u, u+v)</span>
          </md-list-item>

          <md-list-item v-on:click="onNavDimension">
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
      onNavPresent() {
        this.$router.push({
          path: '/present',
        });
      },
      onNavExamples() {
        this.$router.push({
          path: '/examples',
        });
      },
      onNavAntecedent() {
        this.$router.push({
          path: '/antecedents',
        });
      },
      onNavGeneralConstruction() {
        this.$router.push({
          path: '/general-construction',
        });
      },
      onNavRecursiveDef() {
        this.$router.push({
          path: '/recursive-def',
        });
      },
      onNavUVConstruction() {
        this.$router.push({
          path: '/uv-construction',
        });
      },
      onNavDimension() {
        this.$router.push({
          path: '/dimension',
        });
      },
    },
  };
</script>

<style scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, 0.12);
  }

  .md-list-item {
    transition: all 200ms;
    cursor: pointer;
  }
</style>
