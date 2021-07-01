<template>
	<view class="cartDoms">
		<view class='cartList'>
			<view class="listGood">
				<view class="listCheck" @click="checkTarget">
					<icon class="icon iconfont checkboxClass" :class="{'icon-duihao acitveClass':checkTags}"></icon>
				</view>
				<view class="goodsListNumber">
					<image class="goodImgs" src="../../static/images/bg02.jpg" mode='widthFix'></image>
					<view class="goodMsgs">
						<view class="goodMsgTitle">爆破小辣椒</view>
						<view class='goodsrules'>规格：3包装（300g）</view>
						<view class="goodPatd">
							<view class="payNum">
								<text class="iconkats">￥</text>
								<text>30.09</text>
							</view>
							<view class="payGoodNum">
								<view class="paySpan leftSpan">-</view>
								<view class="paySpan">1</view>
								<view class="paySpan rightSpan">+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cartPaysDoms"></view>
		<view class="cartFlexed">
			<view class="allChecked" @click="allCheckeds">
				<text class="allClass">全选</text>
				<icon class="icon iconfont checkboxIcons" :class="{'icon-duihao acitveClass':checkAll}"></icon>
			</view>
			<view class="payFlexeds">
				<view class="paybats">
					<view class="sumPayMoney">
						<text>总价：</text>
						<text class='sumWorld'><text class="iconxiao">￥</text>100.00</text>
					</view>
					<view class="sumMoneydelect">可优惠：<text class="iconxiao1">￥</text>10.00</view>
				</view>
				<view class="payButtons">结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				checkTags:false,
				checkAll:false
			}
		},
		methods:{
			checkTarget(){
				this.checkTags = !this.checkTags;
			},
			allCheckeds(){
				this.checkAll = !this.checkAll;
			}
		}
	}
</script>

<style>
	.cartDoms{
		padding:20rpx 15rpx;
		background:#eee;
		min-height:calc(100vh - 40rpx);
	}
	.cartList{
		height:auto;
	}
	.listGood{
		border-radius:20rpx;
		height:260rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		background:#fff;
		padding:0 20rpx;
		margin-bottom:25rpx;
	}
	.listCheck{
		width:80rpx;
		height:260rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.checkboxClass{
		width:50rpx;
		height:50rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		border:1rpx solid #999999;
		border-radius:50%;
		background:#eee;
	}
	.checkboxIcons{
		width:40rpx;
		height:40rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		border:1rpx solid #999999;
		border-radius:50%;
		background:#eee;
	}
	.acitveClass{
		font-size:30rpx;
		color:#fff;
		background:#d81e06;
	}
	.goodsListNumber{
		width:calc(100% - 80rpx);
		height:260rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.goodImgs{
		width:200rpx;
		height:200rpx;
		margin-right:18rpx;
		border-radius:8rpx;
	}
	.goodMsgs{
		width:calc(100% - 218rpx);
	}
	.goodMsgTitle{
		height:70rpx;
		line-hieght:35rpx;
		font-size:28rpx;
		color:#000;
		text-align:justify;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.goodsrules{
		height:80rpx;
		line-height:40rpx;
		font-size:25rpx;
		color:#999;
		text-align:justify;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.goodPatd{
		height:50rpx;
		display:flex;
		justify-content:space-between;
		align-items:flex-end;
	}
	.payNum{
		line-height:40rpx;
		font-size:36rpx;
		color:#d81e06;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.iconkats{
		font-size:25rpx;
		margin-top:8rpx;
	}
	.payGoodNum{
		height:50rpx;
		display:flex;
		justify-content:flex-end;
		align-items:center;
	}
	.paySpan{
		width:50rpx;
		line-height:50rpx;
		text-align:center;
		background:#eee;
		font-size:30rpx;
	}
	.leftSpan{
		border-right:1rpx solid #fff;
	}
	.rightSpan{
		border-left:1rpx solid #fff;
	}
	.cartPaysDoms{
		width:100%;
		height:120rpx;
	}
	.cartFlexed{
		width:100%;
		height:120rpx;
		background:#fff;
		box-shadow:-8rpx 0 18rpx #eee;
		border-top:1rpx solid #eee;
		display:flex;
		justify-content:space-between;
		align-items:center;
		position:fixed;
		bottom:0;
		left:0;
		z-index:10;
	}
	.allChecked{
		height:120rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		font-size:26rpx;
		color:#222;
		margin-left:25rpx;
	}
	.allClass{
		margin-right:10rpx;
	}
	.payFlexeds{
		height:120rpx;
		margin-right:25rpx;
		display:flex;
		justify-content:flex-end;
		align-items:center;
	}
	.payButtons{
		width:200rpx;
		height:80rpx;
		border-radius:40rpx;
		background:#d81e06;
		line-height:80rpx;
		text-align:center;
		font-size:28rpx;
		color:#fff;
		margin-left:18rpx;
	}
	.sumPayMoney{
		height:40rpx;
		line-height:40rpx;
		font-size:23rpx;
		display:flex;
		justify-content:flex-end;
		align-items:center;
		color:#666;
	}
	.iconxiao{
		font-size:22rpx;
	}
	.iconxiao1{
		font-size:20rpx;
	}
	.sumWorld{
		color:#d81e06;
		font-size:28rpx;
		font-weight:600;
	}
	.sumMoneydelect{
		height:40rpx;
		line-height:40rpx;
		font-size:23rpx;
		color:#666;
	}
</style>
