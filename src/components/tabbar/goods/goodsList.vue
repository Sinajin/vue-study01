<template>
    <div class="goods-list">
       <div class="goods-item" v-for ="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
           <h1 class="title">{{item.title}}</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥{{item.sell_price}}</span>
                   <span class="old">￥{{item.market_price}}</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩{{item.stock_quantity}}件</span>
               </p>
           </div>
       </div>
       <mt-button type="danger" size="large"  @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageindex:1,
            goodsList:[
                // {img_url:"//img13.360buyimg.com/n7/jfs/t17020/201/944739311/43673/1c838228/5ab25955Ned1a1c02.jpg",
                // title:"华为荣耀,照亮你的美",
                // sell_price:3399,
                // market_price:3799,
                // stock_quantity:35
                // },
                // {img_url:"//img11.360buyimg.com/n7/jfs/t7954/295/2739318795/324650/5eb51634/59dc6704N7c82222c.jpg",
                //  title:"华为荣耀,你值得拥有",
                // sell_price:1399,
                // market_price:3699,
                // stock_quantity:39
                // },
                // {img_url:"//img12.360buyimg.com/n7/jfs/t18961/90/1109264753/173069/676b99ad/5abc8d2dNa4cc5eac.jpg",
                //  title:"华为荣耀,这个手机又大又圆",
                // sell_price:399,
                // market_price:3799,
                // stock_quantity:35
                // },
                //  {img_url:"//img12.360buyimg.com/n7/jfs/t18961/90/1109264753/173069/676b99ad/5abc8d2dNa4cc5eac.jpg",
                //  title:"华为荣耀,这个手机又大又圆",
                // sell_price:399,
                // market_price:3799,
                // stock_quantity:35
                // },
                //  {img_url:"//img13.360buyimg.com/n7/jfs/t17020/201/944739311/43673/1c838228/5ab25955Ned1a1c02.jpg",
                // title:"华为荣耀,照亮你的美",
                // sell_price:3399,
                // market_price:3799,
                // stock_quantity:35
                // },
                //  {img_url:"//img12.360buyimg.com/n7/jfs/t18961/90/1109264753/173069/676b99ad/5abc8d2dNa4cc5eac.jpg",
                //  title:"华为荣耀,这个手机又大又圆",
                // sell_price:399,
                // market_price:3799,
                // stock_quantity:35
                // },
                //  {img_url:"//img13.360buyimg.com/n7/jfs/t17020/201/944739311/43673/1c838228/5ab25955Ned1a1c02.jpg",
                // title:"华为荣耀,照亮你的美",
                // sell_price:3399,
                // market_price:3799,
                // stock_quantity:35
                // },
                //  {img_url:"//img12.360buyimg.com/n7/jfs/t18961/90/1109264753/173069/676b99ad/5abc8d2dNa4cc5eac.jpg",
                //  title:"华为荣耀,这个手机又大又圆",
                // sell_price:399,
                // market_price:3799,
                // stock_quantity:35
                // }
          
            ]
        };
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result=>{
                if(result.body.status ===0){
                    this.goodsList = this.goodsList.concat(result.body.message);
                    // console.log(this.goodsList);
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            // 使用js的形式进行路由导航
            // this.$router.push({name:"goodsinfo",params:{id}});
            this.$router.push("/home/goodsInfo/" + id);
        }

    }

}
</script>

<style lang="less">
    .goods-list{
        display:flex;
        flex-wrap:wrap;
        padding:  7px;
        justify-content: space-between;

        .goods-item{
            width:49%;
            border:1px solid #ccc;
            box-shadow:0 0 8px #ccc;
            margin: 4px 0;
            padding:2px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            min-height:293px;
            img{
                width:100%;
            }
            .title{
                font-size:14px;
            }
            .info{
                background-color: #eee;
                padding:2px;
                .price{
                    .now{
                        color:red;
                        font-weight:bold;
                        font-size:16px;
                    }
                    .old{
                        text-decoration:line-through;
                        font-size:12px;
                        margin-left:10px;
                    }
                }
                .sell{
                    display:flex;
                    justify-content:space-between;
                    font-size:12px;
                }
            }
        }
    }
    
</style>


