<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°10 - Producciones y Costos</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En nuestra décima clase, estudiaremos aspectos fundamentales de
          producción y costos en el mundo de la coctelería. Exploraremos la
          importancia de entender los costos y la rentabilidad en la creación de
          cócteles, proporcionándote herramientas para tomar decisiones
          informadas y maximizar tu éxito.
        </p>
        <p>
          Descubriremos los 'Shrubs', mezclas agridulces de frutas, vinagre y
          azúcar que añaden una dimensión única a tus creaciones. Aprenderás
          cómo crear y aplicar estos ingredientes en tus cócteles para realzar
          su sabor y equilibrio.
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
            to="/clases/9"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/11"
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
