<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->
<!-- Bibliography found in the BIBLIOGRAPHY.md file in the root directory of this project.-->

<template>
  <footer>
    <p>
      <strong>
        Course Project: Reed Muller Codes
      </strong>
    </p>
    Copyright © 2021 Tobias Briones. All rights reserved.
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style scoped>
  footer {
    padding: 16px 24px 32px 16px;
    text-align: center;
    background-color: #F0F0F0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 800px) {
    footer {
      padding: 24px 48px;
      text-align: center;
      background-color: #F0F0F0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
</style>
