import Vue from 'vue'
import Router from 'vue-router'
import Idea from '@/components/Idea'
import History from '@/components/History'
import MyIdeasList from '@/components/MyIdeasList'
import MyIdeasForm from '@/components/MyIdeasForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Idea
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/my-ideas',
      name: 'myIdeas',
      component: MyIdeasList
    },
    {
      path: '/my-ideas/edit/:index',
      name: 'myIdeasForm',
      component: MyIdeasForm
    }
  ]
})
