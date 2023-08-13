<template>
  <div class="containerppal">
    <nav class="navbar navbar-expand-lg" style="background-color: #ededed">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/icons8-cocktail-50.png" alt="" />
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
              <router-link class="nav-link" to="/ubicacion"
                >Ubicacion</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/nosotros"
                >Nosotros</router-link
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.containerppal {
  background-color: #ededed;

  .btn {
    border-color: #8dbe3f;
    background-color: #8dbe3f;
  }
  
  .btn:hover {
    background-color: #719833;
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
  },
};
</script>
