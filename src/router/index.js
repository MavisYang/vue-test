import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import RegisterMain from "@/components/registerProtal/registerMain"
// import Test from "@/components/test"
// 分包引入方式
const HelloWorld = () => import('@/components/HelloWorld')
const RegisterMain = () => import("@/components/registerProtal/registerMain")
const Test = () => import("@/components/test")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'RegisterMain',
      component: RegisterMain
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
