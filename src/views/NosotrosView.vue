<template>
  <div class="nosotros">
    <div class="col-md-10 mx-auto mt-3">
      <h1 style="font-weight: 900">Bienvenidos al Gimlet Cocktail Club</h1>
      <br />
      <div
        style="
          font-size: x-large;
          background-color: #ededed;
          border-radius: 15px;
          padding: 1.5rem;
          border: 3px solid #8dbe3f;
        "
      >
        <p>
          En el Gimlet Cocktail Club, somos unos apasionados bartenders
          dedicados a compartir nuestro amor y conocimiento por el arte de la
          coctelería. Nuestra misión es llevar a personas de todas las
          habilidades y niveles de experiencia en un emocionante viaje a través
          del mundo de los cócteles.
        </p>

        <p>
          Con una combinación única de creatividad, experiencia y dedicación,
          nuestro equipo de expertos bartenders está comprometido en brindar
          enseñanza de la más alta calidad. Desde los fundamentos básicos hasta
          las técnicas más avanzadas, estamos aquí para ayudarte a desarrollar
          tus habilidades y descubrir el artista de la coctelería que llevas
          dentro.
        </p>

        <p><span class="highlight">¿Qué nos hace especiales?</span></p>
        <ul>
          <li>
            <strong>Enfoque Educativo:</strong> Creemos en el poder de la
            educación. Nuestros cursos están diseñados cuidadosamente para ser
            accesibles y comprensibles para todos, sin importar tu nivel de
            experiencia previa. Aprenderás los conceptos clave, las técnicas
            fundamentales y los secretos detrás de cada cóctel impresionante que
            creemos.
          </li>
          <li>
            <strong>Experiencia Práctica:</strong> Sabemos que la práctica hace
            al maestro. Es por eso que nuestras clases no solo se basan en
            teoría, sino que te brindamos la oportunidad de poner en práctica lo
            que aprendes. Con sesiones interactivas y prácticas, estarás
            agitando, mezclando y sirviendo cócteles como un profesional en poco
            tiempo.
          </li>
          <li>
            <strong>Comunidad Vibrante:</strong> Al unirte al Gimlet Cocktail
            Club, te conviertes en parte de una comunidad apasionada por la
            coctelería. Comparte experiencias, intercambia ideas y crea
            conexiones duraderas con otros entusiastas de los cócteles. Nuestra
            comunidad está aquí para apoyarte en cada paso de tu viaje.
          </li>
        </ul>

        <p>
          Desde el clásico Gimlet hasta las creaciones más innovadoras, en el
          Gimlet Cocktail Club estamos comprometidos en nutrir tu pasión por la
          coctelería y guiarte hacia la excelencia en cada vaso que prepares.
          Únete a nosotros y descubre el emocionante mundo de la coctelería como
          nunca antes lo habías imaginado.
        </p>

        <p><em>¡Salud y cócteles extraordinarios!</em></p>
        <p>Gimlet Cocktail Club</p>
      </div>
    </div>
  </div>

  <hr />
  <h5>Conocé al equipo</h5>
  <br />

  <div class="d-flex justify-content-center">
    <div class="row">
      <div class="col-md-4">
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Sebastian Ortega</h5>
            <p class="card-text">Head Bartender Charco</p>
          </div>
          <img
            src="https://picsum.photos/id/14/350/400"
            class="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Juan Pablo Simic</h5>
            <p class="card-text">Head Bartender Charco</p>
          </div>
          <img
            src="https://picsum.photos/id/112/350/400"
            class="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">Alejandro Oldra</h5>
            <p class="card-text">Community Manager</p>
          </div>
          <img
            src="https://picsum.photos/id/158/350/400"
            class="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <div style="display: flex; justify-content: space-around">
    <div class="card card-hover" style="width: 18rem">
      <img
        src="https://picsum.photos/id/147/350/400"
        class="card-img-top"
        alt="..."
        height="450"
      />
      <div class="card-body">
        <p class="card-text">Sebastian Ortega</p>
        Head Bartender Charco
      </div>
    </div>
    <div class="card card-hover" style="width: 18rem">
      <img
        src="https://picsum.photos/id/183/350/400"
        class="card-img-top"
        alt="..."
        height="450"
      />
      <div class="card-body">
        <p class="card-text">Juan Pablo Simic</p>
        Head Bartender Charco
      </div>
    </div>
    <div class="card card-hover" style="width: 18rem">
      <img
        src="https://picsum.photos/id/18/350/400"
        class="card-img-top"
        alt="..."
        height="450"
      />
      <div class="card-body">
        <p class="card-text">Alejandro Oldra</p>
        Community Manager
      </div>
    </div>
  </div>
  <hr /> -->
  <!-- !Por el momento la galeria de fotos no se va a mostrar -->
  <div class="d-none">
    <hr />

    <div id="carousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/id/237/700/500"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/238/700/500"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/id/239/700/500"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style>
#carousel {
  max-width: 700px;
  margin: 0 auto;
}

.carousel-inner {
  max-height: 500px;
}

.carousel-item img {
  max-height: 500px;
}
</style>
