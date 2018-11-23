<template>
    <div class="photoinfo-container">
        <h3>{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
            <span>点击: {{photoInfo.click}}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
       <div class="thumbs">
           <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
       </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoInfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoInfo:{},
            list:[
                {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg",
                w:600,
                h:400
                },
                {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg",
                w:600,
                h:400
                },
                {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg",
                w:600,
                h:400
                },
                {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg",
                w:600,
                h:400
                },
                 {src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017084271,1312577123&fm=26&gp=0.jpg",
                w:600,
                h:400
                }
           ]//缩略图数据
        };
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/' + this.id).then(result =>{
                if(result.body.status ===0){
                    this.photoInfo = result.body.message[0];
                    // console.log(this.photoinfo);
                }
            })
        },
        getThumbs(){
            // this.$http.get('api/getthumimages/'+this.id).then(result =>{
            //     if(result.body.status ===0){
            //         // 循环每个图片的数据,补全图片的宽和高
            //         result.body.message.forEach(item=>{
            //             item.w = 600
            //             item.h = 400
            //         });
            //         this.list = result.body.message;
            //     }
            // })
        }
    },
    components:{
        // 注册评论子组件
        'cmt-box':comment
    }
}
</script>

<style lang="less">
    .photoinfo-container{
        padding:3px;
        h3{
            color:#26a2ff;
            font-size:15px;
            text-align:center;
            margin: 15px 0;
        }
        .subtitle{
            display:flex;
            justify-content:space-between;
            font-size:13px;
        }
        .content{
            font-size:13px;
            line-height:30px;
        }
    }
    .thumbs{
        img{
            margin:10px;
            box-shadow:0 0 8px #999;
        }
    }
</style>


