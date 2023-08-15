<template>
  <div class="ClaseTres">
    <h1 class="mt-4">Clase N°4 - Vinos y Espumantes</h1>

    <hr />
    <div class="d-flex justify-content-center">
      <div
        class="col-md-10"
        style="
          font-size: x-large;
          background-color: #ededed;
          border-radius: 15px;
        "
      >
        <p>
          Para la cuarta clase, te adentrarás en el apasionante mundo de los
          vinos y espumantes. Exploraremos desde la elaboración de estas
          exquisitas bebidas hasta los detalles de los varietales y las
          denominaciones de origen controlado (DOC) que influyen en su sabor y
          calidad.
        </p>
        <p>
          Sumérgete en el proceso de elaboración de vinos y espumantes, desde la
          cosecha hasta el envejecimiento, comprendiendo cómo cada etapa
          contribuye a su perfil de sabor único. Aprenderás sobre varietales
          específicos, descubriendo sus características distintivas y cómo
          elegir el vino adecuado para diferentes propósitos.
        </p>
        <p>
          Profundizaremos en el concepto de añejamiento y su influencia en la
          evolución del vino, permitiéndote comprender cómo el tiempo puede
          transformar sus sabores y aromas.
        </p>
        <p>
          Además, exploraremos cómo los espumantes añaden una dimensión especial
          a la coctelería. Te adentrarás en la diversidad de espumantes y
          aprenderás a seleccionarlos para crear cócteles con burbujas
          sorprendentes.
        </p>
        <p>
          La cuarta clase te brindará una inmersión completa en el mundo de los
          vinos y espumantes, equipándote con conocimientos esenciales para
          enriquecer tus creaciones de cocteles y apreciar la diversidad de
          sabores en cada copa.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link
            to="/clases/3"
            class="btn btn-primary btn-md mt-3"
            @click="scrollToTop"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link
            to="/clases/5"
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
