<template>
  <div>
    <h1>{{ clase.nombre }}</h1>

    <div class="d-flex justify-content-center">
      <div
        class="col-md-8"
        style="
          font-size: x-large;
          background-color: white;
          border-radius: 15px;
          padding: 1.5rem;
          border: 3px solid #8dbe3f;
        "
      >
        <p>{{ clase.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["clase"], 
};
</script>
