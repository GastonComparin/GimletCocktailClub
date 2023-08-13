import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import programa from "../views/ProgramaView.vue";
import nosotros from "../views/NosotrosView.vue";
import ubicacion from "../views/UbicacionView.vue";
import ClaseUno from "../views/ClaseUno.vue";
import ClaseDos from "../views/ClaseDos.vue";
import ClaseTres from "../views/ClaseTres.vue";
import ClaseCuatro from "../views/ClaseCuatro.vue";
import ClaseCinco from "../views/ClaseCinco.vue";
import ClaseSeis from "../views/ClaseSeis.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/clases",
    name: "programa",
    component: programa,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: nosotros,
  },
  {
    path: "/ubicacion",
    name: "ubicacion",
    component: ubicacion,
  },
  {
    path: "/clases/1",
    name: "ClaseUno",
    component: ClaseUno,
  },
  {
    path: "/clases/2",
    name: "ClaseDos",
    component: ClaseDos,
  },
  {
    path: "/clases/3",
    name: "ClaseTres",
    component: ClaseTres,
  },
  {
    path: "/clases/4",
    name: "ClaseCuatro",
    component: ClaseCuatro,
  },
  {
    path: "/clases/5",
    name: "ClaseCinco",
    component: ClaseCinco,
  },
  {
    path: "/clases/6",
    name: "ClaseSeis",
    component: ClaseSeis,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
