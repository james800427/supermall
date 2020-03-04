import Vue from 'vue'
import VueRouter from 'vue-router'

//使用箭头函数懒加载组件
const Home = () => import('../components/pages/Home')
const Category = () => import('../components/pages/Category')
const Cart = () => import('../components/pages/Cart')
const Profile = () => import('../components/pages/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router  = new VueRouter({
  routes,
  mode: 'history'
})

export default router
  