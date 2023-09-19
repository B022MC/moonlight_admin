/**
 * @author  B022MC
 * @date  2023/9/13 14:58
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */

import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Login from '../view/Login/Login.vue';
// @ts-ignore
import Home from '../view/Home/Home.vue';
import welcome from '../components/welcome.vue';
import userlist from '../components/userList.vue';

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
            component: Login // 直接导入组件
        },
        {
            path: '/home',
            name: 'home',
            component: Home, // 直接导入组件
            children:[{
                path:'/welcome',
                component:welcome
            },{
                path:'/userlist',
                component:userlist
            },
            ]
        }
    ],
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 在这里执行全局前置守卫逻辑
    // 比如检查用户是否登录，是否有权限访问某些路由等
    console.log('beforeEach',to,from)
    const isAuthenticated = !!sessionStorage.getItem('token');

    if (to.name !== 'login' && !isAuthenticated) {
        // 如果用户未登录且不在登录页面，则重定向到登录页面
        next('/login');
    } else {
        // 如果已登录或者访问登录页面，则继续路由导航
        next();
    }
});

export default router
