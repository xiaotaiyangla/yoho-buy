<template>
    <div>
        <title-top></title-top>
        <router-link to="/bns">
            <div class="branner-top" style="background-image:url(http://img12.static.yhbimg.com/yhb-img02/2017/11/09/15/029bf12c695e6a349e0e2ea8e5cae5c882.jpg?imageMogr2/auto-orient/strip/thumbnail/x234/crop/750x234)">
                <div class="shopcover"></div>
                <img class="logo"  src="http://img11.static.yhbimg.com/yhb-img01/2017/11/02/10/014c5431cb72bc605a3a8033a89b0568dc.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/80" alt="">
                <h1 class="store-name">朵茜</h1>
                <div class="fav-box">
                    <div class="favs">粉丝数:3.1w</div>
                    <div class="not-collect" :class="{'class-a':isA,'class-b':!isA}" @click="getShow">
                        <i class="iconfont icon-shoucang-copy styli"></i>
                        <span class="shouc1" @click="changeStatus">{{btnStatus?'收藏':'已收藏'}}</span>
                    </div>
                </div>

            </div>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import TitleTop from '../../components/common/titleTop'
    export default {
        name: "b-s-n",
        components: {TitleTop},
        data(){
            return{
                isA:false,
                btnStatus:true
            }
        },
        methods:{
            getShow(){
                this.isA=!this.isA;
            },
            changeStatus(){
                this.btnStatus=this.btnStatus?false:true;
            }
        }
    }
</script>

<style lang="less" scoped>
    .class-a {
        color: red;
    }
    .class-b {
        color: white;
    }
    .branner-top {
        width: 100%;
        height: 5.85rem;
        position: relative;
        overflow: hidden;
        background-size: 100%;
        background-repeat: no-repeat;
        .shopcover {
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,.2);
        }
        .logo {
            position: absolute;
            overflow: hidden;
            left: .75rem;
            bottom: .75rem;
            width: 2.5rem;
            height: 2.5rem;
            display: block;
            margin: 0 auto;
            max-width: 100%;
            border: 0;
        }
        .store-name {
            color: #fff;
            font-size: .7rem;
            position: absolute;
            bottom: .75rem;
            overflow: hidden;
            left: 3.7rem;
        }
        .fav-box {
            right: .75rem;
            border-radius: .25rem;
            text-align: center;
            background-size: contain;
            color: #fff;
            font-size: .7rem;
            position: absolute;
            bottom: .5rem;
            .favs {
                float: left;
                line-height: 1.2rem;
                margin-right: .4rem;
                padding-top: .1rem;
                font-size: .6rem;
            }
            .not-collect {
                float: left;
                width: 3.2rem;
                height: 1.25rem;
                line-height: 1.25rem;
                border-radius: .25rem;
                background-size: 3.2rem 2.7rem;
                .iconfont {
                    font-size: 0.5rem;
                }
                .shouc1 {
                    font-size: 0.5rem;
                }
            }

        }
    }
</style>