import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 导入app根组件
// 导入Mint-UI中的组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
// 轮播图
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入router.js路由模块
import router from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂在路由对象到实例
})