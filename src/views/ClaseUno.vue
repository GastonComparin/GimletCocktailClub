<template>
  <div class="ClaseUno">
    <h1 class="mt-4">Clase N°1 - Introducción a la coctelería</h1>
    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-10" style="font-size: x-large">
        <p>
          En nuestra emocionante primera clase, te adentrarás en los orígenes y
          la evolución de la coctelería a lo largo de la historia. Exploraremos
          cómo esta fascinante tradición ha llegado hasta nuestros días,
          brindándonos un entendimiento profundo de su impacto cultural.
        </p>
        <p>
          Dedicaremos tiempo a desentrañar la estructura básica de los cócteles,
          desde sus componentes esenciales hasta las combinaciones de sabores
          que los hacen únicos. También te sumergirás en la práctica de realizar
          una mise en place adecuada, un paso fundamental para la preparación
          eficiente de cocteles de alta calidad.
        </p>
        <p>
          Además, daremos el primer paso en el emocionante mundo de la
          producción de jugos y almíbares, elementos esenciales que contribuyen
          al funcionamiento fluido de cualquier bar. Aprenderás a crear estas
          bases con precisión, allanando el camino para tus futuras creaciones
          de cócteles.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/2"
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
