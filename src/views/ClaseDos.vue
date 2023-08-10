<template>
  <div class="ClaseDos">
    <h1 class="mt-4">Clase N°2 - Elaboraciones y Producciones</h1>
    <h5>
      Aca se podria colocar un poco de informacion sobre lo que se va a ver en
      la clase
    </h5>
    <hr />
    <div class="d-flex justify-content-center">
      <p class="col-md-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi dolorum
        eos architecto corporis praesentium, id natus itaque, ut tempore quo
        impedit! Esse neque ad ipsum magni repellat vitae iste? Nesciunt
        architecto exercitationem repellat rem excepturi aliquid minus esse,
        facere hic soluta consequuntur eligendi porro odit sit natus deserunt, a
        quisquam aspernatur? Omnis nam quisquam fugit dignissimos consequuntur
        exercitationem culpa enim rem accusantium dolor sapiente soluta sed
        nobis maxime, possimus deserunt id! Numquam libero ipsum recusandae
        deleniti iste eius, totam modi. Commodi enim rerum numquam voluptatibus.
        Enim adipisci eius, labore ducimus asperiores ipsam corrupti dolorum
        doloremque, quis recusandae quibusdam cum! A.
     
      </p>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-around">
          <router-link to="/clases/1" class="btn btn-primary btn-md mt-3"
            >Clase anterior</router-link
          >
          <router-link to="/clases" class="btn btn-primary btn-md mt-3"
            >Ir al inicio</router-link
          >
          <router-link to="/clases/3" class="btn btn-primary btn-md mt-3"
            >Siguiente clase</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateX(-100%);
}
</style>
