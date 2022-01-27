import Vue from 'vue';
import router from '@/router';
import App from './App.vue';
import store from './store';
import modal from './plugins/index';

Vue.config.productionTip = false;
Vue.use(modal);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
