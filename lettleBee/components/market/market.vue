<template>
	<view>
		<view class="markbgs" v-show="marketTag"></view>
		<view class="market" v-show="marketTag">
			<view class="marketClone">
				<icon class="icon iconfont icon-guanbi1 iconClones" @click="cloneMarket"></icon>
			</view>
			<view class="goodsImgs">
				<view class="goodheets"></view>
				<view class="goodsPays">
					<view class="goodNumber">
						<text class="iconPay">￥</text>
						<text class="numbers">300.00</text>
					</view>
					<view class="goodoldNumber">￥360</view>
					<view class="goodweiddao">
						<text class="kouwei">口味：</text>
						<text class="kouweiworld" v-text="changelab"></text>
					</view>
				</view>
			</view>
			<!-- 口味 -->
			<view class="goodsflow">
				<view class="goodsflowWorld">口味</view>
				<view class="flowWorldUl">
					<view class="flowList" @click="changeLable('香辣口味')">香辣口味</view>
					<view class="flowList">香辣口味</view>
					<view class="flowList">香辣口味</view>
					<view class="flowList">香辣口味</view>
					<view class="flowList">香辣口味</view>
					<view class="flowList">香辣口味</view>
				</view>
			</view>
			<!-- 购买数量 -->
			<view class="payNumber">
				<view class="payWorlds">
					<text>购买数量</text>
					<text class="moreNumber"></text>
				</view>
				<view class='addPay'>
					<view class="label decele" :class="{'deleteClass':payNumber == 1}" @click="deleteNumber">-</view>
					<view class="label" v-text="payNumber"></view>
					<view class="label add" @click="addNumber">+</view>
				</view>
			</view>
			<view class="goodBtns" @click="addGoodCart">加入购物车</view>
		</view>
	</view>
</template>

<script>
	import { EventBus } from "../../utils/event-bus.js";
	export default{
		data(){
			return{
				marketTag:false,
				payNumber:1,
				changelab:'请选择口味'
			}
		},
		props:{
			cloneMark:{
				type:Boolean,
				default:false
			}
		},
		mounted(){
			this.marketTag = this.cloneMark;
			console.log(this.marketTag,"this.marketTagthis.marketTag");
			EventBus.$on("aMsg", (msg) => {
			  this.marketTag = msg
			}) 
		},
		methods:{
			cloneMarket(){
				this.marketTag = false
			},
			deleteNumber(){
				this.payNumber = this.payNumber - 1;
				if(this.payNumber < 1){
					this.payNumber = 1;	
				}
			},
			addNumber(){
				this.payNumber = this.payNumber + 1;
			},
			changeLable(world){
				this.changelab = world;
			},
			addGoodCart(){
				wx.switchTab({
					url:"/pages/car/car"
				})
			}
		}
	}
</script>

<style>
	.markbgs{
		position:fixed;
		top:0;
		left:0;
		z-index:999;
		width:100%;
		height:100%;
		background:#000;
		opacity:0.5;
	}
	.market{
		position:fixed;
		bottom:0;
		left:0;
		z-index:1000;
		width:100%;
		min-height:200rpx;
		border-top-right-radius:20rpx;
		border-top-left-radius:20rpx;
		background:#fafafa;
	}
	.marketClone{
		height:68rpx;
		line-height:68rpx;
		display:flex;
		justify-content:flex-end;
		align-items:center;
		padding:0 20rpx;
	}
	.iconClones{
		width:68rpx;
		text-align:center;
	}
	.goodsImgs{
		width: 100%;
		margin:10rpx 20rpx 30rpx 20rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		height:250rpx;
		border-bottom:1rpx solid #eee;
	}
	.goodheets{
		width:220rpx;
		height:220rpx;
		background:#0077AA;
		margin-right:20rpx;
	}
	.goodsPays{
		height:220rpx;
	}
	.goodNumber{
		height:80rpx;
		line-height:80rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		font-size:40rpx;
		color:#d81e06;
		font-weight:500;
	}
	.iconPay{
		font-size:28rpx;
		margin-top:10rpx;
		font-weight:300;
	}
	.goodoldNumber{
		height:30rpx;
		line-height:30rpx;
		font-size:26rpx;
		color:#aaa;
		text-decoration:line-through
	}
	.goodweiddao{
		height:50rpx;
		line-height:50rpx;
		font-size:28rpx;
		color:#007AFF;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		margin-top:50rpx;
	}
	.kouwei{
		color:#999;
	}
	.kouweiworld{
		font-size:25rpx;
		color:#1afa29;
		letter-spacing:1rpx;
		margin-top:5rpx;
	}
	.goodsflow{
		margin:2rpx 5rpx 30rpx 20rpx;
		max-height:300rpx;
		overflow-y:auto;
		border-bottom:1rpx solid #eee;
	}
	.goodsflowWorld{
		height:40rpx;
		line-height:40rpx;
		font-size:28rpx;
		color:#333;
		padding-left:15rpx;
	}
	.flowWorldUl{
		display:flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		margin:30rpx 10rpx 10rpx 30rpx;
	}
	.flowList{
		line-height:40rpx;
		padding:0 25rpx;
		font-size:25rpx;
		color:#333;
		background:#eee;
		border-radius:20rpx;
		margin:0 10rpx 30rpx 10rpx;
	}
	.payNumber{
		height:60rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		margin-bottom:45rpx;
		padding:0 30rpx;
	}
	.payWorlds{
		font-size:30rpx;
		color:#000;
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.moreNumber{
		font-size:25rpx;
		margin-top:8rpx;
		color:#eee;
	}
	.addPay{
		display:flex;
		justify-content:flex-end;
		align-items:center;
	}
	.label{
		width:80rpx;
		height:60rpx;
		line-height:60rpx;
		text-align:center;
		font-size:30rpx;
		background:#eee;
	}
	.decele{
		border-right:1rpx solid #f9f9f9;
	}
	.add{
		border-left:1rpx solid #f9f9f9;
	}
	.goodBtns{
		height:70rpx;
		line-height:70rpx;
		text-align:center;
		font-size:26rpx;
		color:#fff;
		border-radius:40rpx;
		margin:40rpx 30rpx;
		background:#f17979;
		letter-spacing:0.5rpx;
	}
	.deleteClass{
		background:#f3f3f3;
		color:#aaa;
	}
</style>
