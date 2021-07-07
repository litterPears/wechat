<template>
	<view class='specialDishes'>
		<view class='specialMaps'>
			<echartChina></echartChina>
		</view>
		<featuredList></featuredList>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.specialDishes{
		background:#eee;
		min-height:100vh;
	}
	.specialMaps{
		height:780rpx;
		backgeround:#d81e06;
	}
</style>
