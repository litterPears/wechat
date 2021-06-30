<template>
	<view class="specialOffer">
		<view class="specialTitle">每日特惠</view>
		<view class="specialList">
			<view class="lists">
				<image class="imgs" src="../../static/images/icon01.jpg" mode="widthFix"></image>
				<view class="speciT">香辣小龙虾香辣</view>
				<view class="speciPays">
					<text class="iconspeci">￥</text>
					<text>3</text>
					<view class="iconolds">￥5</view>
				</view>
			</view>
			<view class="lists">
				<image class="imgs" src="../../static/images/icon01.jpg" mode="widthFix"></image>
				<view class="speciT">香辣小龙虾香辣</view>
				<view class="speciPays">
					<text class="iconspeci">￥</text>
					<text>3</text>
					<view class="iconolds">￥5</view>
				</view>
			</view>
			<view class="lists">
				<image class="imgs" src="../../static/images/icon01.jpg" mode="widthFix"></image>
				<view class="speciT">香辣小龙虾香辣</view>
				<view class="speciPays">
					<text class="iconspeci">￥</text>
					<text>3</text>
					<view class="iconolds">￥5</view>
				</view>
			</view>
			<view class="lists">
				<image class="imgs" src="../../static/images/icon01.jpg" mode="widthFix"></image>
				<view class="speciT">香辣小龙虾香辣</view>
				<view class="speciPays">
					<text class="iconspeci">￥</text>
					<text>3</text>
					<view class="iconolds">￥5</view>
				</view>
			</view>
			<view class="lists">
				<image class="imgs" src="../../static/images/icon01.jpg" mode="widthFix"></image>
				<view class="speciT">香辣小龙虾香辣</view>
				<view class="speciPays">
					<text class="iconspeci">￥</text>
					<text>3</text>
					<view class="iconolds">￥5</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.specialOffer{
		margin:30rpx 15rpx;
		overflow-x: auto;
		height:400rpx;
		border-radius:15rpx;
		background:#fff;
	}
	.specialTitle{
		height:40rpx;
		line-height:40rpx;
		font-size:28rpx;
		color:#000;
		padding:20rpx 0 10rpx 30rpx;
	}
	.specialList{
		height:320rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		padding:0 15rpx;
	}
	.lists{
		width:200rpx;
		margin-right:30rpx;
	}
	.imgs{
		width:200rpx;
		height:200rpx;
		border-radius:8rpx;
	}
	.speciT{
		height:60rpx;
		line-height:30rpx;
		font-size:25rpx;
		text-align:justify;
		color:#000;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.speciPays{
		font-size:28rpx;
		line-height:60rpx;
		height:60rpx;
		display:flex;
		justify-content:flex-start;
		align-items:center;
		color:#f47d47;
		padding:0 10rpx;
	}
	.iconspeci{
		font-size:20rpx;
		margin-top:6rpx;
	}
	.iconolds{
		font-size:20rpx;
		color:#aaa;
		text-decoration:line-through;
		margin:2rpx 0 0 8rpx;
	}
</style>
