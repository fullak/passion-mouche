import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../views/calendar.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contact.vue')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../views/articles.vue')
    },
    
    {
        path: '/oneArticle',
        name: 'oneArticle',
        component: () => import('../views/oneArticle.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
