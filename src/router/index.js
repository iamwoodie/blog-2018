import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/'
import Layout from '@/views/layout/'
import Article from '@/views/article/'
import ArticleList from '@/views/article_list'
import Tax from '@/views/tools/tax.vue'

Vue.use(Router)

export default new Router({
  routes: [
      { path: '/', name: 'root', component: Layout, redirect: '/index', children: [
          { path: '/index', name: 'index', component: Index},
          { path: '/article', name: 'article', component: Article},
           { path: '/:category/article_list', name: 'article_list', component: ArticleList}
      ]},
      { path: '/tax', component: Tax }
  ]
})
