<template>
  <!-- //!Jumbotron -->
  <div class="container my-5">
    <div class="row">
      <div class="col-md-7">
        <img
          src="https://www.liquor.com/thmb/9VTX3zAaYe4cA8CAHO9Cz8s2nrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__01__10072454__gimlet-720x720-recipe-a0d317f2ce7b4818a0fdbd2bbaaaf2c9.jpg"
          alt=""
        />
      </div>
      <div class="col-md-5">
        <h1>Gimlet Cocktail Club</h1>
        <p>
          El curso de coctelería mas completo, dictado por profesionales de la
          industria. Aprenderás desde las bases hasta las tecnicas mas complejas
        </p>
        <button type="button" class="btn btn-primary">Saber mas</button>
      </div>
    </div>
  </div>
  <!-- //!CTA -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="bg-secondary text-white my-5 py-4 card">
          <div class="card-body">
            Conviértete en un profesional y entra en nuestra bolsa de trabajo.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //!CARDS -->
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://estaticos-cdn.prensaiberica.es/clip/aaa0061b-1908-4dc2-a5fb-c59dd7387923_16-9-discover-aspect-ratio_default_0.jpg"
            width="350"
            height="400"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Programa</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <router-link
              to="/clases"
              class="btn btn-primary"
              @click="scrollToTop"
              >Ver Programa</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://inmendoza.com/wp-content/uploads/2023/06/charco-bar-01.jpg"
            width="350"
            height="400"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Ubicación</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <router-link
              to="/ubicacion"
              class="btn btn-primary"
              @click="scrollToTop"
              >Como llegar</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://i0.wp.com/www.escuelacocteleria.es/wp-content/uploads/2023/04/¿que-es-la-cocteleria-molecular-scaled.jpeg?fit=2560%2C1709&ssl=1"
            width="350"
            height="400"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Sobre nosotros</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <router-link
              to="/nosotros"
              class="btn btn-primary"
              @click="scrollToTop"
              >Conócenos
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //!FOOTER -->
  <footer class="footer mt-5 py-3 bg-dark text-white">
    <div class="container">
      <span>Contáctanos</span>
      <hr />
      <span>Seba Ortega 2613370889 - seba@gmail.com</span>
      <p></p>
      <span>JP Simic 2613370889 - jp@gmail.com</span>
    </div>
  </footer>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

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

<style scoped></style>
