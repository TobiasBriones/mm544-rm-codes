<template>
  <div>
    <vue-mathjax :formula="p1"></vue-mathjax>
  </div>
</template>

<script>
  export default {
    name: 'Antecedents',
    data() {
      return {
        p1: `
En el momento en el que un transmisor emite un mensaje mediante el medio hacia un receptor, a causa del medio (aire o cable) por el que se transmiten los paquetes el receptor puede recibir y recibirá más de alguna vez mensajes no íntegros distintos a los emitidos originalmente por el transmisor. En esta etapa entra en acción la teoría de códigos para la detección y corrección de errores. Ejemplos de estos errores son por ejemplo cambiar el valor de un bit, de manera que si se transmite la cadena $10011101$, se puede recibir al otro lado un $10011100$ el cual cambio el ultimo bit del mensaje. Podemos detectar que hubo un error porque la \textit{n-tupla} recibida no pertenece a un cierto \textit{código} y corregir el error en caso de ser corregible y de estar suficientemente cerca de su valor original para poder inferir este.
`,
      };
    },
  };
</script>

<style scoped></style>
