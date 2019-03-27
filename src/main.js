'use strict'

import Vue from 'vue'
import router from './router'
import store from './store';
import components from './components';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components
})
