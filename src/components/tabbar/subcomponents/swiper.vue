<template>
    <div>
           <mt-swipe class="binner-container" :auto="4000">
               <!-- lunbotuList应该是父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
             <a :href="item.url">
                <img :src="item.img" alt="" :class="{full:isfull}">
            </a>
  </mt-swipe-item>

</mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["bannerList" , "isfull"]
}
</script>

<style lang="less">
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color:#eee;
        }
         &:nth-child(2){
            background-color:#eee;
        }
         &:nth-child(3){
            background-color:#eee;
        }
        a{
            display:block;
            width:100%;
            height:100%;
             text-align:center;
            img{
                height:100%;
               
            }
           
        }
        .full{
            width:100%;
        }
    }
}

</style>


