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
    <h2><strong>Ejemplos</strong></h2>

    <div>
      Este es un repositorio que encontré que tiene funciones para la generación, codificación y
      decodificación de códigos de Reed Muller en MATLAB:
      <a href="https://github.com/jihoonseo/reed-muller/tree/master/MATLAB">
        https://github.com/jihoonseo/reed-muller/tree/master/MATLAB
      </a>.
    </div>
    <div>
      Yo he realizado los siguientes ejemplos en base a ese código fuente:
    </div>

    <div class="code">
      <p>
        Ejemplo 1: <strong>Generar una matriz generadora de RM(r,m)</strong>
      </p>
      <div>
        <p>
          Se han generado las bases de los primeros espacios vectoriales:
        </p>
        <img src="example1.png" alt="Ejemplo 1" />
        <a href="https://github.com/jihoonseo/reed-muller/blob/master/MATLAB/reedmullergen.m">
          Ejemplo-1 (Matriz generadora)
        </a>
      </div>
    </div>

    <div class="code">
      <p>Ejemplo 2: <strong>Codificar mediante un código RM(r,m)</strong></p>
      <div>
        <p>
          Codificación de un mensaje de 7 bits. Notar que la matriz generadora
          de RM(2, 3) es de 7 filas, por lo que nuestro mensaje debe de ser de 7
          bits para efectual el producto vector por matriz.
        </p>
        <img src="example2.png" alt="Ejemplo 2" />

        <a href="https://github.com/jihoonseo/reed-muller/blob/master/MATLAB/reedmullerenc.m">
          Ejemplo-2 (Codificar)
        </a>
      </div>
    </div>

    <div class="code">
      <p>Ejemplo 3: <strong>Decodificar mediante un código RM(r,m)</strong></p>
      <div>
        Debido a la complejidad al decodificar por capas un vector codificado,
        se provee solo el enlace al código en:
        <a href="https://github.com/jihoonseo/reed-muller/blob/master/MATLAB/reedmullerdec.m">
          Ejemplo-3 (Decodificar)
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Examples',
  };
</script>

<style scoped>
  .code {
    padding: 16px 0;
    margin: 32px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
