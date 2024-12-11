import { createRouter, createWebHistory } from 'vue-router'
import GameList from '../views/GameList.vue'
import GameListNew from '../views/GameListNew.vue'
import GameListPlayed from '../views/GameListPlayed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameList
    },
    {
      path: '/all',
      name: 'all',
      component: GameList
    },
    {
      path: '/new',
      component: GameListNew
     },
    {
      path: '/played',
      component: GameListPlayed
    }
  ]
})

export default router
