import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
    // 初始化未登录
    isAuthenticate: false
}
export default new Vuex.Store({
    state,
})