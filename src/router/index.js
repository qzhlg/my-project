import Vue from 'vue'
import Router from 'vue-router'

import OnePage from '@/views/OnePage'
import Cmptunication from '@/views/cmptComucation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnePage',
      component: OnePage
    },
    {
      path:'/cmptComuncation',
      name:'Cmptunication',
      component:Cmptunication
    }
  ]
})
