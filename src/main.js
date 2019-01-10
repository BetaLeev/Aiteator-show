import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from './utils/vant'
import localstorage from './utils/localStorage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import 'animate.css'
import 'normalize.css'



Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(vant)
new Vue({
    router,
    store,
    localstorage,
    render: h => h(App)
}).$mount('#app')