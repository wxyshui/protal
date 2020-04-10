// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import './permission'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入初始化css样式
import './assets/styles/reset.css'
// 引入axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// 引入vuex(状态管理)
// import vuex from 'vuex'
import store from './store'
import Mock from './mock'
Mock.bootstrap()
import './config/remConfig';
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)

import App from './App'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
// Vue.use(vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
