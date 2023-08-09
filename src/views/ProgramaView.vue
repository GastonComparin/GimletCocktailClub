<template>
  <div class="programa">
    <h1>Nuestras Clases</h1>
    <p>
      Aquí encontrarás toda la información sobre los temas que abordaremos en
      las siguientes clases
    </p>
    <h5>
      Aca tenemos botones en las tarjetas para ir a ver un detalle de las clases
    </h5>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-4">
          <div class="card">
            <img
              src="https://estaticos-cdn.prensaiberica.es/clip/aaa0061b-1908-4dc2-a5fb-c59dd7387923_16-9-discover-aspect-ratio_default_0.jpg"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Introduccion a la coctelería</h5>
              <p class="card-text">
                En esta primera clase empezaremos a introducirnos en la
                cocteleria
              </p>
              <router-link to="/clases/1" class="btn btn-primary"
                >Clase 1</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card">
            <img
              src="https://inmendoza.com/wp-content/uploads/2023/06/charco-bar-01.jpg"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Elaboraciones y producciones</h5>
              <p class="card-text">
                En esta clase vamos a comenzar a desarrollar producciones para mejorar nuestros cócteles
              </p>
              <router-link to="/clases/2" class="btn btn-primary"
                >Clase 2</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card">
            <img
              src="https://i0.wp.com/www.escuelacocteleria.es/wp-content/uploads/2023/04/¿que-es-la-cocteleria-molecular-scaled.jpeg?fit=2560%2C1709&ssl=1"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Fisionomía de los cocteles</h5>
              <p class="card-text">
                En esta clase vamos a aprender la composición basica de los cocteles, estructuras y formas
              </p>
              <router-link to="/clases/3" class="btn btn-primary"
                >Clase 3
              </router-link>
            </div>
          </div>
        </div>
        <h5 class="mt-4">
          Esta es otra forma de mostrar las clases, sin colocar botones para ver
          detalles
        </h5>
        <div class="col-md-4 mt-4">
          <div class="card">
            <img
              src="https://i0.wp.com/www.escuelacocteleria.es/wp-content/uploads/2023/04/¿que-es-la-cocteleria-molecular-scaled.jpeg?fit=2560%2C1709&ssl=1"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vinos y Espumantes</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- <router-link to="/clases" class="btn btn-primary"
                >Clase 4
              </router-link> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div class="card">
            <img
              src="https://i0.wp.com/www.escuelacocteleria.es/wp-content/uploads/2023/04/¿que-es-la-cocteleria-molecular-scaled.jpeg?fit=2560%2C1709&ssl=1"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Destilados</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- <router-link to="/clases" class="btn btn-primary"
                >Clase 5
              </router-link> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 mb-5">
          <div class="card">
            <img
              src="https://i0.wp.com/www.escuelacocteleria.es/wp-content/uploads/2023/04/¿que-es-la-cocteleria-molecular-scaled.jpeg?fit=2560%2C1709&ssl=1"
              width="350"
              height="400"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Ginebras y Gin</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <!-- <router-link to="/clases" class="btn btn-primary"
                >Clase 6
              </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
