import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from "@/views/Pocetna.vue"
import Student from "@/views/Student.vue"
import Nastavnik from "@/views/Nastavnik.vue"

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/nastavnik',
    name: 'Nastavnik',
    component: Nastavnik
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
