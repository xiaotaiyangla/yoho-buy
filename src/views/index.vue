<template>
    <div class="outest-container">
        <div class="top">首页
            <router-link to="/search" style="float: right;">搜索</router-link>
        </div>

        <!--轮播图-->
        <lunbo></lunbo>

        <!--一楼(新品到着等)-->
        <one-floor></one-floor>

        <!--二楼(热门分类)-->
        <div>
            <div class="floorTitle">
                <h2>热门分类</h2>
            </div>

            <two-floor></two-floor>
        </div>

        <!--三楼(热门品牌)-->
        <div>
            <div class="floorTitle">
                <h2>热门品牌</h2>
            </div>

            <third-floor></third-floor>
        </div>
        <!--新客专享-->
        <div>
            <div class="floorTitle">
                <h2>新客专享</h2>
            </div>
            <ul style="height: 305px"></ul>
        </div>
        <!--人气单品排行-->
        <div>
            <div class="floorTitle">
                <h2>人气单品排行</h2>
            </div>
            <ul style="height: 305px"></ul>
        </div>

        <footer-home></footer-home>

        <!--以下为测试-->
        <!--<footer-two></footer-two>-->
        <!--<footer-cart></footer-cart>-->
        <!--<v-footer></v-footer>-->
    </div>
</template>

<script>
    import Lunbo from "../components/common/lunbo";
    import OneFloor from "./OneFloor"
    import TwoFloor from "./twoFloor"
    import ThirdFloor from "./thirdFloor"
    import FooterHome from '../components/common/footerHome' //首页底部

    //以下为测试
    //import FooterTwo from '../components/common/footerTwo' //商品详情/列表底部
    //import FooterCart from "../components/common/footerCart" //购物车底部
    // import VFooter from '../components/common/footer' //基础框架


    export default {
        name: "index",
        components:{
            Lunbo,
            OneFloor,
            TwoFloor,
            ThirdFloor,
            FooterHome,
            //FooterTwo
            //FooterCart
            //VFooter,
        }
    }
</script>

<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    }
    .outest-container {
        width: 100%;
    }
    .top{
        width: 100%;
        height: 2.25rem;
    }
    .floorTitle {
        position: relative;
        height: 2rem;
        line-height: 2rem;
        background: #f0f0f0;
        text-align: center;
        font-size: 0.65rem;
        color: #444;
        h2 {
            color: #000000;
        }
    }
</style>