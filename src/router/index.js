import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/Components/Auth/Login.vue'
import Home from '@/Components/Container/Home.vue'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
  ]
})
