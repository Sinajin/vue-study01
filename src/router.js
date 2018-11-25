import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/tabbar/news/newsList.vue'
import newsInfo from './components/tabbar/news/newsInfo.vue'
import photoList from './components/tabbar/photos/photoList.vue'
import photoInfo from './components/tabbar/photos/photoInfo.vue'
import goodsList from './components/tabbar/goods/goodsList.vue'
import goodsInfo from './components/tabbar/goods/goodsInfo.vue'
import goodsdesc from './components/tabbar/goods/goodsdesc.vue'
import goodsComment from './components/tabbar/goods/goodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    {path:'/home/newsList',component:NewsList},
    {path:'/home/newsInfo/:id',component:newsInfo},
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoInfo/:id',component:photoInfo},
    {path:'/home/goodsList',component:goodsList},
    {path:'/home/goodsInfo/:id',component:goodsInfo,name:'goodsInfo'},
    {path:'/home/goodsdesc/:id',component:goodsdesc},
    {path:'/home/goodsComment/:id',component:goodsComment}

  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router