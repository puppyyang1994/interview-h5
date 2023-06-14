import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Detail from '@/views/Detail'
import Register from '@/views/Register'

// 引入二级路由
import Like from '@/views/Like'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import User from '@/views/User'

Vue.use(VueRouter)

const routes = [
 
]

const router = new VueRouter({
  routes:[
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/article:id', component: Detail},
    {path:'/', 
    component: Layout, 
    redirect:'/article',
    children:[
        { path: 'article', component: Article },
        { path: 'like', component: Like },
        { path: 'collect', component: Collect },
        { path: 'user', component: User }
    ]
  }
    
  ]
})

export default router
