<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
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
      <span>Seba Ortega 2613370889 - seba@gmail.com</span>
      <p></p>
      <span>JP Simic 2613370889 - jp@gmail.com</span>
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
