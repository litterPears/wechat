<template>
	<view class="lists">
		<view class="listsImages">
			<image class="imgs" src="../../static/images/tangguo.jpg" mode="widthFix"></image>
		</view>
		<view class="commodity">
			<view class="commodityTitle">小烷熊干脆面小烷熊干脆面小烷熊干脆面小烷熊干脆面小烷熊干脆面小烷熊干脆面小烷熊干脆面</view>
			<view class="commoditypay">
				<view class="paymoney">
					<text class="payIcon">￥</text>
					<text class="pay">30.67</text>
					<view class="presonPay">100+人付款</view>
				</view>
				<icon class="icon iconfont icon-cart iconCartadd" @click.stop="addCart"></icon>
			</view>
		</view>
		<markets :marketsTag.sync="marketsTag"></markets>
	</view>
</template>

<script>
	import markets from "../market/market.vue"
	export default{
		data(){
			return {
				marketsTag:false
			}
		},
		components:{
			markets
		},
		methods:{
			addCart(){
				this.marketsTag = true;
			}
		}
	}
</script>

<style>
	.lists{
		width:100%;
	}
	.listsImages{
		width:100%;
		min-height:200rpx;
		position:relative;
		top:0;
		left:0;
		z-index:6;
		border-radius:15rpx;
		overflow:hidden;
	}
	.listsImages .imgs{
		width:100%;
	}
	.commodityTitle{
		height:70rpx;
		line-height:35rpx;
		font-size:26rpx;
		text-align:justify;
		color:#333;
		letter-spacing:0.2rpx;
		padding:0 15rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.commoditypay{
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding:0 20rpx 0 10rpx;
		height:50rpx;
		margin:18rpx 0;
	}
	.paymoney{
		display:flex;
		justify-content:flex-start;
		align-items:center;
		color:#d81e06;
	}
	.paymoney .payIcon{
		font-size:26rpx;
		margin-top:5rpx;
	}
	.paymoney .pay{
		font-size:35rpx;
	}
	.paymoney .presonPay{
		font-size:20rpx;
		color:#999;
		margin:8rpx 0 0 5rpx;
	}
	.iconCartadd{
		font-size:40rpx;
		color:#d81e06;
	}
</style>
