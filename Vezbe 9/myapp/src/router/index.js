import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDetails from "../views/BookDetails.vue"
import Admin from "../views/Admin.vue"
import User from "../views/User.vue"

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/bookDetails/:id",
    name: "BookDetails",
    component: BookDetails
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/user",
    name: "User",
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
