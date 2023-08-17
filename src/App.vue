<template>
  <div class="containerppal">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logocopa.png" alt="" width="70" />
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

            <li class="nav-item">
              <router-link class="nav-link" to="/nosotros"
                >Conócenos</router-link
              >
            </li>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
  border-bottom: 1px #4f9e1d solid;
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
    border-color: #4f9e1d;
    background-color: #4f9e1d;
    font-weight: 600;
  }

  .btn:hover {
    background-color: #03490c;
    border-color: #03490c;
  }
  .card-hover {
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  }

  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.05);
  }
  .card-title {
    font-weight: 600;
  }
  .tituloClases {
    font-weight: 900;
  }
  .contenedorclase {
    font-weight: 400;
    background-color: white;
    border-radius: 15px;
    padding: 1.5rem;
    border: 3px solid #4f9e1d;
    
  }
  .contenedorinfo {
    font-weight: 400;
    background-color: white;
    border-radius: 15px;
    padding: 1.5rem;
    border: 3px solid #4f9e1d;
    
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
