import Home from '../pages/list/Home.vue'
import About from '../pages/list/About.vue'

const routes = [{
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '',
    name: 'index',
    component: Home
  }
]

export default {
  routes
}
