import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Perdidos from '../views/Perdidos.vue'
import CriarAnuncio from '../views/CriarAnuncio.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/perdidos',
    name: 'Perdidos',
    component: Perdidos
    
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    
  },

  {
    path: '/criaranuncio',
    name: 'CriarAnuncio',
    component: CriarAnuncio
    
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:  () => import('../views/Register.vue')
  },
  {
    path: '/achados',
    name: 'Achados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Achados.vue')
  },
  {
    path: '/anuncios',
    name: 'Anuncios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CriarAnuncio.vue')
  },
  {
    path: '/anuncios/:anuncioId',
    name: 'AnuncioDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AnuncioDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
