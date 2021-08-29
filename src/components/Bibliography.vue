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
      <strong>
      Bibliografía
      </strong>
    </p>

    <ul>
      <li>
        Abbe, E., Shpilka, A., & Ye, M. (2020, June 10). Reed-Muller Codes: Theory and Algorithms.
        Arxiv.Org.
        <a href="https://arxiv.org/pdf/2002.03317.pdf">
          https://arxiv.org/pdf/2002.03317.pdf
        </a>
      </li>

      <li>
        AMS American Mathematical Society. (n.d.-a). Digital Revolution (Part III) - Error Correction
        Codes. AMS. Retrieved April 6, 2021,
        from
        <a href="https://www.ams.org/publicoutreach/feature-column/fcarc-errors6">
          https://www.ams.org/publicoutreach/feature-column/fcarc-errors6
        </a>
      </li>

      <li>
        Juan Benvenuto, C. (2012, May 31). Galois Field in Cryptography.
        Sites.Math.Washington.Edu.
        <a href="https://sites.math.washington.edu/~morrow/336_12/papers/juan.pdf">
          https://sites.math.washington.edu/~morrow/336_12/papers/juan.pdf
        </a>
      </li>

      <li>
        Arriba De La Hera, A. (2016, June 20). Códigos de Reed-Muller.
        Addi.Ehu.Es.
        <a href="https://addi.ehu.es/bitstream/handle/10810/20121/TFG_DeArribaDeLaHeraAndoni.pdf;jsessionid=B1A0849B5D5BE3CAF3F3DBB4E2013A49?sequence=2">
          https://addi.ehu.es/bitstream/handle/10810/20121/TFG_DeArribaDeLaHeraAndoni.pdf;jsessionid=B1A0849B5D5BE3CAF3F3DBB4E2013A49?sequence=2
        </a>
      </li>

      <li>
        Xambó-Descamps, S. (n.d.). ICT12. Web.Mat.Upc.Edu. Retrieved June 4, 2021,
        from
        <a href="https://web.mat.upc.edu/sebastia.xambo/ICT/ICT12-06-LinearCodes-ControlMatrix.pdf">
          https://web.mat.upc.edu/sebastia.xambo/ICT/ICT12-06-LinearCodes-ControlMatrix.pdf
        </a>
      </li>

      <li>
        Pc, A., Rajendra Gad, V., & S Gad, R. (2019, November). Polynomials in Error Detection and
        Correction in Data Communication System.
        Www.Researchgate.Net.
        <a href="https://www.researchgate.net/publication/337689159_Polynomials_in_Error_Detection_and_Correction_in_Data_Communication_System">
          https://www.researchgate.net/publication/337689159_Polynomials_in_Error_Detection_and_Correction_in_Data_Communication_System
        </a>
      </li>

      <li>
        Cherowitzo, B. (n.d.). Reed-Muller Codes. Www-Math.Ucdenver.Edu. Retrieved April 6, 2021,
        from
        <a href="http://www-math.ucdenver.edu/~wcherowi/courses/m7823/reedmuller.pdf">
          http://www-math.ucdenver.edu/~wcherowi/courses/m7823/reedmuller.pdf
        </a>
      </li>

      <li>
        J. (2017). GitHub - jihoonseo/reed-muller. GitHub.
        <a href="https://github.com/jihoonseo/reed-muller">
          https://github.com/jihoonseo/reed-muller
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Bibliography',
  });
</script>

<style scoped>
  li {
    margin: 16px 0;
  }

  a {
    overflow-wrap: break-word;
  }
</style>
