<template>
	<view class="swiperDoms">
		<swiper 
		class="swiperContent"
		:indicator-dots="indicatorDots"
		indicator-color="#fff"
		indicator-active-color="#B2EAF2"
		:autoplay="autoplay"
		:circular="circular">
			<swiper-item>
				<view class="swiperImg">
					<image src="../../static/images/bg04.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiperImg">
					<image src="../../static/images/bg09.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiperImg">
					<image src="../../static/images/bg06.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				indicatorDots:true,
				autoplay:true,
				circular:true,
				
			}
		}
	}
</script>

<style>
	.swiperDoms{
		margin:10rpx 15rpx;
		height:300rpx;
		border-radius:15rpx;
		background:#B2EAF2;
	}
	.swiperImg{
		border-radius:15rpx;
		height:300rpx;
		text-align:center;
		display:flex;
		justify-content:center;
		align-items:center;
	}
</style>
