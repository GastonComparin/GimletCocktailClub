<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">
      Clase N°3 - Clasificación de los Cócteles y Cerveza
    </h1>
    <hr />
    <div class="d-flex justify-content-center">
      <div
        class="col-md-8"
        style="
          font-size: x-large;
          background-color: #ededed;
          border-radius: 15px;
          padding: 1.5rem;
          border: 3px solid #8dbe3f;
        "
      >
        <p>
          En la tercer clase, te embarcarás en un viaje por las 'Familias de
          Cócteles' y la apasionante historia detrás de la cerveza. Exploraremos
          cómo los cócteles se agrupan en familias según sus características y
          componentes clave, lo que te permitirá comprender mejor las relaciones
          entre diferentes tipos de bebidas y perfeccionar tus habilidades de
          creación
        </p>
        <p>
          Sumérgete en el apasionante mundo de la cerveza mientras exploramos su
          historia, su proceso de producción y los aspectos que la hacen única.
          Aprenderás sobre las diversas variedades de cerveza, sus matices de
          sabor y cómo elegir la cerveza adecuada.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/2"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/4"
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
