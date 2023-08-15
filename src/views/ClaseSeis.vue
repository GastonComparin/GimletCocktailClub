<template>
  <div class="ClaseTres">
    <h1 class="mt-4">Clase N°6 - Vermouth y Aperitivos</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div
        class="col-md-8" id="texto-clases"
        style="
          font-size: x-large;
          background-color: #ededed;
          border-radius: 15px;
          padding: 1.5rem;
          border: 3px solid #8dbe3f;
        "
      >
        <p>
          En nuestra emocionante sexta clase, te adentrarás en el fascinante
          mundo de los vermuts y aperitivos. Exploraremos el universo de sabores
          de estas bebidas aromáticas y cómo se han convertido en elementos
          esenciales en la coctelería moderna.
        </p>
        <p>
          Sumérgete en la comprensión del ABV (Alcohol por Volumen) y ABA
          (Alcohol por Peso), dos conceptos fundamentales en la coctelería que
          influyen en la intensidad de las bebidas. Aprenderás a medir y ajustar
          con precisión estos valores para lograr la consistencia y calidad
          adecuadas en tus creaciones.
        </p>
        <p>
          La clase también profundizará en la elaboración de tinturas y bitters,
          elementos clave para añadir complejidad y profundidad a tus cócteles.
          Aprenderás cómo crear estas infusiones aromáticas y cómo incorporarlas
          para realzar tus creaciones.
        </p>
        <p>
          Además, te sumergirás en el mundo de las sodas artesanales,
          descubriendo cómo crear estas refrescantes mezclas desde cero.
          Aprenderás cómo equilibrar los sabores y las burbujas para lograr una
          experiencia de bebida única.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/5"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases"
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
