<template>
    <div class="app-container">
        <!-- 顶部区域 -->
        <mt-header fixed title="Vue-test"></mt-header>
         <!-- 底部区域 -->
         <nav class="mui-bar mui-bar-tab">

				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        <!-- 中间路由区域 -->
		<transition>
			<router-view></router-view>
		</transition>	
       
    </div>
</template>
<script>

</script>
<style>

	overflow-X:hidden;
}
.v-enter{
	opacity:0;
	transform:translateX(100%);
}
.v-leave-to{
	position:absolute;
	opacity:0;
	transform:translateX(-100%);
}
.v-enter-active,
.v-leave-active{
	transition:all 0.5s ease;
}

</style>


