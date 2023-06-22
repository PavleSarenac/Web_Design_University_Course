import { createRouter, createWebHistory } from 'vue-router'
import Kupac from "../views/Kupac.vue"
import Pocetna from "../views/Pocetna.vue"
import Zaposleni from "../views/Zaposleni.vue"

const routes = [
  {
    path: "/",
    name: "Pocetna",
    component: Pocetna
  },
  {
    path: "/zaposleni",
    name: "Zaposleni",
    component: Zaposleni
  },
  {
    path: "/kupac",
    name: "Kupac",
    component: Kupac
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
