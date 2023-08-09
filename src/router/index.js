import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import programa from "../views/ProgramaView.vue";
import nosotros from "../views/NosotrosView.vue";
import ubicacion from "../views/UbicacionView.vue";
import ClaseUno from "../views/ClaseUno.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
