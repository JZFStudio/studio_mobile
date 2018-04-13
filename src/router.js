import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import Home from '@/components/Home'
import Prize from '@/components/Prize'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: '任务中心',
            },
            component: Home
        },
        {
            path: '/prize',
            name: 'Prize',
            meta: {
                title: '我的奖品',
            },
            component: Prize
        }
    ]
})
