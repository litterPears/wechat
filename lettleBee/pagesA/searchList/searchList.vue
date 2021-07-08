<template>
	<view class="searchList">
		<view class="searchfroms">
			<view class='allsreachs' @click="allMores">
				<text>综合</text>
				<view class="changeflowsh">
					<icon class="icon iconfont icon-xiajiantouxiangxia- iconfontbottom" :class="{'icongoods':allGoods}"></icon>
				</view>
			</view>
			<view class='allsreachs' @click="goodMore">
				<text>销售</text>
				<view class="changeflows">
					<view class="changeflowstg">
						<icon class="icon iconfont icon-shangjiantouxiangshang- iconsb" :class="{'icongoods':goodMores}"></icon>
						<icon class="icon iconfont icon-xiajiantouxiangxia- iconsb" :class="{'icongoods':!goodMores}"></icon>
					</view>
				</view>
			</view>
			<view class='allsreachs' @click="goodsPay">
				<text>价格</text>
				<view class="changeflows">
					<view class="changeflowstg">
						<icon class="icon iconfont icon-shangjiantouxiangshang- iconsb" :class="{'icongoods':goodsPays}"></icon>
						<icon class="icon iconfont icon-xiajiantouxiangxia- iconsb" :class="{'icongoods':!goodsPays}"></icon>
					</view>
				</view>
			</view>
			<view class='allsreachs' @click="goodstargetg">
				<text>特产</text>
				<view class="changeflows">
					<view class="changeflowsh">
						<icon class="icon iconfont icon-xiajiantouxiangxia- iconfontbottom" :class="{'icongoods':goodstarget}"></icon>
					</view>
				</view>
			</view>
		</view>
		<featuredList></featuredList>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				allGoods:true,
				goodMores:false,
				goodsPays:false,
				goodstarget:false
			}
		},
		methods:{
			allMores(){
				this.allGoods = !this.allGoods;
			},
			goodMore(){
				this.goodMores = !this.goodMores;
				this.allGoods = false;
				this.goodstarget = false;
			},
			goodsPay(){
				this.goodsPays = !this.goodsPays;
				this.allGoods = false;
				this.goodstarget = false;
			},
			goodstargetg(){
				this.goodstarget = !this.goodstarget;
			}
		}
	}
</script>

<style>
	.searchList{
		width:100%;
		min-height:100vh;
		background:#eee;
	}
	.searchfroms{
		width:100%;
		height:70rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		background:#fff;
	}
	.allsreachs{
		width:25%;
		height:70rpx;
		line-height:70rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:26rpx;
		color:#000;
	}
	.changeflowsh{
		margin-left:8rpx;
	}
	.changeflowstg{
		width:30rpx;
		height:70rpx;
		display:flex;
		flex-direction: column;
		justify-content:center;
		align-items:flex-start;
		margin-left:8rpx;
		padding-bottom: 47rpx;
		overflow:hidden;
	}
	.iconfontbottom{
		font-size:26rpx;
		color:#ccc;
		margin-top:5rpx;
	}
	.iconsb{
		height:20rpx;
		font-size:26rpx;
		color:#ccc;
	}
	.icongoods{
		color:#d81e06;
	}
</style>
