<template>
    <div class="goodsinfo-container">
        <transition name="gaoxuan" @before-enter="beforeEnter" 
        @enter="enter"
        @after-enter = "afterEnter"
        >
             <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
       
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :bannerList="bannerList" :isfull="false"></swiper>
					</div>
				</div>
			</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="prive">
                            市场价: <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now-price">￥{{ goodsinfo.sell_price }}</span>
                        </p>
                        <p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
                            
                        </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopcar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header" >商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{ goodsinfo.goods_no }}</p>
						<p>库存情况:{{ goodsinfo.stock_quantity }}</p>
                        <p>上架时间:{{ goodsinfo.add_time | dateFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain  @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain  @click="goComment(id)">商品评论</mt-button>
				</div>
			</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsInfo_number.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            bannerList:[],
            goodsinfo:{},
            ballFlag:false,
            selectedCount:1
        }      
       
    },
    created(){
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/' +this.id).then(result =>{
                if(result.body.status ===0){
                    result.body.message.forEach(item =>{
                        item.img = item.src;
                    })
                    this.bannerList = result.body.message;
                    // console.log(this.bannerList);
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(result =>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0];
                } 
            })
        },
         goDesc(id){
        // 点击进入如图文介绍页面
        this.$router.push("/home/goodsdesc/" + id);
            },
        goComment(id){
        this.$router.push("/home/goodsComment/" + id);
        },
        addToShopcar(){
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el, done){
            el.offsetWidth;
            // 获取小球在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
           const badgePosition = document
            .getElementById("badge")
            .getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;


            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
            console.log('父组件拿到了子组件传过来的值' + this.selectedCount);
        }
    },
  
    components:{
        swiper,
        numbox
    }

}
</script>

<style lang="less">
    .goodsinfo-container{
        background-color: #eee;
        overflow:hidden;
    }
    .now-price{
        color:red;
        font-size:14px;
        font-weight:bold;
    }
    .mui-card-footer{
        display:block;
        button{
            margin:13px 0;
        }
    }
    .ball{
        width:15px;
        height:15px;
        border-radius:50%;
        background-color: red;
        position:absolute;
        z-index:99;
        top:408px;
        left:80px;
    }
</style>


