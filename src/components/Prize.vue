<template>
    <div class="prize">
        <div class="diamond">
            <i class="iconfont icon-diamond"></i>
            <span>我的云钻：998</span>
        </div>
        <div class="coupon">
            <div class="des">
                <p>VIP体验券</p>
                <p>会员影片无广告<br>2018.1.1 - 2018.2.1</p>
            </div>
            <div class="btn">
                <p>100天</p>
                <button class="use">去使用</button>
            </div>
        </div>
        <div class="worldCupCard">
            <p>好礼送不停</p>
            <div class="cards">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Prize"
    }
</script>

<style lang="less" scoped>
    .prize {
        text-align: center;
        .diamond, .coupon {
            text-align: left;
            display: inline-block;
            border: 1px solid rgb(100, 179, 213);
            margin-top: 10px;
            width: 92%;
            height: 80px;
            border-radius: 5px;
        }
        .diamond {
            i {
                margin-left: 20px;
                font-size: 50px;
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
            }
        }
        .coupon {
            position: relative;
            .des {
                height: 100%;
                padding-left: 20px;
                p:nth-child(1) {
                    line-height: 40px;
                }
                p:nth-child(2) {
                    line-height: 15px;
                    font-size: 12px;
                    margin-top: -5px;
                    color: #999;
                }
            }
            .btn {
                height: 100%;
                width: 80px;
                position: absolute;
                right: 0;
                top: 0;
                text-align: center;
                background-color: rgb(100, 179, 213);
                border-radius: 5px 0 0 5px;
                color: #fff;
                p {
                    height: 40px;
                    line-height: 40px;
                }
                .use {
                    height:30px;
                    line-height: 20px;
                    border-radius: 20px;
                    padding: 5px 10px;
                    border: 1px solid #fff;
                    background-color: rgb(100, 179, 213);
                    color: #fff;
                }
            }
        }
        .worldCupCard {
            text-align: left;
            line-height: 40px;
            p {
                padding-left: 4%;
            }
            .cards {
                display: flex;
                justify-content: space-around;
                i {
                    width: 25%;
                    margin: 0 1%;
                    height: 150px;
                    border-radius: 15px;
                    background: url("../../static/img/timg.jpeg") no-repeat;
                    background-size: 100%;
                    background-position: center;
                    transition: transform(rotate(180deg)) 1s 1 linear;
                }
            }
        }
    }
</style>