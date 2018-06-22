<template>
    <ul class="footer-tab">
        <li>
            <i class="iconfont icon-tubiao01"></i>
            <router-link to="/index">
                <p class="tab-name active">首页</p>
            </router-link>
        </li>
        <li>
            <i class="iconfont icon-leimupinleifenleileibie hfcolor
"></i>
            <p class="tab-name">分类</p>
        </li>
        <li>
            <i class="iconfont icon-gouwuche hfcolor"></i>
            <p class="tab-name">购物车</p>
        </li>
        <li>
            <i class="iconfont icon-wode-weixuanzhong hfcolor"></i>
            <router-link to="/personalCenter">
            <p class="tab-name">我的</p>
            </router-link>

        </li>
    </ul>
</template>

<script>
    export default {
        name: "footer-home"
    }
</script>

<style lang="less" scoped>
    .footer-tab {
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left:0;
        display: flex;
        width: 100%;
        height: 2.1rem;
        border-top: 1px solid rgb(176,176,176);
        z-index: 3;
        background: #fff;
        padding-top: 0.5rem;
        li{
            text-align: center;
            flex:1;
            .hfcolor {
                color:rgb(208,208,208);
            }
            i {
                display: inline-block;
                font-size: 1.1rem;
                line-height: 1.1;

            }
            .tab-name {
                margin-top: 0.22rem;
                font-size: 12px;
                line-height: 1;
                transform:scale(0.9);
                color: rgb(176, 176, 176);
            }
            .active {
                color: black;
            }
        }


    }

</style>