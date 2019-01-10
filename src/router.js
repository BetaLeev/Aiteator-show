import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: () =>
                import ('./views/Category.vue')
        },
        {
            path: '/discover',
            name: 'discover',

            component: () =>
                import ('./views/Discover.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            meta: { requiresAuth: false },
            component: () =>
                import ('./views/Cart.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            meta: { requiresAuth: false },
            component: () =>
                import ('./views/Mine.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./views/Register'),
        },
        {
            path: '/authentication',
            name: 'authentication',
            component: () =>
                import ('./views/AuthLogin.vue'),
        },
        {
            path: '*',
            component: () =>
                import ('./components/NotFound')
        }
    ]
})