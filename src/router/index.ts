import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

//Rutas que uso en la app, al tratarse de solo 2 solo hay estas rutas
///:catchAll(.*)"  : Detecta cualquier ruta que no este establecida y devuelve la vista de un componente 404VistaNotFound.

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
