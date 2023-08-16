<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°8 - Gin y Ginebra</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En nuestra octava clase, exploraremos el mundo del gin y la ginebra.
          Desde su proceso histórico hasta las innovaciones contemporáneas,
          descubrirás cómo esta bebida clásica ha evolucionado y se ha adaptado
          a la nueva era de la coctelería.
        </p>
        <p>
          Aprenderemos los detalles del proceso de producción y la rica historia
          que rodea al gin y la ginebra. Así como las diferencias entre
          ellos.Conocerás cómo los distintos procesos de destilación y los
          botánicos utilizados influyen en sus perfiles de sabor
          característicos.
        </p>
        <p>
          Exploraremos la emocionante ola de nuevos gins que han revolucionado
          el mercado y cómo han influido en la creación de cócteles
          contemporáneos.
        </p>
        <p>
          La clase también te sumergirá en el emocionante mundo de las cocciones
          en sous vide, una técnica innovadora que puede transformar la
          experiencia de los sabores y aromas en la coctelería.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/7"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/9"
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
