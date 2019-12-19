import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SideNav from '@/components/SideNav.vue';

Vue.config.productionTip = false;

Vue.component('SideNav', SideNav);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
