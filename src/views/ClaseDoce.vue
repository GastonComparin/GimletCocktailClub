<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°12 - Pisco, Tequila y Mezcal</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En esta clase veremos la historia de algunos destilados muy
          importantes como los son el tequila, el pisco y el mezcal.
          Exploraremos los procesos, la historia y la elaboración que hacen que
          sean verdaderas joyas en el mundo de la coctelería.
        </p>
        <p>
          En el mundo del pisco, descubriendo su rica historia y sus variados
          procesos de producción. Aprenderás cómo las diferentes regiones y
          variedades influyen en su perfil de sabor único.
        </p>
        <p>
          Luego, exploraremos el tequila y el mezcal, dos destilados
          emblemáticos del agave. Desde la historia hasta los procesos de
          elaboración, entenderás cómo estas bebidas se convierten en tesoros de
          la coctelería.
        </p>
        
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/11"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/13"
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
