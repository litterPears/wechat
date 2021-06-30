<template>
	<view class="searchAddress">
		<view class='searchFor'>
			<icon class="icon iconfont icon-soushuo iconSreach"></icon>
			<input class="inputWorld" type="text" placeholder="请输入商品名称/口味" />
		</view>
		<view class="address">
			<icon class="icon iconfont icon-xiaoxi icon-message"></icon>
			<text class="messageText">12</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.searchAddress{
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:15rpx 20rpx;
		background:#B2EAF2;
	}
	.address{
		width:100rpx;
		height:80rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		position:relative;
		top:0;
		left:0;
		z-index:3;
	}
	.icon-message{
		font-size:40rpx;
		color:#888;
	}
	.messageText{
		position:absolute;
		top:3rpx;
		left:60rpx;
		z-index:5;
		font-size:23rpx;
		color:#666;
		padding:5rpx;
		background:#eee;
		border-radius:50%;
	}
	.searchFor{
		height:80rpx;
		width:calc(100% - 100rpx);
		display:flex;
		justify-content:flex-start;
		align-items:center;
		border:1rpx solid #eee;
		border-radius:15rpx;
		background:#fff;
	}
	.iconSreach{
		width:30rpx;
		height:80rpx;
		line-height:80rpx;
		font-size:30rpx;
		color:#aaa;
		margin:0 15rpx 0 15rpx;
	}
	.inputWorld{
		width:80%;
		height:80rpx;
		line-height:80rpx;
		font-size:26rpx;
		color:#333;
	}
</style>
