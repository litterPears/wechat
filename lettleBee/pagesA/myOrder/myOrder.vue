<template>
	<view class="myOrder">
		<view class="myOrderTabs">
			<view class="tabs" 
			v-for="(items,index) of orderList" 
			:key="items.id" 
			v-text="items.world"
			:class="{'tabsAcitve':items.id == itemId}"
			@click="targetClick(items.id)"></view>
		</view>
		<view class="myOrderList">
			<view class="orderlist" @click="orderTarget">
				<view class="orderTime">
					<text class="time">2021-6-7</text>
					<text class="status">交易成功</text>
				</view>
				<view class="listIcons">
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<view class="listMore">
						<text>更多</text>
						<icon class="icon iconfont icon-more iconMoreright"></icon>
					</view>
				</view>
				<view class="orderPays">总20件商品，合计：￥104.09</view>
				<view class='orderpaymoney'>
					<view class="delectOrder">删除订单</view>
				</view>
			</view>
			<view class="orderlist" @click="orderTarget">
				<view class="orderTime">
					<text class="time">2021-6-7</text>
					<text class="status">交易成功</text>
				</view>
				<view class="listIcons">
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<view class="listMore">
						<text>更多</text>
						<icon class="icon iconfont icon-more iconMoreright"></icon>
					</view>
				</view>
				<view class="orderPays">总20件商品，合计：￥104.09</view>
				<view class='orderpaymoney'>
					<view class="delectOrder">删除订单</view>
				</view>
			</view>
			<view class="orderlist" @click="orderTarget">
				<view class="orderTime">
					<text class="time">2021-6-7</text>
					<text class="status">交易成功</text>
				</view>
				<view class="listIcons">
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<image class="images" src="../../static/images/bg02.jpg" mode="widthFix"></image>
					<view class="listMore">
						<text>更多</text>
						<icon class="icon iconfont icon-more iconMoreright"></icon>
					</view>
				</view>
				<view class="orderPays">总20件商品，合计：￥104.09</view>
				<view class='orderpaymoney'>
					<view class="delectOrder">删除订单</view>
				</view>
			</view>
		</view>
		<!-- <view class="noOrders">
			<image class="noneImgs" src="../../static/images/none.png" mode="widthFix"></image>
			<view class="noneWorlds">暂无订单</view>
		</view> -->
	</view>
</template>

<script>
	import { orderWorld } from "../../utils/json.js";
	export default{
		data(){
			return{
				itemId:0,
				orderList:orderWorld
			}
		},
		onLoad(options){
			this.itemId = options.numb;
		},
		methods:{
			targetClick(id){
				this.itemId = id;
			},
			orderTarget(){
				wx.navigateTo({
					url:'/pagesA/orderDetail/orderDetail'
				})
			}
		}
	}
</script>

<style>
	.myOrder{
		width:100%;
		min-height:100vh;
		background:#f8f8f8;
	}
	.myOrderTabs{
		width:100%;
		height:80rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		background:#fff;
		box-shadow:8rpx 10rpx 10rpx #eee;
	}
	.myOrderTabs .tabs{
		width:20%;
		height:76rpx;
		line-height:76rpx;
		border-bottom:4rpx solid #fff;
		text-align:center;
		font-size:28rpx;
		color:#333;
	}
	.myOrderTabs .tabsAcitve{
		border-bottom:4rpx solid #d81e06;
		color:#d81e06;
	}
	.myOrderList{
		width:100%;
		min-height:calc(100vh - 82rpx);
		padding:2rpx 0 30rpx 0;
	}
	.orderlist{
		padding:20rpx 30rpx;
		margin-bottom:25rpx;
		background:#fff;
	}
	.orderTime{
		height:60rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.orderTime .time{
		font-size:25rpx;
		color:#707070;
	}
	.orderTime .status{
		font-size:27rpx;
		color:#d81e06;
	}
	.listIcons{
		height:180rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		margin:18rpx 15rpx;
	}
	.images{
		width:23%;
		margin-right:20rpx;
		border-radius:8rpx;
	}
	.listMore{
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:26rpx;
		color:#8a8a8a;
		width:20%;
		height:160rpx;
		border-radius:10rpx;
		background:#efefef;
	}
	.iconMoreright{
		display:flex;
		text-align:center;
		font-size:26rpx;
		color:#8a8a8a;
		margin-top:3rpx;
	}
	.orderPays{
		display:flex;
		justify-content:flex-end;
		align-items:center;
		height:66rpx;
		line-height:66rpx;
		font-size:27rpx;
		color:#000;
	}
	.orderpaymoney{
		display:flex;
		justify-content:flex-end;
		align-items:center;
		height:80rpx;
	}
	.delectOrder{
		padding:5rpx 32rpx;
		line-height:40rpx;
		height:40rpx;
		text-align:center;
		font-size:25rpx;
		color:#222;
		border:1rpx solid #666;
		border-radius:30rpx;
		letter-spacing:0.5rpx;
	}
	
	
	
	
	.noOrders{
		width:100%;
		height:600rpx;
		overflow: hidden;
	}
	.noneImgs{
		width:260rpx;
		margin:200rpx auto 20rpx;
		display:block;
	}
	.noneWorlds{
		height:50rpx;
		line-height:50rpx;
		text-align:center;
		font-size:26rpx;
		color:#8a8a8a;
		letter-spacing:1rpx;
	}
</style>
