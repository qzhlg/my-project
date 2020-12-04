import Vue from 'vue'
import Router from 'vue-router'

import OnePage from '@/views/OnePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnePage',
      component: OnePage
    }
  ]
})
