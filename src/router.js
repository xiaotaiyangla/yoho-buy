import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import PersonalCenter from './views/personalCenter/personalCenter'
import Index from './views/index'
import Search from './views/search/search'
import SignIn from './views/signIn'
import SignUp from './views/signUp/signUp'
import International from './views/international'
import Sms from './views/sms'
import Cate from './views/cate/cate'
import BringStockCenter from './views/OneFloorPart/BringStockCenter'
//待修改
import New from './views/new' //新品到着
import BSC2 from './views/OneFloorPart/BSC2'//领劵中心子页
import Coupons from './views/OneFloorPart/coupons'//查看我优惠券页
import TOIS from './views/thirdFloorPart/TOIS' //热门品牌中TOIS
import HotBrand from './views/thirdFloorPart/hotBrandShuff' //热门品牌中Cheett
import BNS from './views/thirdFloorPart/BSN' //热门品牌中BNS

export default new Router({
  mode:"history",
  routes: [
      {
        path:'/',
        redirect:'/index'
      },
      //首页路由
      {
          path:'/index',
          name:'index',
          component:Index
      },
      //个人中心路由
      {
          path:'/personalCenter',
          name:'personalCenter',
          component: PersonalCenter,
      },
      //登录页面
      {
          path:'/signIn',
          name:'signIn',
          component:SignIn,
          children:[
              {
                  path:'international',
                  name:'international',
                  component:International
              },
              {
                  path:'sms_signIn',
                  name:'sms',
                  component:Sms
              },

          ]
      },
      //注册页面
      {
          path:'/signUp',
          name:'signUp',
          component:SignUp
      },
      //搜索页面路由
      {
          path:'/search',
          name:'search',
          component:Search
      },
      //新品到着页面
      {
          path:'/lifestyle-new',
          name:'new',
          component:New
      },
      //领劵中心 该路由只用来呈现页面方便铺页面，待修改
      {
          path:'/stock',
          name:'BringStockCenter',
          component:BringStockCenter,
          children:[
              {
                  path:'travel',
                  name:'BSC2',
                  component:BSC2
              }
          ]
      },
      //领劵中心中点击查看我的优惠券跳转到:"优惠券"页面
      {
        path:'/coupons',
        name:'coupons',
        component: Coupons,
      },
      //热门品牌TOIS
      {
          path:'/tois',
          name:'TOIS',
          component:TOIS
      },
      //热门品牌Chett
      {
          path:'/hotbrand',
          name:'hotBrandShuff',
          component:HotBrand
      },
      //热门品牌BSN
      {
          path:'/bns',
          name:'BNS',
          component:BNS
      },
      //分类页面
      {
          path: '/cate',
          name:'cate',
          component:Cate
      }
  ]
})
