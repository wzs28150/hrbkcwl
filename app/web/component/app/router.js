import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';

import IndexView from './Index/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    component: IndexView
  },
  {
    path: '/list',
    component: ListView
  },
  {
    path: '/detail/:id',
    component: () =>
    import('./detail')
  }
  ]
});

export default router;
