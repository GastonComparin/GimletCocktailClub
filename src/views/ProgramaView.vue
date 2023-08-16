<template>
  <div class="programa mt-3">
    <h1 style="font-weight: 900">Nuestras Clases</h1>
    <p>
      Aquí encontrarás toda la información sobre los temas que abordaremos en
      las siguientes clases
    </p>

    <div class="row">
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/1/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Introduccion a la coctelería</h5>

              <router-link
                to="/clases/1"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 1</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/20/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Manejo de Herramientas</h5>

              <router-link
                to="/clases/2"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 2</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/100/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Clasificación de los Cócteles y Cerveza
              </h5>

              <router-link
                to="/clases/3"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 3
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/251/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vinos y Espumantes</h5>

              <router-link
                to="/clases/4"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 4</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/412/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Destilación</h5>

              <router-link
                to="/clases/5"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 5</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/18/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vermouth y Aperitivos</h5>

              <router-link
                to="/clases/6"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 6
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/91/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vodka</h5>

              <router-link
                to="/clases/7"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 7</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/51/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Gin y Ginebra</h5>

              <router-link
                to="/clases/8"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 8</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/16/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Whisky</h5>

              <router-link
                to="/clases/9"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 9
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/611/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Producciones y costos</h5>

              <router-link
                to="/clases/10"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 10</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/581/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Ron</h5>

              <router-link
                to="/clases/11"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 11</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/185/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pisco, Tequila y Mezcal</h5>

              <router-link
                to="/clases/12"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 14</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/125/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Calidad y Estandarización</h5>

              <router-link
                to="/clases/13"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 12
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/211/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Exámen Practico</h5>

              <router-link
                to="/clases/14"
                class="btn btn-primary"
                @click="scrollToTop"
                >Clase 13</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card card-hover">
          <div class="card">
            <img
              src="https://picsum.photos/id/156/350/400"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Tecnicas</h5>

              <router-link
                to="/clases/tecnicas"
                class="btn btn-primary"
                @click="scrollToTop"
                >Tecnicas
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

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
