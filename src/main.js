// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://88.198.219.62/api_smsc/v1'
axios.defaults.headers.common['X-Auth-Token'] = localStorage.getItem('token');

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));


require('./assets/grid.css')
require('./assets/style.css')
require('./assets/fonts/circular/style.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
