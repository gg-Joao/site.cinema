import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nascimento from '../views/Nascimento.vue'
import Ouro from '../views/Ouro.vue'
import Moderno from '../views/Moderno.vue'

const rotas = [
  { path: '/', component: Inicio },
  { path: '/nascimento', component: Nascimento },
  { path: '/ouro', component: Ouro },
  { path: '/moderno', component: Moderno }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rotas
})
