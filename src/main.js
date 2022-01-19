import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Cookies from "js-cookie";
// Cookies.remove("username")
// Cookies.remove("id")
// Cookies.remove("isVip")
// Cookies.remove("score")

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

