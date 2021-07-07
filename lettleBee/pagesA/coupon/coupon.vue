<template>
	<view class="couponList">
		<view class="couponTabs">
			<view class="couponImgs">
				<view class="couponIcons">通用</view>
				<view class="couponMoney">
					<text class="conIcon">￥</text>
					<text>20.00</text>
				</view>
				<view class="rules">满99.00可用</view>
			</view>
			<view class="couponTexts">
				<view class="couponTitle">全场通用券</view>
				<view class="couponTime">有效期至2021-09-15 8:23</view>
			</view>
			<view class='couponuse'>使用</view>
		</view>
		<view class="couponTabs">
			<view class="couponImgs">
				<view class="couponIcons">通用</view>
				<view class="couponMoney">
					<text class="conIcon">￥</text>
					<text>20.00</text>
				</view>
				<view class="rules">满99.00可用</view>
			</view>
			<view class="couponTexts">
				<view class="couponTitle">全场通用券</view>
				<view class="couponTime">有效期至2021-09-15 8:23</view>
			</view>
			<view class='couponuse'>使用</view>
		</view>
		<view class="couponTabs">
			<view class="couponImgs">
				<view class="couponIcons">通用</view>
				<view class="couponMoney">
					<text class="conIcon">￥</text>
					<text>20.00</text>
				</view>
				<view class="rules">满99.00可用</view>
			</view>
			<view class="couponTexts">
				<view class="couponTitle">全场通用券</view>
				<view class="couponTime">有效期至2021-09-15 8:23</view>
			</view>
			<view class='couponuse'>使用</view>
		</view>
		<view class="couponTabs">
			<view class="couponImgs">
				<view class="couponIcons">通用</view>
				<view class="couponMoney">
					<text class="conIcon">￥</text>
					<text>20.00</text>
				</view>
				<view class="rules">满99.00可用</view>
			</view>
			<view class="couponTexts">
				<view class="couponTitle">全场通用券</view>
				<view class="couponTime">有效期至2021-09-15 8:23</view>
			</view>
			<view class='couponuse'>使用</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style>
	.couponList{
		width:100%;
		min-height:100vh;
		background:#eee;
		overflow:hidden;
	}
	.couponTabs{
		margin:20rpx 20rpx 10rpx;
		background:#fff;
		box-shadow:8rpx 10rpx 15rpx #eee;
		height:200rpx;
		border-radius:8rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.couponImgs{
		width:220rpx;
		height:200rpx;
		background:#ec6c59;
		border-radius:5rpx;
	}
	.couponIcons{
		width:80rpx;
		height:30rpx;
		lin-height:30rpx;
		text-align:center;
		font-size:20rpx;
		color:#fff;
		background:#d81e06;
		letter-spacing:0.7rpx;
		border-radius:5rpx;
	}
	.couponMoney{
		display:flex;
		justify-content:center;
		align-items:center;
		height:80rpx;
		line-height:80rpx;
		text-align:center;
		font-size:45rpx;
		color:#fff;
		margin-top:20rpx;
	}
	.conIcon{
		font-size:20rpx;
		margin-top:10rpx;
	}
	.rules{
		line-height:40rpx;
		text-align:center;
		font-size:25rpx;
		color:#fff;
	}
	.couponTexts{
		width:calc(100% - 420rpx);
		padding-left:25rpx;
	}
	.couponTitle{
		line-height:80rpx;
		font-size:30rpx;
		color:#000;
	}
	.couponTime{
		line-height:40rpx;
		font-size:23rpx;
		color:#999;
	}
	.couponuse{
		height:50rpx;
		line-height:50rpx;
		text-align:center;
		padding:0 30rpx;
		font-size:23rpx;
		border:1rpx solid #d81e06;
		border-radius:30rpx;
		color:#d81e06;
		margin-left:20rpx;
	}
</style>
