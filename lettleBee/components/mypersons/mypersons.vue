<template>
	<view>
		<view class="mypersonsmark" v-show="markpreson"></view>
		<view class="mypersonflexs" v-show="markpreson">
			<view class="flexeds">客服电话：1534596</view>
			<view class="flexeds">在线客服</view>
			<view class="flexeds" @click="deleteMark">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["markpreson"],
		data(){
			return{
				
			}
		},
		methods:{
			deleteMark(){
				this.$emit("update:markpreson":false)
			}
		}
	}
</script>

<style>
	.mypersonsmark{
		width:100%;
		height:100%;
		background:#999;
		opacity:0.5;
		position:fixed;
		top:0;
		left:0;
		z-index:9;
	}
	.mypersonflexs{
		position:fixed;
		bottom:0;
		left:0;
		z-index:10;
		width:100%;
		height:100%;
		background:#fff;
		min-height:80rpx;
	}
	.flexeds{
		height:80rpx;
		line-height:80rpx;
		font-size:26rpx;
		color:#1296db;
		text-align:center;
		border-top:1rpx solid #ddd;
	}
</style>
