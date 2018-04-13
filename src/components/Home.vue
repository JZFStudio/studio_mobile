<template>
    <div class="home">
        <div v-transfer-dom>
            <x-dialog v-model="showDes">
                <div class="homeDialog">
                    <div class="dheader">任务中心说明</div>
                    <div class="dbody">
                        <p>说明一</p>
                        <p>说明二</p>
                        <p>说明三</p>
                    </div>
                    <div class="dfooter">
                        <x-button type="warn" :mini="true" @click.native="closeDialog">知道了</x-button>
                    </div>
                </div>
            </x-dialog>
        </div>
        <div class="userInfo vux-1px-b">
            <img src="../assets/logo.png" alt="">
            <span class="userName">Jack</span>
            <span class="myPrize" @click="toMyPrize"><i class="iconfont icon-jiangpin"></i> 我的奖品</span>
        </div>
        <div class="taskList">
            <div class="taskItem">
                <p class="title">每日任务</p>
                <group class="taskItem">
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                </group>
            </div>
            <div class="taskItem">
                <p class="title">每日任务</p>
                <group class="taskItem">
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                </group>
            </div>
            <div class="taskItem">
                <p class="title">每日任务</p>
                <group class="taskItem">
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                </group>
            </div>
            <div class="taskItem">
                <p class="title">每日任务</p>
                <group class="taskItem">
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                </group>
            </div>
            <div class="taskItem">
                <p class="title">每日任务</p>
                <group class="taskItem">
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                    <cell>
                        <i slot="icon" class="iconfont icon-qiandao" style="font-size: 30px; margin-right: 10px;"></i>
                        <span slot="after-title">签到</span>
                        <span slot="inline-desc">签到送奖品</span>
                        <button slot="default" :class="{btnDisabled: disabled}" class="btn" @click="sign" :disabled="disabled" v-text="disabled ? '已签到' : '签到'"></button>
                    </cell>
                </group>
            </div>
        </div>
    </div>
</template>

<script>
    import { XDialog, XButton, Cell, Group } from 'vux'
    import { TransferDomDirective as TransferDom } from 'vux'
    import { mapState } from 'vuex'

    export default {
        name: "Home",
        components: {
            XDialog,
            XButton,
            Cell,
            Group
        },
        data: function() {
            return {
                showDes: false,
                disabled: false
            }
        },
        directives: {
            TransferDom
        },
        created () {
            let _this = this;
            this.$store.commit('updateRightSide', {
                showRightSide: true,
                rightSideText: '任务说明',
                rightSideFn: function () {
                    _this.showDes = true;
                }
            });
        },
        methods: {
            showLoading: function () {
                this.$store.commit('updateLoadingStatus', {isLoading: true});
            },
            closeDialog: function () {
                this.showDes = false;
            },
            sign: function () {
                console.log('sign');
                this.disabled = true;
            },
            toMyPrize: function () {
                this.$router.push({name: 'Prize'});
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        .userInfo {
            height: 100px;
            position: relative;
            img {
                display: inline-block;
                margin-left: 30px;
                width: 50px;
                height: 50px;
                border: 1px solid red;
                border-radius: 50%;
                margin-top: 24px;
            }
            .userName {
                position: relative;
                left: 20px;
                top: -35px;
            }
            .myPrize {
                position: absolute;
                right: 15px;
                bottom: 10px;
            }
        }
        .taskList {
            .taskItem {
                .title {
                    margin: 15px 0 0 15px;
                }
                .btn {
                    height: 30px;
                    line-height: 30px;
                    border-radius: 30px;
                    font-size: 12px;
                    padding: 0 15px;
                    background-color: greenyellow;
                    border: 1px solid #ccc;
                }
                .btnDisabled {
                    background-color: #fff;
                    color: #ccc;
                }
            }
        }
    }
</style>