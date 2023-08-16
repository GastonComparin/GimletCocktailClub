import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import programa from "../views/ProgramaView.vue";
import nosotros from "../views/NosotrosView.vue";
import ClaseUno from "../views/ClaseUno.vue";
import ClaseDos from "../views/ClaseDos.vue";
import ClaseTres from "../views/ClaseTres.vue";
import ClaseCuatro from "../views/ClaseCuatro.vue";
import ClaseCinco from "../views/ClaseCinco.vue";
import ClaseSeis from "../views/ClaseSeis.vue";
import ClaseSiete from "../views/ClaseSiete.vue";
import ClaseOcho from "../views/ClaseOcho.vue";
import ClaseNueve from "../views/ClaseNueve.vue";
import ClaseDiez from "../views/ClaseDiez.vue";
import ClaseOnce from "../views/ClaseOnce.vue";
import ClaseDoce from "../views/ClaseDoce.vue";
import ClaseTrece from "../views/ClaseTrece.vue";
import ClaseCatorce from "../views/ClaseCatorce.vue";
import ClaseTecnicas from "../views/ClaseTecnicas.vue";

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
  {
    path: "/clases/7",
    name: "ClaseSiete",
    component: ClaseSiete,
  },
  {
    path: "/clases/8",
    name: "ClaseOcho",
    component: ClaseOcho,
  },
  {
    path: "/clases/9",
    name: "ClaseNueve",
    component: ClaseNueve,
  },
  {
    path: "/clases/10",
    name: "ClaseDiez",
    component: ClaseDiez,
  },
  {
    path: "/clases/11",
    name: "ClaseOnce",
    component: ClaseOnce,
  },
  {
    path: "/clases/12",
    name: "ClaseDoce",
    component: ClaseDoce,
  },
  {
    path: "/clases/13",
    name: "ClaseTrece",
    component: ClaseTrece,
  },
  {
    path: "/clases/14",
    name: "ClaseCatorce",
    component: ClaseCatorce,
  },
  {
    path: "/clases/tecnicas",
    name: "ClaseTecnicas",
    component: ClaseTecnicas,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
