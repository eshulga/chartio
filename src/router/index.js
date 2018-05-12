import Vue from 'vue'
import Router from 'vue-router'

import homeRoute from './home'

Vue.use(Router)

const router = new Router({
  routes: [homeRoute]
})

export default router
