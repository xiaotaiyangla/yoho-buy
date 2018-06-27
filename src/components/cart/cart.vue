<template>
    <div>
        <div class="title-top">
            <span class="iconfont icon-fanhui back" @click="goToLast"></span>
            <h2>购物车</h2>
            <span class="iconviewlist">编辑</span>
        </div>
        <div class="coudan">
            <span>再买{{299 | price}}即可免运费</span>
            <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
        </div>
        <div class="coudan">
            <span>购物满{{299 | price}}即可免运费</span>
            <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
        </div>
        <ul class="cart-ul">
            <!--v-for="(item,index) in data"-->
            <li class="cart-li" v-if="data">
                <div class="select">
                    <i class="iconfont icon-xuanze"></i>
                    <i class="iconfont icon-xuanze1"></i>
                </div>
                <div class="con">
                    <img :src="data.goodsImgs[0]" :alt="data.goodsName" @click="goTo(item,index)">
                    <!--<div class="des-text">-->
                        <!--<div class="count">×N</div>-->
                        <!--<p class="itemname">{{data.goodsName}}</p>-->
                        <!--<p>-->
                            <!--<span>颜色:获取</span>-->
                            <!--<span>尺码:获取</span>-->
                        <!--</p>-->
                        <!--<p>{{data.goodsPrice.currentPrice | price}}</p>-->
                    <!--</div>-->
                    <!--点击编辑的时候-->
                    <!--<div class="modify">-->
                        <!--<div class="change-num">-->
                            <!--<span>-</span>-->
                            <!--<span>N</span>-->
                            <!--<span>+</span>-->
                        <!--</div>-->
                        <!--<div class="change-style">-->
                            <!--<span>颜色:获取 </span>-->
                            <!--<span>尺码:获取</span>-->
                            <!--<span class="iconfont icon-xiajiantou"></span>-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </li>
        </ul>
        <!--先判断是否登录了 -->
        <div style="display:none">
            <!-- 购物车内容 -->
            <div class="unregistered">
                <!-- 请先登录 -->
                <div class="warning">
                    <i class="icon-notification"></i>
                    <!-- 转登录页面 -->
                    <span>请您先<a href="/signIn">登录</a>可以同步电脑和手机中的商品</span>
                </div>
                <!-- 购物车 -->
                <div class="unregistered-cart">
                    <div>
                        <i class="iconfont icon-gouwuche"></i>
                        <p>您的购物车暂无商品</p>
                        <a href="/index">随便逛逛</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart",
    data(){
        return{
            data:{}
        }
    },
    created(){
        this.$http.get('/api/goods',{
            params:{
                goodsid:1021225
            }
        }).then(({data})=>{
            this.data = data;
            console.log(this.data);
        })
    },
    methods:{
        goToLast(){
            this.$router.go(-1);
        },
        goTo(obj){
            this.$router.push({
                path:'/product',

            })
        }
    },
    filters:{
        price(money){
            return "¥"+money.toFixed(2);
        }
    }
};
</script>

<style scoped lang="less">
@import './iconfont.css';
//列表
.cart-ul{
    width: 100%;
    .cart-li{
        width: 100%;
        height: 6.15rem;
        border:1px solid red;
        .select{
            width: 2.5rem;
            height:100%;
            text-align: center;
            line-height: 6.15rem;
            .iconfont {
                color: #000;
                font-size: 1rem
            }
            float:left;
        }
        .con{
            box-sizing: border-box;
            width:16.25rem;
            padding:0.5rem 0.75rem 0.5rem 0;
            height:6.15rem;
            border:1px solid yellow;
            float: left;
            font-size:13px;
            line-heigth:1.2;
            color: #999;
            img{
                width: 3.8rem;
                min-height: 5.1rem;
                float: left;
            }
            .modify{
                float:left;
                width: 7rem;
                height: 3.7rem;
                border: 1px solid #dfdfdf;
                .change-num{
                    border-bottom: 1px solid #dfdfdf;
                    span{
                        width:28%;
                        font-size: 1rem;
                    }
                    span:nth-child(2){
                        font-size: 16px;
                        width: 38.5%;
                        border-left: 1px solid #dfdfdf;
                        border-right: 1px solid #dfdfdf;
                    }
                }
                .change-style{
                    span{
                        padding-left:5px;
                    }
                }
                div{
                    height:1.9rem;
                    span{
                        color:#000;
                        display: inline-block;
                        height:1.9rem;
                        line-height:1.9rem;
                        text-align: center;
                        font-size:12px;
                    }
                    .iconfont{
                        color:#444;
                        font-size:16px;
                        font-weight: bold;
                    }
                }

            }
            .des-text{
                width: 10.7rem;
                height:4.65rem;
                margin-left: .8rem;
                padding-top: .5rem;
                float:left;
                line-height:1.5;
                position: relative;
                .count{
                    position: absolute;
                    top:0.5rem;
                    right: 0;
                }
                p{
                    disply:-webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:2;
                    overflow: hidden;
                    width:90%;
                }
                p:last-child{
                    color: #d0253b;
                }
                .itemname{
                    font-size:14px;
                    color:#000;

                }

            }

        }
    }
}

//运费提示
    .coudan{
         height:1rem;
        padding: 0.375rem 0.75rem;
        background: #ff7f81;
        span{
            height: 1rem;
            line-height: 1rem;
            font-size:12px;
            color:#fff;
            float:left;

        }
        span:last-child{
            float: right;
            i{
                margin-left:5px;
            }
        }
        
     }
// 购物车头部
    .iconfont{
        color: white;
    }
    .title-top{
        z-index: 6;
        box-sizing: border-box;
        top:0;
        left:0;
        width:100vw;
        height: 2.625rem;
        line-height: 2.625rem;
        background-color:#4f4138;
        background-image: linear-gradient(#323232,#414141);
        color:#fff;
        .back,.iconviewlist{
            position: absolute;
            top: 0;
            display: block;
            width: 2.625rem;
            height: 2.625rem;
            line-height: 2.625rem;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            vertical-align: baseline;
        }
        .iconviewlist{
            font-size: 14px;
            right: 0;
            font-weight: normal;
        }
        h2{
            font-size: 1.05rem;
            font-weight: 400;
            text-align: center;
        }
    }
//购物车内容
.unregistered {
  background: #f0f0f0;
  .warning {
    padding-top: 0.5rem;
    span {
      height: 1.35rem;
      padding: 0.5rem 0.575rem;
      color: #24acaa;
      text-align: center;
      font-size: 0.825rem;
      box-sizing: content-box;
    }
    .icon-notification{
      // background: url(./warning.png) no-repeat;
      font-size: 1rem;
      display: inline-block;
      margin-left: 1rem;
      vertical-align: baseline;
      color:  #24acaa;

    }
    a {
      display: inline-block;
      background: #ed0010;
      color: #fff;
      width: 2.35rem;
      height: 1.35rem;
      line-height: 1.35rem;
    }
  }
  .unregistered-cart {
    div {
      padding-bottom: 20%;
      margin-top: 3.3rem;
    }
    .icon-cart{
      // background: url(./cart.png) no-repeat;
      font-size: 4.5rem;
      display: inline-block;
      margin-left: 6.9rem;
      vertical-align: bottom;
      color:#444
    }
    p {
      color: #444;
      padding: 0.6rem 0;
    //   display: block;
      font-size: 0.6rem;
      text-align: center;
    }
    a {
      width: 27%;
      height: 1.4rem;
      overflow: hidden;
      line-height: 1.4rem;
      border: 1px solid #505050;
      border-radius: 5px;
      margin: 0 auto;
      color: #fff;
      background: #444;
      font-size: 0.6rem;
      text-align: center;
      display: block;
    }
  }
}
</style>
