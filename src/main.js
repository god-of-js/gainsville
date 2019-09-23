import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from 'vuetify';
Vue.config.productionTip = false;
Vue.use(Vuetify)
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
