import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入swiper
require ('/Users/lanou/Desktop/My/Vue/yoho-buy/src/assets/swiper/swiper-3.4.2.min.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//导入小图标的css文件
require('/Users/lanou/Desktop/My/Vue/yoho-buy/src/assets/font/iconfont.css')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
