import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/'
import Layout from '@/views/layout/'

Vue.use(Router)

export default new Router({
  routes: [
      { path: '/', name: 'root', component: Layout, redirect: '/index', children: [
          { path: '/index', name: 'index', component: Index}
      ]}
  ]
})
