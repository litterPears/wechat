<template>
	<view class="goodDetails">
		<view class="goodSwipers">
			<swiper 
			indicator-dots="true" 
			indicator-color="#eee"
			indicator-active-color="#f4ea2a"
			autoplay="true"
			circular="true"
			:style="{height:swiperHeight+'px'}">
				<swiper-item class="swipersItem">
					<image src="../../static/images/bg05.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item class="swipersItem">
					<image src="../../static/images/bg04.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item class="swipersItem">
					<image src="../../static/images/bg06.jpg" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 商品的题目 -->
		<view class="goodMsgDetails">
			<view class="goodDetailsTitles">香辣小鱿鱼</view>
			<view class='goodDetailshtp'>
				<view>一包装</view>
				<view>230405已购</view>
			</view>
			<view class='goodDetailsPays'>
				<view class="goodDetailsPays parys">
					<text class="iconpays">￥</text>
					<text>30</text>
				</view>
				<view class="paryOld">￥40</view>
			</view>
			<view class='goodList'>
				<view class="goodrules">
					<text>规格：3袋装（200g）</text>
					<icon class="icon iconfont icon-more iconMores"></icon>
				</view>
				<view class="goodrules">
					<text>送至：请选择地址</text>
					<icon class="icon iconfont icon-more iconMores"></icon>
				</view>
				<view class="goodrules">
					<text>服务：正品保证7天无理由退货（无查封）</text>
					<icon class="icon iconfont icon-more iconMores"></icon>
				</view>
			</view>
		</view>
		<view class="goodMessages"></view>
		<view class="goodFlexdDOM"></view>
		<view class="goodFlexed">
			<view class='flexedLeft'>
				<icon class="icon iconfont icon-shouye iconhome"></icon>
				<icon class="icon iconfont icon-fenxiang iconhome"></icon>
				<icon class="icon iconfont icon-gouwuche iconhome"></icon>
			</view>
			<view class='flexedright'>购买</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				swiperHeight:""
			}
		},
		mounted(){
			let screenWidth = wx.getSystemInfoSync().windowWidth;
			this.swiperHeight = screenWidth;
		}
	}
</script>

<style>
	.goodDetails{
		width:100%;
		min-height:100vh;
		background:#eee;
	}
	.goodSwipers{
		width:100%;
		height:auto;
		background:#B2EAF2;
	}
	.swipersItem{
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.goodMsgDetails{
		padding:20rpx;
		background:#fff;
	}
	.goodDetailsTitles{
		lin-height:60rpx;
		font-size:28rpx;
		color:#000;
		letter-spacing:0.8rpx;
		text-align:justify;
		font-weight:600;
	}
	.goodDetailshtp{
		display:flex;
		justify-content:space-between;
		text-align:center;
		line-height:40rpx;
		font-size:24rpx;
		color:#999;
		margin:20rpx 0 10rpx 0;
		padding:0 10rpx 0 5rpx;
	}
	.goodDetailsPays{
		height:60rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.parys{
		font-size:45rpx;
		color:#d81e06;
		margin-right:20rpx;
	}
	.iconpays{
		font-size:23rpx;
		margin-top:18rpx;
	}
	.paryOld{
		font-size:26rpx;
		color:#9a9a9a;
		text-decoration-line: line-through;
		margin-top:10rpx;
		letter-spacing:0.5rpx;
	}
	.goodList{
		padding:15rpx 0 10rpx 0;
	}
	.goodrules{
		display:flex;
		justify-content:space-between;
		align-items: center;
		height:68rpx;
		line-height:68rpx;
		font-size:26rpx;
		color:#333;
	}
	.iconMores{
		color:#888;
	}
	.goodMessages{
		margin-top:30rpx;
		height:1000rpx;
		background:#fff;
	}
	.goodFlexdDOM{
		width:100%;
		height:120rpx;
	}
	.goodFlexed{
		width:100%;
		height:120rpx;
		position:fixed;
		bottom:0;
		left:0;
		z-index:10;
		background:#fff;
		border-top:2rpx solid #eee;
		box-shadow:-20rpx 5rpx 20rpx #eee;
		display:flex;
		justify-content:space-between;
		align-items: center;
	}
	.flexedright{
		width:300rpx;
		height:80rpx;
		line-height:80rpx;
		text-align:center;
		border-radius:40rpx;
		background:#d81e06;
		font-size:36rpx;
		color:#fff;
		margin-right:25rpx;
	}
	.flexedLeft{
		margin-left:25rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.iconhome{
		font-size:50rpx;
		color:#9a9a9a;
		margin-right:30rpx;
	}
</style>
