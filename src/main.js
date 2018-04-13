// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import {setTitle} from './libs/utils'

Vue.use(Vuex);
Vue.use(VueRouter);

FastClick.attach(document.body);

Vue.config.productionTip = false;

function isWechat() {
    return navigator.userAgent.indexOf('MicroMessenger/') !== -1;
}

function isQQ() {
    return navigator.userAgent.indexOf('QBWebViewType/') !== -1;
}

function isShowHeader() {
    return !isWechat() && !isQQ();
}

const store = new Vuex.Store({});

store.registerModule('app', {
    state: {
        isLoading: false,
        showRightSide: false,
        showBack: false,
        rightSideText: '',
        title: '任务中心',
        rightSideFn: function () {
            console.log('rightSideFn');
        },
        transitionName: 'forward'
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading;
        },
        updateRightSide(state, payload) {
            state.showRightSide = payload.showRightSide;
            if (payload.showRightSide) {
                state.rightSideText = payload.rightSideText ? payload.rightSideText : '';
                state.rightSideFn = payload.rightSideFn;
            }
        },
        updateShowBack(state, payload) {
            state.showBack = payload.showBack;
        },
        updateTransitionName(state, payload) {
            state.transitionName = payload.transitionName;
        },
        updateTitle(state, payload) {
            state.title = payload.title;
        }
    }
});

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true});
    store.commit('updateShowBack', {showBack: to.path !== '/'});
    store.commit('updateTransitionName', {transitionName: to.path !== '/' ? 'forward' : 'backward'});
    if (to.path !== '/') {
        store.commit('updateRightSide', {showRightSide: false})
    }
    next()
});

router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false});
    if (to.meta.title) {
        store.commit('updateTitle', {title: to.meta.title});
    }
});

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app-box');
