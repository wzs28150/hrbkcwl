import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'component/app/router';
import app from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
App.component(Layout.name, Layout);
App.use(ElementUI);
sync(store, router);

export default App.init({
  base: '/app',
  ...app,
  router,
  store
});
