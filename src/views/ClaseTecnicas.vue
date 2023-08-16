<template>
  <div class="ClaseTres">
    <h1 class="tituloClases mt-4">Tecnicas</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div class="col-md-8 contenedorclase">
        A medida que vayamos conociendo nuevas tecnicas las iremos agregando en
        esta sección.
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
