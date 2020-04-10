import Vue from 'vue'
import Router from 'vue-router'

import LoginIndex from '@/components/Login/index'
import Login from '@/components/Login/login'
import Register from '@/components/Login/register'
import ForgetPass from '@/components/Login/forgetPass'
import ChangePass from '@/components/Login/changePass'

// 门户系统
import Portal from '@/components/Portal/portal'
//  门户首页
import PortalIndex from '@/components/Portal/index'
//  最新资讯
import LatestNews from '@/components/Portal/latestnews'
Vue.use(Router)

export const constantRouterMap = [
  // 登录系统
  {
    // 登录总页面
    path: '/login',
    name: 'LoginIndex',
    component: LoginIndex,
    redirect: '/login/index',
    children: [
      {
        // 登录
        path: 'index',
        name: 'Login',
        component: Login
      },
      {
        // 注册
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        // 忘记密码
        path: 'forgetPass',
        name: 'ForgetPass',
        component: ForgetPass
      },
      {
        //修改密码
        path: 'changePass',
        name: 'ChangePass',
        component: ChangePass
      }
    ]
  },
  // 门户系统
  {
    path: '/portal',
    name: 'portal',
    component: Portal,
    redirect: '/portal/index',
    children: [
      {
        // 首页
        path: 'index',
        name: 'portalIndex',
        component: PortalIndex
      },
      {
        //最新资讯
        path:'latestnews',
        name:'latestnews',
        component:LatestNews
      }
    ]
  },
  {
    path:'/',
    redirect: '/portal/index',
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

]


