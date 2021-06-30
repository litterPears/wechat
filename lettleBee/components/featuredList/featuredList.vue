<template>
	<view>
		<view class="titles">
			<view class='list left'></view>
			<view class="world">精选</view>
			<view class='list right'></view>
		</view>
		<view class="featuredList">
			<view class="listFlat">
				<List></List>
			</view>
			<view class="listFlat">
				<List></List>
			</view>
			<view class="listFlat">
				<List></List>
			</view>
			<view class="listFlat">
				<List></List>
			</view>
			<view class="listFlat">
				<List></List>
			</view>
		</view>
	</view>
</template>

<script>
	import List from './list.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			List
		}
	}
	
</script>

<style>
	.titles{
		height:60rpx;
		line-height:60rpx;
		display:flex;
		justify-content:center;
		align-items:center;
		font-size:28rpx;
		color:#d81e06;
		margin:0 15rpx;
		letter-spacing:2rpx;
	}
	.world{
		margin:0 15rpx;
	}
	.list{
		height:5rpx;
		width:40%;
	}
	.left{
		background: -webkit-linear-gradient(left, #fff, #d81e06);
		background: -o-linear-gradient(left,#fff, #d81e06);
		background: -moz-linear-gradient(left,#fff, #d81e06);
		background: -ms-linear-gradient(left,#fff, #d81e06);
	}
	.right{
		background: -webkit-linear-gradient(left, #d81e06,#fff);
		background: -o-linear-gradient(left,#d81e06,#fff);
		background: -moz-linear-gradient(left,#d81e06,#fff);
		background: -ms-linear-gradient(left,#d81e06,#fff);
	}
	.featuredList{
		margin:0 15rpx 0 15rpx;
		display:flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		padding:20rpx 0;
	}
	.featureTitles{
		height:50rpx;
	}
	.listFlat{
		width:49%;
		min-height:400rpx;
		background:#fff;
		margin-bottom:25rpx;
		border-radius:15rpx;
	}
	.listFlat:nth-child(even){
		margin-left:2%;
	}
</style>
