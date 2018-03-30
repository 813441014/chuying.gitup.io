
import Vue from 'vue'
import App from './App'
import router  from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Swiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/js/flexible.js'
import 'swiper/dist/css/swiper.css'
import VuePreview from 'vue-preview'
 
// defalut install
console.log(VuePreview);
Vue.use(VuePreview)

Vue.use(ElementUI)
Vue.use(Swiper)
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')