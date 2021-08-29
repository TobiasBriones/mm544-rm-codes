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
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer',
  });
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
