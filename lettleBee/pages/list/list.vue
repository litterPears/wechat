<template>
	<view class='specialDishes'>
		<view class='specialMaps'>
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude"></map>
		</view>
		<featuredList></featuredList>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				latitude: 39.909,
				longitude: 116.39742,
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
		width:100%;
		height:600rpx;
		backgeround:##d81e06;
	}
</style>
