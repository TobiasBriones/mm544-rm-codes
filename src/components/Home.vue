<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->

<template>
  <div>
    <div class="card">
      <p>
        Bienvenido a esta página web. Utilizando la navegación puedes obtener
        contenido y recursos sobre teoría de códigos aplicados a los códigos de
        Reed-Muller.
      </p>

      <p>
        Más sobre este proyecto:
        <a href="https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes">
          CP: Códigos de Reed Muller Repositorio de GitHub
        </a>
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home'
  };
</script>

<style scoped>
  .card {
    padding: 32px;
    margin-top: 16px;
    border-radius: 8px;
    background-color: #B3E5FC;
  }

  @media (min-width: 600px) {
    .card {
      margin-top: 64px;
    }
  }

  @media (min-width: 960px) {
    .card {
      padding: 32px 64px;
      margin-top: 108px;
    }
  }
</style>
