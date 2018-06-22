<template>
    <!--"新品到着"页面-->
    <div class="newpage">
        <title-top></title-top>
        <div class="dzimg">
        <ul class="new-img">
            <li class="new-slide">
                <a href="">
                    <img :src="piture.src" alt="">
                </a>
            </li>
        </ul>
        </div>
        <!--tab切换-->
        <ul class="list-nav">
            <a href="/lifestyle-new/xm">
                <li class="navnav">a</li>
            </a>

            <li class="navnav">b</li>
            <li class="navnav">c</li>
            <li class="navnav">d</li>
            <!--<li class="navnav"-->
                <!--v-for="(item,index) in tabs"-->
                <!--:class="{active:index == num}"-->
                <!--@click="tab(index)">{{item}}-->
            <!--</li>-->
        </ul>
        <div class="tabCon">
            <div class="tabConCon"
                 v-for='(itemCon,index) in tabContents'
                 v-show="index == num">
                {{itemCon}}
                <!--<ul>-->
                    <!--&lt;!&ndash;列表中的一项&ndash;&gt;-->
                    <!--<li class="good-info">-->
                        <!--&lt;!&ndash;图片上的留白&ndash;&gt;-->
                        <!--<div class="tag-container"></div>-->
                        <!--&lt;!&ndash;图片&ndash;&gt;-->
                        <!--<div class="good-detail-img">-->
                            <!--<a href=""><img :src="res.goodsImgs" alt=""></a>-->
                        <!--</div>-->
                        <!--&lt;!&ndash;图片的名称，价格&ndash;&gt;-->
                        <!--<div class="good-detail-text">-->
                            <!--&lt;!&ndash;图片名&ndash;&gt;-->
                            <!--<div class="name"><a href="">{{res.goodsName}}</a></div>-->
                            <!--&lt;!&ndash;图片价格&ndash;&gt;-->
                            <!--<div class="price">-->
                                <!--<span class="sale-price">{{res.goodsPrice}}</span>-->
                                <!--<span class="market-price"></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->
                <!--</ul>-->

            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import TitleTop from "../components/common/titleTop"
    export default {
        name: "new",
        data(){
            return {
                piture:{
                    src:"http://img12.static.yhbimg.com/yhb-img01/2016/02/29/07/025d532df4d76507c663157d7f34927324.jpg?imageView2/2/w/640/h/240/q/60"
                },
                tabs:["6月22号","本周上新","销量","筛选"],
                tabContents:["1","2","3","4"],
                num:0
            }

        },
        methods:{
          tab(index){
              this.num = index;
              this.$http.get('./api/goods/new-goods')
                  .then(function (res) {
                      console.log(res);
                  })
                  .catch(function (err) {
                      console.log(err);
                  })
          }
        },
        components:{
            TitleTop
        }
    }
</script>

<style lang="less" scoped>
    .dzimg {
        height: 5.9rem;
        width: 100%;
        max-height: 5.9rem;
        .new-img {
            position: relative;
            li {
                width: 100%;
                height: 5.9rem;
                img {
                    display: block;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

    .list-nav {
        border-top:.05rem solid #fff;
        border-bottom: 1px solid #e6e6e6;
        .navnav {
            float: left;
            width: 25%;
            height: 1.65rem;
            line-height: 1.65rem;
            text-align: center;
            font-size: .575rem;
            color: #999;
        }
    }
    .good-info {
        float: left;
        margin:0.25rem .375rem 1rem;
        width: 6.9rem;
        height: 12.65rem;
        .tag-container {
            overflow: hidden;
            width:100%;
            height: .7rem;
        }
        .good-detail-img {
            position: relative;
            height: 9.2rem;
            img {
                display: block;
                width:100%;
                height: 9.2rem;
            }
        }
        .good-detail-text {
            position: relative;
            .name a {
                margin: .375rem 0 .25rem;
                min-height: 1.25rem;
                color:#444;
                line-height: .75rem;
                padding:.125rem 0;
                overflow: hidden;
                height: 1.5rem;
            }
            .price{
                .sale-price {
                    color:#d62927;
                }
                .market-price {
                    font-size:12px;
                    margin: 0 0 0 .125rem;
                    color: #b0b0b0;
                    text-decoration: line-through;
                }
            }
        }
    }
</style>