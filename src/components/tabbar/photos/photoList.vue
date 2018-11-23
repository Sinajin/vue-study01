<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item' ,item.id===0? 'mui-active':'']" 
                        v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(cateId)"
                         data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>
						
					</div>
				</div>

		</div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link class="imgInfo"  v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
            <!-- <img src="../images/car.jpg" alt=""> -->
            <img v-lazy="'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg'">
            <div class="info">
                <h1 class="info-title">{{item.title}}</h1>
                <div class="info-body">{{item.zhaiyao}}</div>
            </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.min.js';
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// })
export default{
    data(){
        return {
            cates:[],
            list:[
            ]
        }

    },
    created(){
       this.getAllCategory();
    //    默认进入页面请求所有图片
       this.getPhotoListByCateId(0);
    },
    mounted(){//当组件中的DOM结构被渲染好并放到页面中的时候
        mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    },
    methods:{
        getAllCategory(){
            this.$http.get("api/getimgcategory").then(result =>{
                if(result.body.status ===0){
                    result.body.message.unshift({title:"全部",id:0})
                    this.cates = result.body.message;
                }
            })
        },
        getPhotoListByCateId(cateId){
           // 根据分类id获取图片列表
            this.$http.get("api/getimages/" + cateId).then(result =>{
                if(result.body.status ===0){
                    this.list = result.body.message;
                    // console.log(this.list);
                }
            })
        }
    }
    
}
</script>

<style lang="less">
*{
    touch-action: none;
}
.photo-list{
    margin:0;
    padding:10px;
    li{
    text-align:center;
    list-style:none;
    margin-bottom:10px;
    box-shadow:0 0 6px #999;
    background-color:papayawhip;
    position:relative;

       
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin:auto;
            // background-color:skyblue;
            }
        .imgInfo{
            width: 100%;
            >img{
                width: 100%;
                vertical-align:middle;
            }
        }
        .info{
            margin:0 20px;
            color:white;
            text-align:left;
            position:absolute;
            bottom:0;
            background-color:rgba(0,0,0,0.4);
            max-height:84px;
            .info-title{
                font-size:14px;
            }
            .info-body{
                font-size:13px;
                overflow: hidden;
                // white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
   
}


</style>


