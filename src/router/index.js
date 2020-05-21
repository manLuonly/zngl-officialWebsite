/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
    //进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const NotFound = () =>
    import ( /* webpackChunkName: "page" */ '@/components/error/notFound');


let routes = [{
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/BaseLayout'),
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                    banner: 0
                },
                component: () =>
                    import ( /* webpackChunkName: "home" */ '@/page/Home/Home')
            },
            {
                path: '/program',
                name: 'program',
                meta: {
                    title: '应用方案'
                },
                component: () =>
                    import ( /* webpackChunkName: "program" */ '@/page/Program/Program')

            },
            {
                path: '/applets',
                name: 'applets',
                meta: {
                    title: '小程序',
                },
                component: () =>
                    import ( /* webpackChunkName: "applets" */ '@/page/applets/applets')
            },
            {
                path: '/project',
                name: 'project',
                meta: {
                    title: '经典项目'
                },
                component: () =>
                    import ( /* webpackChunkName: "project" */ '@/page/Project/Project'),
                //     children: [
                //         {
                //         path: 'details',
                //         name: 'details',
                //         mate: {
                //             title: '详情',
                //         },
                //         component: () =>
                //             import ( /* webpackChunkName: "page" */ '@/page/Project/details')
                //     }
                // ]

            },
            {
                path: '/linkus',
                name: 'linkus',
                meta: {
                    title: '联系我们'
                },
                component: () =>
                    import ( /* webpackChunkName: "linkus" */ '@/page/LinkUs/LinkUs')
            },
            {
                path: '/project/details',
                name: 'details',
                mate: {
                    title: '详情'
                },
                component: () =>
                    import ( /* webpackChunkName: "details" */ '@/page/Project/details')
            }
        ]
    },

    {
        name: '404',
        path: '/404',
        meta: {
            title: '404'
        },
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]
const router = new Router({
    base: '/',
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    //对网页 title 进行改变
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
})


router.afterEach((to, from) => {
    //每次都置顶页面防止缓存 滚动距离
    Vue.prototype.$scrollTop(0)
        // 做一些额外处理，比如进度条的效果
    NProgress.done();
})

export default router;