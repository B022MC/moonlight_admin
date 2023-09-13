/**
 * @author  B022MC
 * @date  2023/9/13 14:58
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // 路由配置
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../view/Login/Login.vue')
        },
        {
            path: '/home',
            name: 'home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../view/Home/Home.vue')
        }
    ],
});
/*
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ '../view/Login/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ '../view/Home/Home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})*/

// router.beforeEach(to, from, next){
//   next()
// }

export default router