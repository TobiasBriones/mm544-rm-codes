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
  <div>
    <p><strong>Definición recursiva</strong></p>
    <p>
      <vue-mathjax :formula="p1"></vue-mathjax>
    </p>

    <p><strong>Primer orden</strong></p>
    <p>
      <vue-mathjax :formula="p2"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p3"></vue-mathjax>
    </p>

    <p><strong></strong></p>
    <p>
      <vue-mathjax :formula="p4"></vue-mathjax>
    </p>

    <p><strong></strong></p>
    <p>
      <vue-mathjax :formula="p5"></vue-mathjax>
    </p>

    <p><strong></strong></p>
    <p>
      <vue-mathjax :formula="p6"></vue-mathjax>
    </p>

    <p><strong></strong></p>
    <p>
      <vue-mathjax :formula="p7"></vue-mathjax>
    </p>

    <p><strong></strong></p>
    <p>
      <vue-mathjax :formula="p9"></vue-mathjax>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        p1: `
        Para cada entero positivo $m$ y cada entero $r$ tal que $0 \\leq r \\leq m$,
         existe un código de Reed-Muller de orden $r$ $\\mathscr{RM}(r,m)$.
        `,
        p2: `
         El código de Reed-Muller de primer orden $\\mathscr{RM}(1,m)$ son códigos
         binarios definidos por todos los enteros $m \\geq 1$ recursivamente por:

         * $\\mathscr{RM}(1,1)=\\{00,01,10,11\\}=\\mathbb{Z}_2^2$
         * para $m > 1$, $\\mathscr{RM}(1,m)=\\{ (\\textbf{u}, \\textbf{u}),
               (\\textbf{u}, \\textbf{u+1}) | \\textbf{u} \\in \\mathscr{RM}(1, m-1) \\}$

        `,
        p3: `
        Es decir, $\\mathscr{RM}(1,1)$ es el código que consiste en todas las tuplas
         binarias. $\\mathscr{RM}(1,2)$ es una copia de $\\mathscr{RM}(1,1)$
         -duplicando cada tupla, por ejemplo, pasar de $Z_2^2$ a $Z_2^4$-
          y además volver a duplicar dichas tuplas pero con el lado derecho sumándole
          $\\textbf{1}$. Y así recursivamente para definir las siguientes $n-tuplas$
           de los siguientes $\\mathscr{RM}(1,m)$.
        `,
        p4: `

        `,
        p5: `

        `,
        p6: `

        `,
        p7: `

        `,
      };
    },
  };
</script>

<style scoped></style>
