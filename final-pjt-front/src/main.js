import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuesax from 'vuesax'
import VueCarousel from 'vue-carousel';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true })
Vue.use(VueCarousel);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuesax, {})
Vue.config.productionTip = false
Vue.use(VueFullPage);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

