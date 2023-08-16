<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Clase N°13 - Calidad y Estandarización</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        <p>
          En nuestra decimotercera clase, nos adentraremos en el crucial mundo
          de la calidad y estandarización en la coctelería. Exploraremos cómo
          establecer estándares y seguir una metodología sólida puede elevar tus
          creaciones y garantizar una experiencia excepcional para tus clientes.
        </p>
        <p>
          Sumérgete en la importancia de los estándares en la coctelería, desde
          la selección de ingredientes hasta la preparación y presentación.
          Aprenderás cómo la consistencia y la precisión pueden marcar la
          diferencia en la calidad de tus cócteles.
        </p>
        <p>
          Exploraremos metodologías efectivas para mantener la calidad y la
          uniformidad en cada cóctel que prepares. Comprenderás cómo crear
          sistemas que permitan a tu equipo trabajar de manera eficiente y
          brindar una experiencia coherente.
        </p>
        <p>
          Además, exploraremos la importancia de la ambientación en un bar y
          cómo crear un entorno que refleje la esencia de tu negocio. Aprenderás
          a considerar elementos visuales y auditivos para brindar una
          experiencia inmersiva.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/12"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/14"
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
