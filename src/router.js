import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from './views/personalCenter/personalCenter'
import Index from './views/index'
import Search from './views/search/search'
import SignIn from './views/signIn'
import List from './components/common/list/list'
import ListToCate from './views/lcate'
import Shop from './views/shop'
//新品到着页面
import New from './views/new'
import SignUp from './views/signUp/signUp'
import International from './views/international'
import Sms from './views/sms'
import Cate from './views/cate/cate'
import Xm from './views/xm'
Vue.use(Router)

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
          component:Search,
          children:[
              {
                  path:"list",
                  name:"list",
                  component:List
              }
          ]
      },
      //店铺的页面
      {
       path:'/shop/:sellerName',
       name:"shop",
       component: Shop
      },
      //新品到着页面
      {
          path:'/lifestyle-new',
          name:'new',
          component:New
      },
      //分类页面
      {
          path: '/cate',
          name:'cate',
          component:Cate
      },
      //分类页面跳到的搜索页面
      {
          path:'/list',
          component:ListToCate
      }
  ]
})
