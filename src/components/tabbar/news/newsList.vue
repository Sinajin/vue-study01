<template>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h5>{{item.title}}</h5>
							<p class="mui-ellipsis">
							<span>发表时间:{{item.add_time | dateFormat}}</span>
							<span>点击:{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
				

			</ul>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
		return {
			newsList:[]
		}
	},
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result =>{
				if(result.body.status ===0){
					this.newsList = result.body.message;

					console.log(this.newsList)
				}else{
					Toast('获取新闻列表失败')
				}
			})
        }
    }

}
</script>
<style lang="less">
	.mui-media-body{
		h5{
			color:black;
			font-weight:600;
		}
		.mui-ellipsis{
				display:flex;
				justify-content : space-between;
				font-size:13px;
				color:darkgray;
		
		}
	}
</style>


