<template>
    <div>
        <!-- 未登录页面 -->
        <div>
            <!-- 购物车头部 -->
            <header>
                <i></i>
                <span>购物车</span>
            </header>
            <!-- 购物车内容 -->
            <div class="unregistered">
                <!-- 请先登录 -->
                <div class="warning">
                    <i class="icon-notification"
                    ></i> 
                    <!-- 转登录页面 -->
                    <span>请您先<a href="###">登录</a>可以同步电脑和手机中的商品</span>
                </div>
                <!-- 购物车 -->
                <div class="unregistered-cart">
                    <div>
                        <i class="icon-cart"></i>
                        <p>您的购物车暂无商品</p>
                        <a href="###">随便逛逛</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "cart"
};
</script>

<style scoped lang="less">
@import "../../assets/css/style.css";
// 购物车头部
header {
  height: 2.625rem;
  line-height: 2.625rem;
  background: #4f4138;
  i {
    background: url(./left-arrow.png) no-repeat;
    width: 1rem;
    height: 1.2rem;
    display: inline-block;
    margin-left: 1rem;
  }
  span {
    margin-right: 2.925rem;
    margin-left: 5.925rem;
    font-size: 1.05rem;
    font-weight: 400;
    display: inline-block;
    color: #fff;
    vertical-align: middle;
    margin-top: -0.2rem;
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
