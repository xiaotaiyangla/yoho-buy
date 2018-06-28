<template>
    <div>
        <div class="confrimdelete">
            <div class="box"></div>
        </div>
        <div class="cart-bottom">
            <div class="selectAll">
                <p>
                    <!--选中-->
                    <i class="iconfont icon-xuanze" :class="{'icon-xuanze1':!isSelectAll}" @click="aboutSelectAll"></i>
                </p>
                <p> 全选</p>
            </div>
            <div class="zongji">
                <div class="text" v-if="!isModify">
                    <p>总计:{{total | price}} <span>({{totalCount}}件)</span></p>
                    <p>不含运费</p>
                </div>
                <div class="btn-jiesuan" v-if="!isModify">结算</div>
                <div class="btn-jiesuan shoucang"v-if="isModify">移入收藏夹</div>
                <div class="btn-jiesuan" v-if="isModify" @click="delGood">删除</div>
            </div>
        </div>
        <div class="title-top">
            <span class="iconfont icon-fanhui back" @click="goToLast"></span>
            <h2>购物车</h2>
            <span class="iconviewlist" @click="isModify =!isModify">{{changetext}}</span>
        </div>
        <div>
            <!--<div v-if="data.errorcode !=1">-->
            <div class="coudan" v-if="forFare">
                <span>再买{{299 | price}}即可免运费</span>
                <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
            </div>
            <div class="coudan" v-if="could">
                <span>购物满{{299 | price}}即可免运费</span>
                <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
            </div>
            <div class="coudan" v-if="hasDone">
                <span>购物满{{299 | price}}已免运费</span>
                <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
            </div>
            <ul class="cart-ul">
                <!--  v-if="data"-->
                <li class="cart-li" v-for="(item,index) in data">
                    <div class="select">
                        <i class="iconfont icon-xuanze" :class="{'icon-xuanze1':item.isSelect}" @click="select(item)"></i>
                    </div>

                    <div class="con">
                        <img :src="item.goodsImgs[0]" :alt="item.goodsName" @click="goTo(item,index)">
                        <div class="des-text">
                            <div v-if="!isModify">
                                <p class="itemname">{{item.goodsName}}</p>
                                <p class="style">
                                    <span>颜色:{{item.color}}</span>
                                    <span>尺码:{{item.size}}</span>
                                </p>
                            </div>
                            <div class="count">×{{item.count}}</div>
                            <!--点击编辑的时候-->
                            <div class="modify" v-if="isModify">
                                <div class="change-num">
                                    <span @click="changeQuantity(item,-1,index)" class="dec">-</span>
                                    <input type="text" disabled :value="item.count"/>
                                    <span  @click="changeQuantity(item,1)" class="add">+</span>
                                </div>
                                <div class="change-style">
                                    <span class="styles">颜色:获取 尺码:获取</span>
                                    <span class="iconfont icon-xiajiantou" @click="chooseAgain =!chooseAgain"></span>
                                </div>
                            </div>
                            <p>{{item.goodsPrice.currentPrice*item.count | price}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--先判断是否登录了 -->
        <div v-if="data.errorcode==1">
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
        <!---->
        <div class="list-wrap">
            <p  class="xinpin">为你优选新品</p>
            <ul class="list-con">
                <li v-for="item in list" :class="getClass(item.goodsId)">
                    <img :src="(item.goodsImgs)[0]" :alt="item.goodsName">
                    <div class="desdetail">
                        <p class="prosname">{{item.goodsName}}</p >
                        <p class="aboutprice">
                            <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                            <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}</span>
                            <span class="formore" @click="showSimilar(item)">
                                <i class="iconfont icon-htmal5icon26"></i>
                            </span>
                        </p >
                    </div>
                    <div class="cover" v-show="item.isSimilar">
                        <div class="similar">找相似</div>
                    </div>
                    <div class="newpro" v-if="item.isNewsale">NEW</div>
                    <div class="saleout" v-if="item.isPresale">即将售罄</div>
                </li>
            </ul>
        </div>
        <!--弹出选择页面-->
        <div class="choose" v-if="chooseAgain">
            <div class="con">
                <div class="p1">
                    <img src="" alt="">
                    <div>
                        <p>价格</p>
                        <p>请选择颜色</p>
                        <p>已选:颜色、尺码</p>
                        <p>鞋内长:多少长</p>
                    </div>
                    <p class="circle" @click="chooseAgain =!chooseAgain">×</p>
                </div>
                <div class="p2">
                    <p class="left">颜色</p>
                    <!--r-test2 选中样式-->
                    <ul class="r-ul">
                        <li class="r-test">获取颜色</li>
                        <li class="r-test">获取颜色</li>
                        <li class="r-test">获取颜色</li>
                        <li class="r-test">获取颜色</li>
                    </ul>
                </div>
                <div class="p3">
                    <p class="left">尺码</p>
                    <!--r-test2 选中样式-->
                    <ul class="r-ul">
                        <li class="r-test">获取尺码</li>
                        <li class="r-test">获取尺码</li>
                        <li class="r-test">获取尺码</li>
                        <li class="r-test">获取尺码</li>
                    </ul>
                </div>
                <div class="p4">
                    <p class="left">数量</p>
                    <div class="likebtn">
                        <!--@click="changeQuantity(item,-1,index)" -->
                        <span class="dec">-</span>
                        <!--:value="item.count"-->
                        <input type="text" disabled value="1"/>
                        <!--@click="changeQuantity(item,1)"-->
                        <span  class="add">+</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
export default {
    name: "cart",
    data(){
        return{
            data:[],
            isSelectAll:true,
            confirmDelete:false,
            toDelIndex:-1,
            could:false,
            hasDone:false,
            forFare:true,
            isModify:false,
            list:{},
            chooseAgain:false
        }
    },
    computed:{
        ...mapState({
            msg:(state)=>state.items
        }),
        //千万不能用箭头函数
        total(){
            var totalPrice = 0;
            this.data.forEach(function(goods){
                if(!goods.isSelect){
                    totalPrice +=goods.goodsPrice.currentPrice*goods.count;
                }
            });
            if(0<=totalPrice&&totalPrice<299){
                //再满可免
                this.could = true;
                this.hasDone = false;
                this.forFare = false;
            }else if(totalPrice>=299) {
                //已免
                this.hasDone = true;
                this.could = false;
                this.forFare = false;
            }
            return totalPrice;
        },
        totalCount(){
            let totalcount = 0;
            this.data.forEach(function(goods){
                goods.count = goods.count - 0;
                if(!goods.isSelect){
                    totalcount += goods.count;
                }
            });
            return totalcount;
        },
        changetext(){
            if(this.isModify){
                return '完成';
            }else{
                return "编辑";
            }

        }
    },
    mounted(){
      //let bScroll = new BScroll(this.$refs.cartdiv,{click:true});
    },
    created(){
        this.$http.get('/api/user/getCart').then(({data})=>{
            this.data = data;
            console.log(this.data);
        })
        this.$http.get('/api/goods/new-goods').then(({data})=>{
            this.list = data;
        });
    },
    methods:{
        goToLast(){
            this.$router.go(-1);
        },
        goTo(obj){
            this.$router.push({
                path:'/product',

            })
        },
        //编辑部分
        changeQuantity(good,val,_index){
            good.count = good.count - 0;
            if(good.count == 1 && val == -1){
                this.confirmDelete = true;
                this.toDelIndex = _index;
            }else{
                good.count += val;
            }
        },
        //删除
        delGood(good,_index){
            this.confirmDelete = true;
            this.toDelIndex = _index;
            this.data.splice(this.toDelIndex,1);
            // console.log(this.confirmDelete);
            this.confirmDelete = false;
        },
        isCheckAll(){
            var flag = true;
            this.data.forEach((goods)=>{
                //isSelect为true的话实际上是未选中 只要有未选中的就不是全选
                if(goods.isSelect){
                    flag = false;
                }
            });
            //isSelectAll,true是选中
            if(!flag){
                this.isSelectAll = false;
            }else{
                this.isSelectAll = true;
            }
        },
        select(obj){
            if(obj.isSelect == void 0){
                this.$set(obj,'isSelect',true);
            }else{
                obj.isSelect = !obj.isSelect;
            }
            this.isCheckAll();
        },
        //底部的全选与非全选
        aboutSelectAll(){
            //如果item.isSelectAll为true可以设置 this.isSelectAll
            if(!this.isSelectAll){
                this.isSelectAll = true;
                this.data.forEach((goods)=>{
                    goods.isSelect = false;
                });
            }else{
                this.isSelectAll = false;
                this.data.forEach((good)=>{
                    good.isSelect = true;
                })
            }

        },
        getClass(_id){
            return "id"+_id;
        },
        showSimilar(item){
            if(item.isSimilar == undefined){
                this.$set(item,"isSimilar",true);
            }else{
                item.isSimilar = !item.isSimilar;
            }
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
@import '../common/list/list';
//
//
.list-wrap{
    position:relative;
    top:0;
    left:0;
    .xinpin{
        height:4.4rem;
        width:100%;
        text-align: center;
        line-height: 4.4rem;
    }

}
//弹出页
.choose{
    position: fixed;
    z-index: 333;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.3);
    font-size:16px;
    .con{
        background-color: #fff;
        width:100%;
        height: 23.3445rem;
        position: absolute;
        left:0;
        bottom:0;
        z-index: 666;
        padding:0 0.875rem;
        box-sizing: border-box;
        .p1{
            margin-top:0.875rem;
            position: relative;
            width: 100%;
            height:5rem;
            padding-bottom:0.875rem;
            border-bottom:1px solid #e6e6e6;
            img{
                position: relative;
                top:-1.9rem;
                width:4.7rem;
                height:6.272rem;
                border: 1px solid #e6e6e6;
                float:left;
                margin-right: 1rem;
            }
            div{
                float:left;
                p{
                    color:#000;
                    font-size:12px;
                    border: 1px solid;
                    line-height: 1.5;
                }
                p:first-child{
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            .circle{
                position: absolute;
                top:0;
                right:0;
                width:0.9rem;
                height: 0.9rem;
                line-height: 0.9rem;
                border-radius: 50%;
                text-align: center;
                background-color: #B0B1B0;
                color:#fff;
            }

        }
        .p2,.p3{
           width:100%;
            height:2.625rem;
            border-bottom:1px solid #e6e6e6;
            margin:0.75rem 0;
            .left{
                width:2rem;
                height:2.625rem;
                line-height: 2.625rem;
                float:left;
            }
            .r-ul{
                height:100%;
                border:1px solid red;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .r-test{
                    padding:0 0.3rem;
                    margin-right:8px;
                    font-size:12px;
                    height: 1.65rem;
                    line-height:1.65rem;
                    background: #d0021b;
                    color:#fff;
                    border:1px solid #e10;
                    border-radius:0.3rem;
                    text-align:center;
                }
                .r-test2{
                    color:#000;
                    background-color: #fff;
                    border:1px solid #000;
                }
            }


            .right{
                float:left;
            }
        }
        .p4{
            .left{
                width:2rem;
                height:2.625rem;
                line-height: 2.625rem;
                float:left;
            }
            .likebtn{
                float:left;
                border: 1px solid #dfdfdf;
                height:2.625rem;
                span{
                    text-align: center;
                    display: inline-block;
                    width:2.35rem;
                    font-size: 1rem;
                    height:2.625rem;
                    line-height: 2.625rem;
                }
                .dec{
                    border-right: 1px solid #dfdfdf;
                }
                .add{
                    border-left: 1px solid #dfdfdf;
                }
                input{
                    vertical-align: top;
                    font-size: 16px;
                    width: 2.6rem;
                    height: 2.35rem;
                    text-align: center;
                    border:0;
                }
            }
        }

    }
}

//底部
.cart-bottom{
    z-index: 222;
    text-align: center;
    font-size:.575rem;
    width:100%;
    height: 3rem;
    padding: 0.45rem;
    box-sizing: border-box;
    position:fixed;
    left:0;
    bottom: 0;
    background-color: #fff;
    .selectAll{
        float: left;
        width: 2.5rem;
        height: 2.1rem;
        text-align: center;
        p{
            height:1.1rem;
            line-height:1.1rem;
            font-size: .65rem;
            color: #666;
            i{
                font-size:1rem;
                color:#000;
            }
        }

    }
    .zongji{
        float:right;
        .text{
            float:left;
            text-align: right;
            p{
                width:9rem;
                height: 1.1rem;
                color:#999;
                line-height:1.1rem;
            }
            p:first-child{
                color: #d0253b;
                font-size: .8rem;
            }

        }
        .btn-jiesuan{
            float:left;
            width: 3.55rem;
            height: 2.05rem;
            line-height:2.05rem;
            padding:1px 0.35rem 2px;
            margin:0 0.35rem;
            background-color: #d1021c;
            color:#fff;
            font-size:14px;

        }
        .shoucang{
            background-color: #444444;
        }
    }
}

//列表
.cart-ul{
    width: 100%;
    background-color: #EFF0EF;
    overflow: hidden;
    .cart-li{
        background-color: #fff;
        width: 100%;
        height: 6.15rem;
        /*border:1px solid red;*/
        margin-bottom:10px;
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
            /*border:1px solid yellow;*/
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
                    .dec{
                        border-right: 1px solid #dfdfdf;
                    }
                    .add{
                        border-left: 1px solid #dfdfdf;
                    }
                    input{
                        font-size: 16px;
                        width: 38.5%;
                        text-align: center;
                        border:0;
                    }
                }
                .change-style{
                    span{
                        padding-left:5px;
                    }
                    .styles{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .iconfont{
                        vertical-align: top;
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
                    top:.5rem;
                    right: 0;
                }
                p{
                    disply:-webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:2;
                    overflow: hidden;
                    width:90%;
                    color: #d0253b;
                }
                p.style{
                    color: #b6b6b6;
                    span:first-child{
                        padding-right:8px;
                    }
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
