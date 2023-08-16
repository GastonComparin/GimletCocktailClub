<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°14 - Examen Práctico</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En nuestra última clase, llegamos al punto final de este cursado en el
          Gimlet Cocktail Club. Es momento de poner a prueba tus conocimientos y
          habilidades en el examen final, donde demostrarás todo lo que has
          aprendido a lo largo de este emocionante curso.
        </p>
        <p>
          LLevaremos a cabo la Presentación de tu Cocktail
          Final. Después de haber perfeccionado tus habilidades a lo largo del
          curso, tendrás la oportunidad de presentar tu propio cóctel
          único.
        </p>
        <p>
          También veremos el proceso de 'Fat Washing', una técnica innovadora
          que infunde sabores a través de grasas. Exploraremos cómo esta técnica
          puede transformar tus cócteles y abrir nuevas posibilidades creativas.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/13"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/tecnicas"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Ver tecnicas</router-link
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
