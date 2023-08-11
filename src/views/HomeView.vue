<template>
  <!-- !Jumbotron -->
  <div class="container my-5">
    <div class="row">
      <div class="col-12 col-sm-6 order-sm-2">
        <h1 class="titulo">Gimlet Cocktail Club</h1>
        <br />
        <p>
          Bienvenido al Gimlet Cocktail Club Descubre el arte de la coctelería
          de la mano de los verdaderos expertos en la industria. Nuestro curso
          de coctelería es la experiencia más completa que encontrarás, diseñada
          para llevar tus habilidades al siguiente nivel.
        </p>
        <p>
          Te sumergirás en un emocionante viaje desde las bases fundamentales
          hasta las técnicas más complejas, guiado por profesionales apasionados
          y experimentados. No importa si eres un principiante o un entusiasta
          experimentado, nuestro curso se adapta a tu nivel y te lleva a dominar
          el arte de crear cócteles únicos y exquisitos.
        </p>
        <p>
          ¡Estás a un paso de convertirte en un gran bartender! ¿Estás listo
          para comenzar?
        </p>
        <p>
          Este curso consta de 14 clases de 3 horas en las que abarcaremos todo
          el material expuesto en el programa
        </p>
        <button
          type="button"
          class="btn btn-primary mt-4 mb-2"
          @click="scrollToInfo"
        >
          Saber mas
        </button>
      </div>
      <div class="col-12 col-sm-6 order-sm-1">
        <img
          src="https://www.liquor.com/thmb/9VTX3zAaYe4cA8CAHO9Cz8s2nrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__01__10072454__gimlet-720x720-recipe-a0d317f2ce7b4818a0fdbd2bbaaaf2c9.jpg"
          alt=""
          class="img-fluid d-none d-sm-block"
          id="Image"
          style="border-radius: 10px;"
        />
      </div>
    </div>
  </div>
  <!-- !CTA -->
  
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="bg-secondary text-white mb-5 py-4 card">
            <div class="card-body">
              ¿Listo para dar un paso hacia el éxito? Únete a nosotros y
              transforma tu pasión en una carrera profesional. <br />Conviértete
              en un experto en coctelería y accede a emocionantes oportunidades
              en nuestra exclusiva bolsa de trabajo.
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <!-- !CARDS -->
  <div class="container" id="Cards">
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
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
        <div class="card mb-4">
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
  <!-- !FAQ -->
  <hr />
  <h3 class="mb-4">Preguntas Frecuentes</h3>
  <div class="d-flex justify-content-center">
    <div class="accordion col-10" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            ¿Que nos diferencia de otros cursos?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>
              En Gimlet Cocktail Club, nuestra enseñanza se basa en la
              experiencia práctica.</strong
            >
            A diferencia de otros cursos, impartimos nuestras clases en un
            auténtico bar funcional. Esto te brinda la oportunidad de aplicar
            tus conocimientos teóricos y prácticos en un entorno real desde el
            primer día. Al graduarte, estarás preparado para enfrentar desafíos
            reales con una sólida base de conocimientos y experiencia en el
            funcionamiento de un bar..
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            ¿Qué sucede despues de graduarte?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Aquellos estudiantes que sobresalgan durante el curso tendrán la
            emocionante oportunidad de
            <strong>unirse a nuestro selecto grupo de trabajo.</strong> Este
            equipo colabora en la coordinación de eventos para bares y barras
            móviles, brindando a nuestros destacados alumnos la experiencia de
            participar en proyectos reales y enriquecedores para la industria.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Otra pregunta..
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">alguna respuesta</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      showSection: false,
    };
  },
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
    scrollToInfo() {
      const cards = document.querySelector("#Cards");
      if (cards) {
        cards.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>

<style scoped>
.titulo {
  font-weight: 900;
}
#image {
  border-radius: 10%;
}
</style>
