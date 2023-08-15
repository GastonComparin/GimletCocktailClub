<template>
  <div class="ClaseDos">
    <h1 class="mt-4">Clase N°2 - Manejo de Herramientas</h1>

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
          En nuestra segunda clase, daremos un paso fundamental al adentrarnos
          en el mundo de las herramientas del bar. Descubrirás una guía completa
          que abarca desde los conceptos básicos hasta los detalles más
          avanzados sobre cada utensilio esencial. Este 'ABC de las
          Herramientas' te proporcionará la base sólida que necesitas para
          trabajar con confianza en cualquier entorno.
        </p>
        <p>
          Además, profundizaremos aún más en la técnica de mise en place,
          asegurándonos de que comprendas su importancia y la apliques de manera
          experta. Esta preparación meticulosa será clave en la creación de
          cocteles excepcionales y en la agilidad del servicio.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/1"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/3"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Siguiente clase</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateX(-100%);
}
</style>
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
