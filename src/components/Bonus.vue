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
    <section>
      <h2>
        MST: Minimum Spanning Tree
      </h2>

      <p>
        El siguiente proyecto es un juego de mazmorras que implementa un
        algoritmo de Prim para obtener mazmorras conectadas por distancias
        mínimas y que no se pueda volver a una mazmorra al ya haber pasado por
        ella. Este algoritmo es usado en los routers para buscar una dirección
        IP y no quedarse en un loop infinito si se encontrara a sí mismo al
        haber un circuito cerrado por ejemplo.
      </p>

      <a href="https://github.com/tobiasbriones/dungeon-mst">Dungeon MST Repositorio de GitHub</a>

      <div>
        <iframe src="./proyecto-juego-de-mazmorras.pdf" title="Proyecto Juego de Mazmorras | MST">
        </iframe>
      </div>
    </section>

    <section>
      <h2>
        Criptosistemas
      </h2>

      <p>
        En este proyecto, implementé varios algoritmos clásicos de criptosistemas
        tales como los famosos: Shift, Substitution, Affine, Vigenere.
      </p>

      <p>
        Recomiendo revisar el siguiente texto para estudiar estos contenidos:
        <strong>
          Introduction to Cryptography With Coding Theory by Wade Trappe Lawrence C Washington
        </strong>
      </p>

      <a href="https://github.com/tobiasbriones/ep-cryptosystems">EP: Cryptosystems Repositorio de GitHub</a>
    </section>

    <section>
      <h2>
        Hill Cipher para Z26
      </h2>

      <p>
        En este proyecto, escribí un programa para calcular un cifrado de Hill
        (Hill Cipher) con sus funciones de encriptación/desencriptación utilizando una
        implementación de matrices en el campo de los números enteros módulo 26
        (Z26).
      </p>

      <a href="https://github.com/tobiasbriones/ep-hill-cipher-mat26">EP: Hill Cipher Mat26 Repositorio de GitHub</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Bonus',
  };
</script>

<style scoped>
  iframe {
    display: block;
    width: 80%;
    height: 720px;
    margin: 32px auto;
    border: 0;
  }
</style>
