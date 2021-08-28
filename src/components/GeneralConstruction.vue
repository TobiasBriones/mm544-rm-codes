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
    <p>
      Los códigos de Reed-Muller son un conjunto infinito de códigos y además
      forman parte de los códigos de evaluación. A continuación se da una
      construcción general como referencia.
    </p>

    <p><strong>Función evaluación</strong></p>
    <p>
      <vue-mathjax :formula="p1"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p2"></vue-mathjax>
    </p>

    <p><strong>Definición</strong></p>
    <p>
      <vue-mathjax :formula="p3"></vue-mathjax>
    </p>

    <p><strong>Definición</strong></p>
    <p>
      <vue-mathjax :formula="p4"></vue-mathjax>
    </p>

    <p><strong>Proposición</strong></p>
    <p>
      <vue-mathjax :formula="p5"></vue-mathjax>
    </p>

    <p><strong>Proposición</strong></p>
    <p>
      <vue-mathjax :formula="p6"></vue-mathjax>
    </p>

    <p><strong>Proposición</strong></p>
    <p>
      <vue-mathjax :formula="p7"></vue-mathjax>
    </p>

    <p><strong>Aplicación evaluación Isomorfismo</strong></p>
    <p>
      <vue-mathjax :formula="p8"></vue-mathjax>
    </p>

    <p><strong>Código de Reed-Muller (general)</strong></p>
    <p>
      <vue-mathjax :formula="p9"></vue-mathjax>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'GeneralConstruction',
    data() {
      return {
        p1: `
        Sean  $P = \\{ \textbf{p}_1, ... ,\\textbf{p}_n | n \\in \\mathbb{N}
         \\}$ un subconjunto finito de un objeto geométrico $X$ y $V$ un
         $\\mathscr{F}_q$-espacio vectorial de aplicaciones $f:X \\to \\mathscr{F}_q$.
         Se llama \\textbf{evaluación} en $P$ de las aplicaciones de $V$ a la
         aplicación:

        $$
        ev_P: V \\to \\mathbb{F_q^n}
        $$

        $$
        f \\to ev_P (f) = f(\\textbf{p}_1)...f(\\textbf{p}_n).
        $$
        `,
        p2: `
        Como $V$ es un $\\mathbb{F}_q$-espacio vectorial, si $ev_P$ resulta ser una aplicación lineal,
        entonces su imagen directa $ev_P(V)$ será un $F_q$-subespacio vectorial de $F_q^n$, es decir, un
        código lineal de longitud $n$ sobre $F_q$ cuyas palabras son las imágenes
        de las aplicaciones de $V$ a través de $ev_P$. Bajo todas estas circunstancias, se
        conoce al código $ev_P(V)$ así obtenido por código de evaluación en $P$ de las
        aplicaciones de $V$. Los parámetros que definen al código pueden deducirse
        de las propiedades de $V$ como $F_q$-espacio vectorial. Los códigos de Reed-Muller son
         un caso particular de códigos de evaluación, donde $P = X = F_q^m$ -que en este caso es un anillo conmutativo y unitario
        con estructura de $F_q$-espacio vectorial- y $V = F_q[x1, ..., xm]$ -que, además de
        ser un $F_q$-espacio vectorial, también tiene estructura de anillo conmutativo y
        unitario-.
        `,
        p3: `
        Una aplicación $q-aria$ de $m$ variables es una aplicación $f:\\mathbb{F}_q^m \\to \\mathbb{F}_q$.
        `,
        p4: `
         Sea $F \\in F_q[x_1, ..., x_m]$ un polinomio. Si $n = q^m$, se conoce por
         aplicación polinómica asociada a $F$ a la aplicación $q-aria$
         $f : \\mathbb{F}_q^m \\to \\mathbb{F}_q$ tal que, para cualquier $m-tupla$
          $(a_1, ... , a_m) \\in \\mathbb{F}_q^m$, verifica que
           $f(a_1, ... , a_m) = F(a_1, ... , a_m)$.
        `,
        p5: `
        Sea $F \\in \\mathbb{F}_q [x_1, ..., x_m]$. Si $F(\\textbf{v}) = 0$ para todo
        $\\textbf{v} \\in F_q^m$ -en particular $F^* -\\textbf{v}- = 0$ para todo
        $\\textbf{v} \\in \\mathbb{F}_q^m$, entonces $F^* = 0$.
        `,
        p6: `
         Los conjuntos $\\mathbb{F}_q^n$ y $P_m^q$ son isomorfos como $F_q$-álgebras.
          En consecuencia, cada polinomio de una misma clase de equivalencia
          determina la misma aplicación polinómica.
        `,
        p7: `
        La aplicación evaluación en $\\mathbb{F}_q^m$ de los polinomios de $\\mathbb{F}_q[x_1, ..., x_m]$ en $\\mathbb{F}_q^n$ dada por:

        $$
        ev_{\\mathbb{F}_q^m} : \\mathbb{F}_q [x_1, ..., x_m] \\to \\mathbb{F}_q^n
        $$
        $$
        F \\to ev_{\\mathbb{F}_q^m}(F) = \\textbf{F} = F_1, ..., F_n
        $$
        es un epimorfismo de anillos, que además es lineal.
        `,
        p8: `
         $$
          \\bar{ev}_{\\mathbb{F}_q^m} : P_m^q \\to \\mathbb{F}_q^n
          $$
          $$
          \\bar{F} \\to \\bar{ev}_{\\mathbb{F}_q^m}(\\bar{F}) =
          ev_{\\mathbb{F}_q^m}(F).
          $$
        `,
        p9: `
        Sean $p \\in \\mathbb{N}$ primo y $q = p^s$. Sean $m$, $r$ $\\in \\mathbb{N}$
         tales que $r \\leq m(q-1)$. Un \\textbf{código de Reed-Muller q-ario
         $\\mathscr{RM}_q (r,m)$} de orden $r$ y longitud $q^m$ a la imagen directa
         de $\\mathscr{P}_m^p (r)$ a través de la aplicación - Definición
         -Aplicación evaluación Isomorfismo- -. Además, se define $\\mathscr{RM}_q
         (l,m)= \\{0 ... 0\\}, \\forall l < 0$.
        `,
      };
    },
  };
</script>

<style scoped></style>
