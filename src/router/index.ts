import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            component: () => import('../views/Home/index.vue')
        },
        {
            path: '/Doc',
            component: () => import('../views/Doc/index.vue'),
            children: [{
                path: 'Button',
                component: () => import('../views/Doc/Button/index.vue')
            }]
        },
    ]
})

export default router