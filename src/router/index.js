import Vue from 'vue'
import Router from 'vue-router'
import Expression from '@/components/Expression'
import History from '@/components/History'
import Favorites from '@/components/Favorites'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Expression
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    }
  ]
})
