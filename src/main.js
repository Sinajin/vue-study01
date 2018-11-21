import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function(dataStr,pattern ="YYYY-MM-DD HH:mm:ss" ){
    return moment(dataStr).format(pattern)
})


// 导入app根组件
// 导入Mint-UI中的组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name, Header)
// 轮播图
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)

// 导入router.js路由模块
import router from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899';

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂在路由对象到实例
})