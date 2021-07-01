<template>
	<view class="meDomss">
		<view class="meIconName">
			<view class="preson">
				<view class="personImg"></view>
				<view class="personName">小豌豆</view>
			</view>
		</view>
		<view class="personFlows">
			<view class="personOrder">
				<view class='orderList'>
					<text>我的订单</text>
					<view class='ordermore'>查看更多订单 ></view>
				</view>
				<view class='orderflowss'>
					<view class="orderTab">
						<view class="orderNum">12</view>
						<view class='orderIcon'>
							<icon class="icon iconfont icon-daifukuan iconCloor"></icon>
						</view>
						<view class='orderworld'>待支付</view>
					</view>
					<view class="orderTab">
						<view class='orderIcon'>
							<icon class="icon iconfont icon-daifahuo iconCloor"></icon>
						</view>
						<view class='orderworld'>待发货</view>
					</view>
					<view class="orderTab">
						<view class='orderIcon'>
							<icon class="icon iconfont icon-daishouhuo iconCloor"></icon>
						</view>
						<view class='orderworld'>待收货</view>
					</view>
					<view class="orderTab">
						<view class='orderIcon'>
							<icon class="icon iconfont icon-shouhou iconCloor"></icon>
						</view>
						<view class='orderworld'>售后</view>
					</view>
				</view>
			</view>
			<view class="orderTabList">
				<view class="ordergets">
					<view class="ordergetsLeft">
						<icon class="icon iconfont icon-quanguanlibase_sales_couponManage iconcouponManage"></icon>
						<text>优惠券</text>
					</view>
					<view class="ordergetsRight">
						<view class='quanMores'>3张可用</view>
						<icon class="icon iconfont icon-more jiantous"></icon>
					</view>
				</view>
				<view class="ordergets">
					<view class="ordergetsLeft">
						<icon class="icon iconfont icon-location iconcouponManage"></icon>
						<text>收货地址管理</text>
					</view>
					<view class="ordergetsRight">
						<view></view>
						<icon class="icon iconfont icon-more jiantous"></icon>
					</view>
				</view>
				<view class="ordergets">
					<view class="ordergetsLeft">
						<icon class="icon iconfont icon-fuwupingjia-kefu iconcouponManage"></icon>
						<text>联系客服</text>
					</view>
					<view class="ordergetsRight">
						<view></view>
						<icon class="icon iconfont icon-more jiantous"></icon>
					</view>
				</view>
				<!-- <view class="ordergets">
					<view class="ordergetsLeft">
						<icon class="icon iconfont icon-quanguanlibase_sales_couponManage iconcouponManage"></icon>
						<text>优惠券</text>
					</view>
					<view class="ordergetsRight">
						<view></view>
						<icon class="icon iconfont icon-more jiantous"></icon>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
	}
</script>

<style>
	.meDomss{
		height:100vh;
		background:#eee;
	}
	.meIconName{
		height:300rpx;
		width:100%;
		background:#ffbe00;
		display:flex;
		justify-content:flex-start;
	}	
	.preson{
		height:100rpx;
		margin-top:60rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.personImg{
		width:100rpx;
		height:100rpx;
		border:1rpx solid #999;
		border-radius:50%;
		background:#d4237a;
		margin-left:50rpx;
	}
	.personName{
		font-size:28rpx;
		color:#000;
		margin-left:20rpx;
	}
	.personFlows{
		width:90%;
		min-height:500rpx;
		position:relative;
		top:-80rpx;
		left:50%;
		margin-left:-45%;
	}
	.personOrder{
		padding:10rpx 20rpx;
		border:1rpx solid #eee;
		box-shadow:5rpx 10rpx 20rpx #eee;
		background:#fff;
		border-radius:18rpx;
	}
	.orderList{
		height:70rpx;
		line-height:70rpx;
		display:flex;
		justify-content:space-between;
		border-bottom:1rpx solid #eee;
		font-size:28rpx;
		color:#000;
		font-weight:600;
	}
	.ordermore{
		font-size:23rpx;
		color:#999;
		font-weight:400;
	}
	.orderflowss{
		height:120rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:20rpx 20rpx;
	}
	.orderTab{
		width:25%;
		position:relative;
		top:0;
		left:0;
		z-index:10;
	}
	.orderNum{
		position:absolute;
		top:-15rpx;
		right:18rpx;
		z-index:8;
		width:40rpx;
		height:40rpx;
		line-height:40rpx;
		text-align:center;
		font-size:23rpx;
		border-radius:20rpx;
		background:#f0770e;
		color:#fff;
	}
	.orderIcon{
		width:100%;
		height:50rpx;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.orderworld{
		line-height:40rpx;
		text-align:center;
		font-size:25rpx;
		color:#000;
		margin-top:10rpx;
	}
	.iconCloor{
		font-size:45rpx;
		color:#eee731;
	}
	.iconshouhuo{
		width:38rpx;
		height:51rpx;
	}
	.orderTabList{
		padding:10rpx 20rpx;
		box-shadow:5rpx 10rpx 20rpx #eee;
		background:#fff;
		border-radius:18rpx;
		margin-top:30rpx;
	}
	.ordergets{
		height:80rpx;
		line-height:80rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		border-bottom:1rpx solid #eee;
		padding:0 15rpx;
	}
	.ordergetsLeft{
		display:flex;
		justify-content:flex-start;
		align-items:center;
		font-size:26rpx;
		color:#000;
	}
	.iconcouponManage{
		width:36rpx;
		margin-right:15rpx;
		color:#ea8c38;
	}
	.jiantous{
		width:18rpx;
		color:#999;
		margin-left:18rpx;
	}
	.quanMores{
		padding:10rpx 20rpx;
		line-height:30rpx;
		font-size:23rpx;
		text-align:center;
		border-radius:5rpx;
		background:#e57352;
		color:#fff;
		letter-spacing:0.5rpx;
	}
	.ordergetsRight{
		display:flex;
		justify-content:flex-end;
		align-items:center;
		font-size:28rpx;
		color:#000;
	}
	.ordergets:last-child{
		border-bottom:none;
	}
</style>
