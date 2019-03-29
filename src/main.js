'use strict'

import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
