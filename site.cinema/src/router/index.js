import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nascimento from '../views/Nascimento.vue'
import Ouro from '../views/Ouro.vue'
import Moderno from '../views/Moderno.vue'
import Curiosidades from '../views/Curiosidades.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Inicio },
    { path: '/nascimento', component: Nascimento },
    { path: '/ouro', component: Ouro },
    { path: '/moderno', component: Moderno },
    { path: '/curiosidades', component: Curiosidades }
  ]
})
