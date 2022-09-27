<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->

<template>
  <div>
    <p>
      <strong>Introducción</strong>
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3CH97_3xCI4"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <p>
      <strong>Peso par de un código</strong>
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dFMtyRFPF1E"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <p>
      <strong>Dual de un código RM(r, m)</strong>
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/HnRs_E7Pujw"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div>
      <p>
        <strong>Paper completo</strong>
      </p>
      <a href="./códigos-de-reed-muller.pdf">códigos-de-reed-muller.pdf</a>
    </div>

    <div>
      <p>
        <strong>Presentación de código dual</strong>
      </p>
      <a href="./reed-muller-dual.pdf">reed-muller-dual.pdf</a>
    </div>

    <div>
      <p>
        <strong>Presentación de Dimensión</strong>
      </p>
      <a href="./reed-muller-dim.pdf">reed-muller-dim.pdf</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Present',
  };
</script>

<style scoped>
  iframe {
    height: 315px !important;
    margin-bottom: 32px;
    border: 0;
  }

  p {
    font-size: 18px;
  }
</style>
