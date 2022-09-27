<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->

<template>
  <div>
    <h2><strong>Bono</strong></h2>

    <p>
      El contenido bono consiste en los proyectos: <strong>MST: Minimum Spanning Tree</strong>,
      <strong>Criptosistemas</strong>, <strong>Hill Cipher para Z26</strong>
      y <strong>Actividades de Cisco Packet Tracer</strong>.
    </p>

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

    <section>
      <h2>
        Actividades de Cisco Packet Tracer
      </h2>

      <p>
        En estos laboratorios documenté actividades interesantes de
        ingeniería en sistemas que tenía para desarrollar en Cisco Packet
        Tracer y también elaboré unos videos al respecto.
      </p>

      <div>
        <iframe src="./actividades-de-cisco-pt.pdf"
                title="Actividades de Cisco | Packet Tracer">
        </iframe>
      </div>

      <h3>
        Actividad PT Servidor Web con DNS
      </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BukR7CFZCU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <h3>
        PT Actividad DHCP en el router
      </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4qeMG21r-ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <h3>
        Actividad PT Integración de habilidades
      </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Z9dy6AuOHNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
