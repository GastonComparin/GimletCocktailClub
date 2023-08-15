<template>
  <div class="containerppal">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/Gimlet-logo-removebg-preview(2).png" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/clases">Programa</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/" @click="scrollToUbi"
                >Ubicacion</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/nosotros"
                >Conócenos</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/" @click="scrollToFAQ"
                >Preguntas frecuentes</router-link
              >
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <router-view> </router-view>

    <footer class="footer mt-5 py-3 bg-dark text-white">
      <div class="container">
        <span>Contáctanos</span>
        <hr />
        <span>Sebastian Ortega 2612420467 ||</span>
        <span> Juan Pablo Simic 2615139495</span>
        <br />
        gimletcocktailclub@gmail.com
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
  border-bottom: 1px #8dbe3f solid;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.containerppal {
  background-image: url(./assets/BG-IMG-BW.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  .btn {
    border-color: #8dbe3f;
    background-color: #8dbe3f;
  }

  .btn:hover {
    background-color: #719833;
  }
  .card-hover {
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  }

  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.05);
  }
  p {
    font-weight: 500;
    color: red;
  }
 
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
    scrollToUbi() {
      const ubi = document.querySelector("#ubi");
      if (ubi) {
        ubi.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    scrollToFAQ() {
      const FAQ = document.querySelector("#FAQ");
      if (FAQ) {
        FAQ.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>
