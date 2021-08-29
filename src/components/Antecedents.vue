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
      <vue-mathjax :formula="p1"></vue-mathjax>
    </p>
    <p>
      <vue-mathjax :formula="p2"></vue-mathjax>
    </p>
    <p>
      <vue-mathjax :formula="p3"></vue-mathjax>
    </p>
    <p>
      <vue-mathjax :formula="p4"></vue-mathjax>
    </p>
    <p>
      <vue-mathjax :formula="p5"></vue-mathjax>
    </p>
    <div>
      <ul>
        <li>
          <p>
            <vue-mathjax :formula="p6"></vue-mathjax>
          </p>
        </li>
        <li>
          <p>
            <vue-mathjax :formula="p7"></vue-mathjax>
          </p>
        </li>
        <li>
          <p>
            <vue-mathjax :formula="p8"></vue-mathjax>
          </p>
        </li>
        <li>
          <p>
            <vue-mathjax :formula="p9"></vue-mathjax>
          </p>
        </li>
      </ul>
    </div>

    <p><strong>Sobre los códigos de Reed-Muller</strong></p>

    <p>
      <vue-mathjax :formula="p10"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p11"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p12"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p13"></vue-mathjax>
    </p>

    <p><strong>Campo de Galois</strong></p>

    <p>
      <vue-mathjax :formula="p14"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p15"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p16"></vue-mathjax>
    </p>

    <p><strong>Polinomios mínimos</strong></p>

    <p>
      <vue-mathjax :formula="p17"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p18"></vue-mathjax>
    </p>

    <p>
      <vue-mathjax :formula="p19"></vue-mathjax>
    </p>

    <p><strong>Código lineal</strong></p>

    <p>
      <vue-mathjax :formula="p20"></vue-mathjax>
    </p>

    <p><strong>Distancia de Hamming</strong></p>
    <p>
      <vue-mathjax :formula="p21"></vue-mathjax>
    </p>

    <p><strong>Peso de una palabra</strong></p>
    <p>
      <vue-mathjax :formula="p22"></vue-mathjax>
    </p>

    <p><strong>Código Dual</strong></p>
    <p>
      <vue-mathjax :formula="p23"></vue-mathjax>
    </p>

    <p><strong>Matriz de Control</strong></p>
    <p>
      <vue-mathjax :formula="p24"></vue-mathjax>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Antecedents',
    data() {
      return {
        p1: `
        En el momento en el que un transmisor emite un mensaje mediante el medio
         hacia un receptor, a causa del medio --aire o cable-- por el que se
         transmiten los paquetes el receptor puede recibir y recibirá más de 
         alguna vez mensajes no íntegros distintos a los emitidos originalmente
          por el transmisor. En esta etapa entra en acción la teoría de códigos 
          para la detección y corrección de errores. Ejemplos de estos errores 
          son por ejemplo cambiar el valor de un bit, de manera que si se 
          transmite la cadena $10011101$, se puede recibir al otro lado un 
          $10011100$ el cual cambio el ultimo bit del mensaje.
          Podemos detectar que hubo un error porque la n-tupla recibida
           no pertenece a un cierto código y corregir el error en caso 
           de ser corregible y de estar suficientemente cerca de su valor original
            para poder inferir este.
`,
        p2: `
        La corrección de errores se puede llevar a cabo en una gran lista de 
        dispositivos tales como RAM, ROM, discos de almacenamiento, DVDs, 
        memorias USB y en comunicaciones inalámbricas por medio de antena 
        celular, satélite y otros. Los codigos de Reed-Muller son utilizados
         principalmente en aplicaciones inalámbricas como el $5G$ y en las 
         misiones de la NASA (AMS, 2021): 
        `,

        p3: `
         La misión de la nave espacial Mariner tomó fotografías --sin color-- de
          Marte con éxito en 1965. Las imágenes eran de $200x200$ y a cada píxel
           se le asignaba uno de los $64$ niveles de brillo --seis bits--. Dado
           que los datos se transmitieron a aproximadamente 8 bits por segundo 
           (!), La transmisión de una sola imagen tomó aproximadamente $8$ horas.
            Cuando el Mariner 9 entró en órbita alrededor de Marte en 1972, se 
            estaban obteniendo imágenes mucho mejores. Esto se debió a que la 
            nave espacial usó un código Reed-Muller que tenía $6 bits$ de 
            información y $26 bits$ adicionales para proporcionar corrección de 
            errores -las palabras del código tenían $32 bits$ de longitud-. 
            Aunque la velocidad de transmisión ahora era de unos $16.000$ bits
             por segundo, las imágenes individuales eran más grandes, por lo que
              las cámaras estaban adquiriendo unos $100.000$ bits por segundo.
               Esto significó que las imágenes se almacenaron para su transmisión.
                Cuando Viking aterrizó en Marte en 1976, la tecnología había 
                mejorado, de modo que se estaban obteniendo imágenes en color.
                 El enfoque inicial para hacer esto fue tomar imágenes separadas
                  de la misma ubicación usando filtros de tres colores diferentes.
                   Las imágenes en blanco y negro separadas obtenidas a través de
                    cada filtro se transmitieron y luego se reconstruyó una imagen
                     en color a partir de la información de las tres imágenes en
                      blanco y negro.
    
    La NASA ha utilizado muchos códigos de corrección de errores diferentes. 
    Para las misiones entre 1969 y 1977, la nave espacial Mariner utilizó un 
    código Reed-Muller. El ruido al que estaban sujetas estas naves espaciales 
    estaba bien aproximado por una "curva de campana" -distribución normal-, 
    por lo que los códigos Reed-Muller se adaptaban bien a la situación.
        `,
        p4: `
        La idea de corregir errores mediante códigos ya existía tal como lo había
         probado Claude Shannon. Para poder implementar esta idea prácticamente 
         luego tomaron turno otros científicos de la computación como Richard 
         Hamming -1915-1998- y Marcel J. E. Golay -1902-1989- para poder hacer 
         las construcciones de estos sistemas de códigos.
        `,
        p5: `
          Los tipos de errores en el canal de comunicación pueden ser:
        `,
        p6: `
        Ruido o distorsión eléctrica: Existen muchos factores que alteran la señal
         enviada, incluso el mismo ruido electromagnético que los mismos cables 
         generan -crosstalk o alien crosstalk-. Así también muchos otros factores 
         como ondas de sonido, ruido como electricidad de motores, interruptores 
         de potencia, etc.
        `,
        p7: `
        Errores de ráfaga: Dos o más -muchos o miles- de bits han sido cambiados.
        `,
        p8: `
        Errores de bit aleatorios: Los bits se han reorganizado en otro orden.
        `,
        p9: `
        Cross talk y eco: Como se menciono en el primer elemento de esta lista,
         el crosstalk se produce cuando el cable esta rodeado de otros cables. 
         El eco es parecido al cross talk, pero ocurre en una misma linea de transmisión.
        `,
        p10: `
        Los códigos de Reed-Muller son una familia infinita de códigos, que toman
        su nombre de los dos matemáticos que los propusieron en el año $1954$ al
        mismo tiempo, en trabajos independientes: I. S. Reed -Irving Stoy Reed,
        matemático e ingeniero estadounidense, 1923 - 2012- y D. E. Muller -David 
        Eugene Muller, matemático e informático teórico estadounidense, 1924 - 2008-.
        `,
        p11: `
        Ambos centraron su estudio en los códigos de Reed-Muller binarios. Hoy se
        sabe que el primero en realizar su construcción fue Muller, mientras que su estudio en detalle y la sencilla
        decodificación por la que son tan conocidos e importantes es obra de Reed. Posteriormente, estos fueron
        generalizados a cualquier cuerpo finito en $1968$. Estos estudios están situados dentro en la Teoría de la Información, cuyas
        bases fueron establecidas por Shannon -Claude Elwood Shannon, matemático; ingeniero electrónico y criptógrafo estadounidense, 1916 - 2001- a través de un artículo publicado
        en el Bell System Technical Journal en la década de los años $40$ titulado “A
        Mathematical Theory of Communication”. Hoy en día, la Teoría de la Información es una rama de las matemáticas y de la computación que se ocupa del
        estudio de la información y de todo lo relacionado con ella.
        `,
        p12: `
        Los códigos de Reed-Muller tienen una gran importancia en la historia. Su
        estudio en la década de los años $50$ fue fundamental para que en los años
        posteriores se hiciesen grandes avances en la exploración espacial. Así, desde
        $1969$ hasta $1977$, todas las naves espaciales de la NASA iban equipadas con
        un código de Reed-Muller binario de longitud $32$, dimensión $6$ y distancia
        mínima $16$. Se trataba por tanto de un código lineal de bajo coste debido a
        su pequeña dimensión en comparación a su longitud, y con buenas capacidades de corrección de errores por su elevada distancia mínima.
        `,
        p13: `
        Como se había mencionado en una sección anterior, los códigos de Reed-Muller han sido utilizados en la NASA por sus ventajas de ser códigos lineales, eficientes y fáciles de modelar, esto los hace posibles de implementar a diferencia de códigos no-lineales. Una de las misiones más destacadas que se llevo a cabo con el uso de estos
        códigos fue la de la sonda Mariner 9, que fue la primera que permitió la
        observación fotográfica de la superficie del planeta Marte. La sonda Mariner
        9 fue lanzada hacia su destino el $30$ de mayo de $1971$, llegando a Marte el $13$
        de noviembre del mismo año, convirtiéndose así en la primera nave espacial
        en orbitar un planeta distinto al nuestro. Científicamente, esta misión, que
        constituyó una continuación de las observaciones de Marte adquiridas por las
        sondas Mariner 6 y 7, tenía como objetivo mostrar las primeras fotografías
        de la superficie marciana. En un principio la misión se complicó debido a
        las grandes tormentas de arena que se dieron sobre todo el conjunto de la
        superficie del planeta. Finalmente, en $1972$, cuando por fin amainaron las
        tormentas, se obtuvieron las primeras fotografías claras del planeta que cambiaron completamente la visión que se tenía hasta entonces del planeta rojo.
        La sonda tomó fotografías en blanco y negro de $600 x 600 = 3600$ píxeles,
        donde a cada píxel se le asignó una $6-tupla$ para representar el brillo. De
        esta manera, cada píxel era codificado como una palabra de longitud $32$,
        esto es, se emplearon $26$ bits de redundancia.
        `,
        p14: `
        Los elementos del campo de Galois $gf(p^n)$ son definidos como

        $$GF(p^n)=(0,1,2,...,p-1) \\cup (p, p+1, p+2,...,p+p-1)$$
        $$ \\cup ... \\cup (p^{n-1},p^{n-1} + 1, p^{n-1}+2,...,p^{n-1}+p-1$$
        `,
        p15: `
        Donde $p \\in \\mathbb{P}$ y $n \\in \\mathbb{Z^+}$. El orden del campo está
         dado por $p^n$ mientras que $p$ es llamado la característica del campo.
        `,
        p16: `
        Recordar que las operaciones en $GF(2)$ -$0$s y $1$s- se definen como
         $XOR$ para la suma y $AND$ para el producto. Estas serán las operaciones
          que se computarán por ejemplo, cuando se trabaje con $\\mathbb{F}_2^n$.
        `,
        p17: `
        Sea $\\alpha \\in GF(q^m)$. El polinomio mínimo de $\\alpha$ con
        respecto al subcampo $GF(q)$ es el polinomio mónico  $p(x) \\in GF(q)[x]$
         de grado mínimo tal que $p(\\alpha) = 0$.
        `,
        p18: `
         El polinomio mínimo mónico de un elemento $\\alpha$ con respecto al 
         subcampo $GF(q)$ es único.
        `,
        p19: `
        Suponer que $f(x)$ y $g(x)$ son polinomios mínimos mónicos distintos de 
        $\\alpha \\in GF(q^m)$ con respecto a $GF(q)$. Ya que por hipótesis $f(x) 
        \\leq g(x)$, entonces existe un polinomio $r(x) \\neq \\textbf{0}$ tal que 
        $f(x) = g(x) + r(x)$, por lo que $r(\\alpha) = 0$ y $deg(r(x)) < deg(f(x))$.
         Esto es una contradicción de la hipótisis de que $f(x)$ es un polinomio
          mínimo. Por tanto se ha probado la proposición requerida.
        `,
        p20: `
        Un código lineal C de longitud $n$ y dimensión $s$ sobre $\\mathbb{F_q}$
         es un $F_q$-subespacio vectorial de $\\mathbb{F_q^n}$ de dimensión $s \\leq n$.
        `,
        p21: `
         $$
        d(C)=min_{u,v \\in C \\land u\\neq v}\\{d(u,v)\\}
        $$
        $$
        d(u,v)=\\#\\{i : 1 \\leq i \\leq n \\land u_i \\neq v_i\\}
        $$
        `,
        p22: `
        El peso de una palabra código $\\textbf{x} \\in C$ es:
    
        $$
        wt(\\textbf{x}) = \\# \\{i \\in \\{1,...,n\\} | x_i \\neq 0 \\}.
        $$
        `,
        p23: `
        El código dual $C^\\perp$ de un código lineal $C \\subseteq F_q^n$ de dimensión $s$ se define como:
        $$
        C^\\perp = \\{ \\textbf{x} \\in \\mathbb{F_q^n} | <\\textbf{x}, \\textbf{c}>=0, \\forall \\textbf{c} \\in C
        $$
        `,
        p24: `
        La $\\textbf{matriz de control}$ del código lineal $C$ es la matriz generadora de $C^\\perp$ dada como $H \\in \\mathbb{M}_{(m-s)xn}(\\mathbb{F_q})$ tal que
    
        $$
        C = \\{ \\textbf{x} \\in \\mathbb{F_q^n} | \\textbf{x}H^T = \\textbf{0} \\}
        $$
        `,
      };
    },
  };
</script>

<style scoped>
  vue-mathjax {
    margin-bottom: 56px;
  }
</style>
