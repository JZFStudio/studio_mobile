<template>
    <div id="app">
        <div class="v-transfer-dom" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 100;">
            <x-header :left-options="{showBack, backText: '返回'}" :title="title">
                <span slot="right" @click="rightSideFn" v-show="showRightSide">{{rightSideText}}</span>
            </x-header>

            <loading v-model="isLoading"></loading>
        </div>

        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { Loading, XHeader } from 'vux'
    import { TransferDomDirective as TransferDom } from 'vux'
    import { mapState } from 'vuex'
    import '../static/iconfont/iconfont.css'
    export default {
        name: 'app',
        components: {
            Loading,
            XHeader
        },
        directives: {
            TransferDom
        },
        computed: {
            ...mapState({
                isLoading: state => state.app.isLoading,
                showRightSide: state => state.app.showRightSide,
                showBack: state => state.app.showBack,
                rightSideText: state => state.app.rightSideText,
                rightSideFn: state => state.app.rightSideFn,
                transitionName: state => state.app.transitionName,
                title: state => state.app.title
            })
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';
    html, body {
        height: 100%;
    }
    body {
        background-color: #fbf9fe;
        position: relative;
        overflow: hidden;
        #app {
            padding-top: 46px;
            height: 100%;
            box-sizing: border-box;
        }
        .forward-enter-active, .forward-leave-active, .backward-enter-active, .backward-leave-active {
            transition: all 500ms linear;
            position: absolute;
            top: 46px;
            width: 100%;
        }
        .forward-enter, .backward-leave-to {
            transform: translate(100%);
            opacity: 0;
        }
        .forward-leave-to, .backward-enter {
            transform: translate(-100%);
            opacity: 0;
        }
    }
</style>
