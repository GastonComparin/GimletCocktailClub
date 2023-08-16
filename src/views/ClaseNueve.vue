<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°9 - Whisky</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En la novena clase, nos sumergiremos en el fascinante universo del
          whisky. Exploraremos su rica historia, los conceptos fundamentales que
          lo rodean y su impacto en la coctelería
        </p>
        <p>
          Veremos los detalles de la clasificación del whisky, desde las
          diferencias entre variedades hasta las características distintivas de
          cada una.
        </p>
        <p>
          Profundizaremos en el proceso de maduración del whisky, desde los
          barriles hasta los tonos de sabor que adquieren durante este proceso.
          Aprenderás cómo la madera y el tiempo influyen en su perfil final.
        </p>
        <p>
          Además, exploraremos el emocionante concepto del acabado del whisky,
          descubriendo cómo los últimos toques en su elaboración pueden marcar
          una diferencia significativa en su sabor y complejidad.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/8"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/10"
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
