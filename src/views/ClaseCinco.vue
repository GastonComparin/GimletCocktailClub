<template>
  <div class="ClaseTres">
    <h1 class="mt-4">Clase N°5 - Destilación</h1>

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
          En nuestra quinta clase, daremos un paso hacia la maestría en
          destilación. Exploraremos los fascinantes procesos detrás de la
          creación de bebidas destiladas, desde los métodos hasta los tipos de
          alambiques utilizados. Te adentrarás en el mundo de los 'Master
          Distillers' y entenderás su papel fundamental en la creación de
          bebidas excepcionales.
        </p>
        <p>
          Sumérgete en los detalles de la destilación mientras exploramos cómo
          se lleva a cabo y cómo diferentes alambiques influyen en los sabores y
          aromas de las bebidas. Aprenderás sobre la diversidad de bebidas
          destiladas y cómo los destiladores expertos perfeccionan cada gota.
        </p>
        <p>
          Nuestra clase incluirá una emocionante cata de bebidas destiladas,
          permitiéndote experimentar de primera mano la variedad de perfiles de
          sabor y apreciar la complejidad de cada destilado. Profundizaremos en
          el mundo del coñac y el brandy, explorando su rica historia y
          características únicas.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/4"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/6"
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
