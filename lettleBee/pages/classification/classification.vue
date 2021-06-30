<template>
	<view class="classification">
		<view class="classification_left">
			<view class="listClass" 
			v-for="(items,index) of list" 
			:key="items.id"
			:class="{'activeClass':listsId == items.id}"
			v-text="items.world"
			@click="targetList(items)"
			></view>
		</view>
		<view class="classification_right">
		  <scroll-view class="scrollRight" scroll-y="true" refresher-enabled="true" @scrolltolower="scrolltolower">
			<view class="goodsLists">
				<image class="goodsImgs" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="gloodmsg">
					<view class="goodTitle">泡脚凤爪</view>
					<view class="goodType">
						<text class="goodSpan">香辣口味</text>
						<text class="goodSpan">香辣口味</text>
						<text class="goodSpan">香辣口味</text>
					</view>
					<view class="goodPays">
						<view class="payNum">
							<text class="payIcon">￥</text>
							<text>30</text>
						</view>
						<icon class="icon iconfont icon-cart iconCartadd" @click="addCartGooods"></icon>
					</view>
				</view>
			</view>
		  </scroll-view>
		</view>
		<!-- 弹出窗部分 -->
		<market></market>
	</view>
</template>

<script>
	import { specialList } from '../../utils/json.js'
	import { EventBus } from "../../utils/event-bus.js"
	export default{
		data(){
			return{
				listsId:"",
				marketTag:false,
				list:[]
			}
		},
		onLoad(options){
			this.listsId = options.itemId;
		},
		mounted(){
			this.list = specialList;
			//显示弹出窗
			EventBus.$on("aMsg", (msg) => {
			  this.marketTag = msg
			})
			
		},
		methods:{
			targetList(items){
				this.listsId = items.id
			},
			scrolltolower(){
				console.log("12345678");
			},
			addCartGooods(){
				EventBus.$emit("aMsg", true);
			}
		}
	}
</script>

<style>
	.classification{
		padding:0 15rpx;
		display:flex;
		justify-content:space-between;
		align-items: center;
		height:100vh;
		background:#eee;
	}
	.classification_left{
		width:150rpx;
		height:100%;
		background:#fff;
		overflow-y: auto;
	}
	.classification_right{
		width:calc(100% - 176rpx);
		height:100vh;
		overflow:hidden;
	}
	.scrollRight{
		padding-top:20rpx;
		height:calc(100vh - 20rpx);
	}
	.listClass{
		height:80rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:25rpx;
		color:#333;
		border-bottom:1rpx solid #eee;
		border-left:6rpx solid #fff;
	}
	.activeClass{
		border-left:6rpx solid #d81e06;
		color:#1296db;
	}
	.listClass:last-child{
		border-bottom:none;
	}
	.goodsLists{
		border-radius:20rpx;
		background:#fff;
		padding:20rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		margin-bottom:20rpx;
	}
	.goodsImgs{
		width:200rpx;
		height:200rpx;
	}
	.gloodmsg{
		width:300rpx;
		height:200rpx;
		margin-left:20rpx;
		display:flex;
		flex-direction:column;
		justify-content:flex-start;
	}
	.goodTitle{
		height:60rpx;
		line-height:60rpx;
		font-size:28rpx;
		color:#000;
		text-align:justify;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis
	}
	.goodType{
		height:60rpx;
		display:flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		margin-top:20rpx;
		overflow:hidden;
	}
	.goodSpan{
		height:30rpx;
		padding:0 15rpx;
		border-radius:20rpx;
		line-height:30rpx;
		text-align:center;
		font-size:23rpx;
		background:#eee;
		color:#d4237a;
		margin-right:15rpx;
	}
	.goodPays{
		font-size:30rpx;
		height:50rpx;
		line-height:50rpx;
		color:#d81e06;
		margin-top:10rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.payNum{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.payIcon{
		font-size:23rpx;
		margin-top:8rpx;
	}
	.iconCartadd{
		font-size:40rpx;
		color:#d81e06;
	}
</style>
