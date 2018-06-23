<template>
    <div>
        <!-- 第一层 -->
        <div>
            <!-- 顶部 -->
            <header>
            </header>
            <!-- 轮播图 单张 -->
            <!-- <div class="single-photo">
                <img src="" alt="">
            </div> -->
            <!-- 轮播图 多张-->
            <!-- <swiperVue></swiperVue> -->
            <div class="container">
                <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
                    <!-- 这部分放你要渲染的那些内容 -->  
                    <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                        <a href="">
                            <img v-if="goodslist.goodsImgs"  v-for="item in goodslist.goodsImgs"    :src="item" alt=""   :key="goodslist.id">
                        </a>
                    </swiper-slide>
                    <!-- 这是轮播的小圆点-->
                    <div :class="swiperPagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- 商品名称 -->
            <div class="goods-name">
                <h1 class="name">
                    {{goodslist.goodsName}}
                </h1>
            </div>
            <!-- 价格 -->
            <div class="price-data">
                <h2 class="current-price" v-if="goodslist.goodsPrice">¥{{goodslist.goodsPrice.currentPrice}}</h2>
                <h2 class="previous-price" v-if="goodslist.privousPrice">{{goodslist.privousPrice}}</h2>
            </div>
            <!-- 卡 -->
            <ul class="price-data card">
                <div class="card-details">
                    <li>
                        <span class="gold-card"></span>
                        <span>¥121.60</span>
                    </li>
                    <li>
                        <span class="silver-card"></span>
                        <span>¥121.60</span>
                    </li>
                    <li>
                        <span class="platinum-card"></span>
                        <span>¥121.60</span>
                    </li>
                </div>
            </ul>
            <!-- 优惠活动 -->
            <div class="good-discount  price-data">
                <h2 class="good-discount-details">
                    <span class="promotion-icon">促</span>
                    全场任意消费加5元换购YOHO!当期热销新刊
                    <span class="down-arrow"></span>
                </h2>
            </div>
        </div>
        <!-- 第二层 -->
        <div class="feedback">
            <!-- 头 -->
            <div class="nav">
                <span class="nav-left" v-if="goodslist.comments"  >商品评价（{{goodslist.comments.count}}）</span>
                <span class="nav-right" @click="active()" ref="navRight">常见问题</span>
            </div>
            <!-- 商品评价页面 -->
            <div class="commentPage" v-if="commentPageChange">
                <div>
                    <p>
                        <span class="username" >1515***5151</span>
                        <span class="goods-spec" >购买了白色</span>
                    </p>
                    <p class="detail-content" >
                        6666
                    </p>
                    <p class="time" >
                        <span class="comment-time" >2018-06-18  08:35:09</span>
                    </p>
                </div>
                <!-- 查看更多 -->
                <div class="learnmore">
                    <a href="###">
                        <span>查看更多</span>
                        <i></i>
                    </a>
                </div>
            </div>
            <!-- 常见问题 -->
            <div class="question-wrap">
                <div class="question">
                    <!-- 问题一 -->
                    <div class="question-detail">
                        <i></i>
                        <span>商品都是正品吗？</span>
                    </div>
                    <div class="answer-detail">
                        <i></i>
                        <span>商品都是正品</span>
                    </div>
                </div>
            </div>
            <!-- 查看更多 -->
             <div class="learnmore">
                    <a href="###">
                        <span>查看更多</span>
                        <i></i>
                    </a>
                </div>
        </div>
        <!-- 第三层 进入店铺 -->
        <div class="enter-store-wrap">
            <div class="enter-store">
                <a href="###">
                    <img  class="store-pic"  src="" alt="">
                </a>
                <a href="###" class="name">
                    美迪惠尔
                </a>
                <a href="###" class="store-link">
                    进入店铺
                    <i></i>
                </a>
            </div>
        </div>
        <!-- 第四层 商品信息 -->
        <div>
            <div class="goods-desc">
            <!-- 头 -->
                <h2>
                        商品详情
                        <span>product info</span>
                </h2>
                <!--商品详情  -->
                <div class="detail-table">
                    <span class="column" v-if="goodslist.goodsInfo">编号：{{goodslist.goodsInfo.attr[0]}}</span>
                    <span class="color" v-if="goodslist.goodsInfo">颜色：{{goodslist.goodsInfo.attr[1]}}</span>
                    <span class="gender" v-if="goodslist.goodsInfo">性别：{{goodslist.goodsInfo.attr[2]}}</span> 
                </div>
                <div class="element">
                    <span   v-if="goodslist.goodsInfo">{{goodslist.goodsInfo.text}}</span>
               </div>
            </div>
        </div>
        <!-- 第五层 尺码信息 -->
        <!-- <div>
            <div> -->
            <!-- 头 -->
                <!-- <h2>
                        尺码信息
                        <span>size info</span>
                </h2> -->
                <!--商品详情  -->
                <!-- <div>
                    <span>吊牌尺码</span>
                    <span>F</span>
                    <span>F</span>
                    <span>25ML*10</span>
                </div>
            </div>
        </div> -->
        <!-- 第六层 -->
        <div>
            <div   class="goods-desc goods-dtl">
            <!-- 头 -->
                <h2 >
                        商品详情
                        <span>details</span>
                </h2>
                <!--商品详情  -->
                <div class="detail">
                     <span style="color:#ff0000" class="notice">温馨提示：我们不接受包装盒已被开封的商品的退换货（商品外包装盒上的透明封装胶带已被撕开同样视为开封），请您谅解！</span>
                    <!-- <span>包装更新</span> -->
                </div>
                <div class="showpicture">
                <!-- 商品图片 -->
                <img   src="https://img12.static.yhbimg.com/goodsimg/2018/05/25/18/02edfd15075da626aee83ded4d2f000442.jpg?imageMogr2/thumbnail/750x/quality/60/interlace/1/format/webp" alt="" style="width:17.31rem
                "></div>
            </div>
        </div>
        <!-- 第七层 店铺推荐-->
        <div>
            <div>
                <!-- 头 -->
                <p>店铺推荐</p>
                <!-- 产品一 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 产品二 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 产品三 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 展开推荐 -->
                <div>
                    <span></span>
                    <i></i>
                </div>
                <!-- 展开推荐后的关键字 -->
                <div>
                    <!-- 关键字 -->
                    <span></span>
                    <!-- 收起推荐 -->
                    <div>
                        <span></span>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第七层 登录注册返回顶部 -->
        <!-- 其他：点击轮播图页面后产品展示 -->
        <div>
            <div>

            </div>
        </div>
        <!-- 其他：返回顶部按钮 -->
        <div class="return-top">
            
        </div>


        
       
    </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
// import swiperVue from '../common/lunbo.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import footerVue from "../common/footer.vue";
export default {
  name: "detail_introduce",
  data() {
    return {
      //轮播部分
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        // autoplay: true,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          //   type:"custom",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          clickable: true,
          hideOnClick: false
        },
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',//上一张
        // nextButton: '.swiper-button-next',//下一张
        // scrollbar: '.swiper-scrollbar',//滚动条
        // pagination:false,
        mousewheelControl: true,
        observeParents: true,
        oberser: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
      goodslist: {},
      swiperPagination: false,
      commentPage: true
    };
  },
  components: {
    footerVue,
    // swiperVue,
    swiper,
    swiperSlide
  },
  created() {
    axios
      .get("api/goods", {
        params: {
          goodsid: 1021225
        }
      })
      .then(response => {
        console.log(response.data);
        // console.log(this.goodslist)
        this.goodslist = response.data;
        console.log(this.goodslist);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  computed: {
    showimg() {
      if (this.goodslist.goodsImgs.length > 1) {
        return this.loop == true;
        return this.swiperPagination == true;
      }
    },
    commentPageChange() {
      if (this.goodslist.comments) {
        return this.commentPage == false;
      }
    }
  },
  methods: {
    active() {
      this.$refs.navRight.style.color = "black";
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/mixin";
// 第一层
.goods-name {
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  width: 100%;
  background-color: #515150;
  color: #fff;
  .name {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
}
.price-data {
  // position: relative;
  width: 100%;
  height: 2.2rem;
  .border-bottom(#e0e0e0);
  background-color: #fff;
  color: #b0b0b0;
  .current-price {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: 0.25rem;
    color: #d0021b;
    // float: left;
    display: inline-block;
    line-height: 2.2rem;
  }
  .previous-price {
    display: inline-block;
    line-height: 2.2rem;
    // float: left;
  }
}
.card-details {
  padding-left: 0.75rem;
  li {
    float: left;
    margin: 0;
    width: 33.3%;
    height: 2.2rem;
    font-size: 0.55rem;
    .silver-card {
      width: 1.1rem;
      height: 0.8rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: 0 0;
      background-size: 2.8rem 1.8rem;
    }
    .gold-card {
      width: 1.1rem;
      height: 0.8rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: -1.5rem 0;
      background-size: 2.8rem 1.8rem;
    }
    .platinum-card {
      width: 1.1rem;
      height: 0.78rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: 0 -1rem;
      background-size: 2.8rem 1.8rem;
    }
    & span {
      display: inline-block;
      padding-left: 0.2rem;
      padding-top: 0.125rem;
      vertical-align: middle;
      line-height: 2.2rem;
    }
  }
}

.good-discount {
  font-size: 0.7rem;
  color: #444;
  .good-discount-details {
    position: relative;
    padding: 0.75rem 1.5rem 0.75rem 0.75rem;
    line-height: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .promotion-icon {
      background-color: #d0021b;
      color: #fff;
      padding: 0 0.1rem;
      border-radius: 0.1rem;
      margin-right: 0.25rem;
      font-size: 0.55rem;
      float: left;
    }
    .down-arrow {
      background-image: url(./down-arrow.png);
      width: 100%;
      height: 100%;
    }
  }
}
//第二层
.feedback {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  // background-color: #f0f0f0;
  .nav {
    width: 100%;
    padding: 0.25rem 0;
    background-color: #fff;
    //改1px
    border-top: 1px solid #e0e0e0;
    .border-bottom( #e0e0e0);
    overflow: hidden;
    .nav-left {
      box-sizing: border-box;
      float: left;
      width: 50%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      text-align: center;
      color: #b0b0b0;
    }
    .nav-right {
      box-sizing: border-box;
      float: left;
      width: 50%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      text-align: center;
      color: #b0b0b0;
      //改1px
      border-left: 1px solid #e0e0e0;
    }
  }
  //商品评价页面
  .commentPage {
    // display: none;
    .username {
      font-size: 0.6rem;
      line-height: 1.55rem;
      color: #444;
      padding-left: 0.7rem;
      padding-right: 0.45rem;
      float: left;
    }
    .goods-spec {
      color: #444;
      font-size: 0.6rem;
      line-height: 1.55rem;
    }
    .detail-content {
      color: #444;
      font-size: 0.7rem;
      line-height: 0.9rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
    }
    .time {
      width: 100%;
      .border-bottom( #e0e0e0);
      .comment-time {
        color: #c1c1c1;
        font-size: 0.6rem;
        line-height: 1.55rem;
        display: inline-block;
        padding-left: 0.7rem;
      }
    }
  }
  //常见问题页面
  .question-wrap {
    .border-bottom(#e0e0e0);
    // display:none;
    .question {
      padding: 0.5rem 0.7rem;
      background-color: #fff;
      .question-detail {
        font-size: 0.6rem;
        color: #444;
      }
      .answer-detail {
        font-size: 0.6rem;
        line-height: 0.9rem;
        color: #b0b0b0;
        margin-top: 0.35rem;
      }
    }
  }
}
//learnmore
.learnmore {
  display: block;
  min-height: 2.2rem;
  text-align: center;
  background-color: #fff;
  .border-bottom(#e0e0e0);
  line-height: 2.2rem;
  font-size: 0.7rem;
  color: #b0b0b0;
  span {
    color: #b0b0b0;
  }
}
//第三层
.enter-store-wrap {
  .border-bottom(#e0e0e0);
  border-top: 1px solid #e0e0e0;
  .enter-store {
    position: relative;
    overflow: hidden;
    padding: 0 4.5rem 0 2.85rem;
    background-color: #fff;
    .store-pic {
      display: inline-block;
      width: auto;
      height: 1.7rem;
      vertical-align: middle;
    }
    .name {
      color: #444;
      font-size: 0.85rem;
    }
    .store-link {
      position: absolute;
      top: 0.5rem;
      right: 0;
      padding-right: 0.75rem;
      color: #b0b0b0;
      text-align: right;
      font-size: 0.7rem;
    }
  }
}
//第四层
.goods-desc {
  box-sizing: border-box;
  padding: 0 0.7rem;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  h2 {
    border-bottom: 1px solid #e0e0e0;
    color: #444;
    font-size: 0.7rem;
    line-height: 2.2rem;
    span {
      color: #a0a0a0;
      font-size: 0.45rem;
    }
  }
  .detail-table {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.6rem;
    line-height: 0.9rem;
    overflow: hidden;
    .column {
      float: left;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
    }
    .color {
      float: right;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
      overflow: hidden;
    }
    .gender {
      float: left;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
      overflow: hidden;
    }
  }
  .element {
    padding: 0.4rem 0.3rem;
    background-color: #eee;
    color: #444;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }
}
//第六层
.detail {
  margin-top: 1rem;
  .notice {
    font-size: 0.7rem !important;
    color: #444;
    line-height: 1rem !important;
    letter-spacing: 1px;
    word-break: break-all;
  }
  //图片为行间样式
}
.return-top {
  position: absolute;
  top: 1.175rem;
  right: 1.175rem;
  left: auto;
  bottom: auto;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  background: url(https://cdn.yoho.cn/yohobuywap-node/6.6.15/img/product/back-to-top.png?163fdd2c876)
    no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  display: none;
  z-index: 10000;
  position: fixed;
  top: auto;
  left: auto;
  right: 0.75rem;
  bottom: 3.5rem;
  z-index: 9999;
  display: block;
}

//轮播图
.container {
  position: relative;
  width: 100%;
  height: 16.7rem;
  max-height: 16.7rem;
  overflow: hidden;
  // padding-left: 0;

  .swiper {
    position: relative;
    margin: 0.75rem auto;
    width: 11.2rem;
    height: 16.7rem;
    .swiper-slide {
      width: 260px;
      // margin-right: 3px;
      a {
        float: left;
        width: 100%;
        height: 100%;
        text-decoration: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .swiperPagination {
      position: absolute;
      bottom: 2.5rem;
      left: 4rem;
      display: inline-block;
      padding: 0.17rem 0.1rem;
      width: 2.6rem;
      line-height: 1.3;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 1.25rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .my-bullet {
        float: left;
        display: inline-block;
        width: 0.37rem;
        height: 0.37rem;
        border: 1px solid lightgrey;
        border-radius: 50%;
        background: transparent;
      }
      .my-bullet-active {
        background: #ffffff;
      }
    }
  }
}
</style>
