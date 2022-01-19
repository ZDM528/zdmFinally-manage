import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import("@/views/frontend/index"),
            redirect: "/frontend",
        },
        {
            path: '/frontend',
            name: 'Frontend',
            component: () => import("@/views/frontend/index"),
            redirect:"warehouse",
            children: [
                {
                    path: '/warehouse',
                    name: '数据仓库',
                    component: () => import('@/views/frontend/WareHouse')
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import("@/views/login/index"),
        },
        {
            path: '/student',
            name: '学生管理',
            meta: { title: '学生管理', icon: 'el-icon-s-management' },
            component: Layout,
            redirect: '/student/information',
            children: [
                {
                    path: '/information',
                    name: '学生信息',
                    component: () => import('@/views/studentInfo/index.vue'),
                    meta: { title: '学生信息', icon: 'el-icon-edit' }
                },
            ]
        },
        { path: '*', redirect: '/404', hidden: true }
    ]
})

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


export default router