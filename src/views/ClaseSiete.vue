<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°7 - Vodka</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En la séptima clase, nos adentraremos en el mundo del vodka,
          explorando su rica historia, el proceso de producción y las materias
          primas que lo hacen único. Desde sus orígenes hasta su posición actual
          en la coctelería global, descubriremos cómo el vodka se ha convertido
          en una bebida fundamental en la creación de cócteles.
        </p>
        <p>
          Comprenderemos los detalles del proceso de destilación y filtración
          que dan forma al vodka. Aprenderás sobre las materias primas que se
          utilizan, cómo influyen en su sabor y cómo elegir la mejor calidad.
        </p>
        <p>
          También exploraremos el emocionante mundo de los cordiales y super
          jugos y óleos. Descubrirás cómo estos ingredientes versátiles pueden
          elevar tus cócteles a nuevas alturas, añadiendo sabores y matices
          únicos.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/6"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/8"
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
