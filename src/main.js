import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from 'vuetify'
import VueChatScroll from 'vue-chat-scroll'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueSweetalert2);
Vue.use(VueChatScroll);
new Vue({
  store,
  VueSweetalert2,
  router,
  vuetify,
  VueChatScroll,
  render: h => h(App)
}).$mount('#app')
