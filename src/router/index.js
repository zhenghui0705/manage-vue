import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index/index'
import Manage from '../view/manage/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
