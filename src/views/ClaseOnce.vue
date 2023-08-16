<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°11 - Ron</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          Para esta clase nos adentraremos en el emocionante mundo del ron.
          Exploraremos su rica historia, las diversas clasificaciones que
          existen y los métodos que dan forma a esta apreciada bebida.
        </p>
        <p>
          Descubriremos las distintas clasificaciones de ron, desde blancos y
          dorados hasta añejos y premium, lo que te permitirá apreciar la amplia
          gama de posibilidades.
        </p>
        <p>
          Exploraremos los métodos de producción del ron, desde la fermentación
          hasta la destilación y el añejamiento, para entender cómo se crean sus
          sabores únicos.
        </p>
        <p>
          Además, te sumergirás en el emocionante mundo de la coctelería Tiki,
          un estilo vibrante y colorido. Aprenderás a crear cócteles Tiki que
          capturan la esencia tropical y la diversión de este estilo único.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/10"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/12"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Siguiente clase</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    },
  },
};
</script>
