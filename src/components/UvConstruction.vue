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
    <h2><strong>Construcción (u, u +v)</strong></h2>

    <p>
      <vue-mathjax :formula="p1"></vue-mathjax>
    </p>

    <p><strong>Prueba</strong></p>
    <p>
      <vue-mathjax :formula="p2"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p3"></vue-mathjax>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'UvConstruction',
    data() {
      return {
        p1: `
        Sea $C_i$ un código lineal q-ario $[n,k_i,d_i]$. Entonces el código $C$ dado por

        $$
        C = \\{ (\\textbf{u}, \\textbf{u+v}) | \\textbf{u} \\in C_1, \\textbf{v} \\in C_2 \\}
        $$

        es un código lineal q-ario $[2n, k_1 + k_2, min(2d_1, d_2)].$
        `,
        p2: `

        Tenemos que $C$ es un código lineal q-ario $[2n, k, d]$ para algún $k$
        y $d$. Sea el mapeo $C_1 \\times C_2 \\to C$ dado por $(c_1, c_2) \\to
        (c_1, c_1 + c_2)$. Esta definición es una biyección, entonces el tamaño
        de $C$ es igual al tamaño de $C_1 \times C_2$ el cual es igual a
         $q^{k_1}q^{k_2}=q^{k_1 + k_2}$. Por consiguiente, la dimensión de $C$
          es $k_1 + k_2$. Considerar una palabra código distinta de cero
          $(c_1, c_1 + c_2)$ de $C$. Si $c_2=0$ entonces $c_1 \\neq 0$ y
        $$
        wt((c_1, c_1 + c_2)) = wt((c_1, c_2)) = 2 wt(c_1) \\geq 2d_1
        \\geq min(2d_1, d_2)
        $$
        En otro caso, si $c_2 \\neq 0$, entonces
        $$
        wt((c_1, c_1 + c_2)) = wt(c_1) + wt(c_1 + c_2) \\geq wr(c_1) + (wt(c_2) -
         wt(c_1)) \\geq wt(c_2) \\geq min(2d_1, d_2)
        $$
        Por tanto, $d \\geq min(2d_1, d_2)$.
        `,
        p3: `
        Si $x \\in C_1$ tiene $wt d_1$ y $y \\in C_2$ tiene $wt d_2$, entonces $(x,x)
         \\in C$ tiene $2d_1$ y $(0, y) \\in C$ tiene  $wt d_2$ así que $d \\leq
         min(2d_1, d_2)$. Por tanto, $d = min(2d_1, d_2)$.
        `
      };
    },
  };
</script>
