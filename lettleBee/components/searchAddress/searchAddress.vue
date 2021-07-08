<template>
	<view class="searchAddress">
		<view class='searchFor'>
			<icon class="icon iconfont icon-search iconSreach"></icon>
			<input class="inputWorld" type="text" @blur="blurInputs" placeholder="请输入商品名称/口味" />
			<view class="searchworlds">搜索</view>
		</view>
		<view class="address" @click="messageTag">
			<icon class="icon iconfont icon-xiaoxi icon-message"></icon>
			<text class="messageText">12</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			blurInputs(){
				wx.navigateTo({
					url:"/pagesA/searchList/searchList"
				})
			},
			messageTag(){
				wx.navigateTo({
					url:"/pagesA/message/message"
				})
			}
		}
	}
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
		justify-content:space-between;
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
		width:62%;
		height:60rpx;
		line-height:80rpx;
		font-size:26rpx;
		color:#333;
	}
	.searchworlds{
		height:50rpx;
		line-height:50rpx;
		text-align:center;
		padding:0 30rpx;
		font-size:24rpx;
		color:#fff;
		background:#ee7d5c;
		border-radius:15rpx;
		margin-right:15rpx;
		margin-left:2rpx;
	}
</style>
