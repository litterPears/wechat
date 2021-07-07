<template>
	<view class="addressDoms">
		<view class="addressUls">
			<view class="addressLists">
				<view class='addressName'>
					<view class='nameMessage'>
						<view class="nameq">
							<text>司马老贼</text>
							<text class="namePhone">13945678852</text>
						</view>
						<view class="addressworld"><text class="addressLable">默认</text>河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号</view>
					</view>
					<view class="writeAddress">
						<image class="iconImg" src="../../static/images/world.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="addresschange">
					<view class="addressits">
						<view class="addressChecks activeClass"></view>
						<text>默认地址</text>
					</view>
					<view class="addressDelet">删除地址</view>
				</view>
			</view>
			<view class="addressLists">
				<view class='addressName'>
					<view class='nameMessage'>
						<view class="nameq">
							<text>司马老贼</text>
							<text class="namePhone">13945678852</text>
						</view>
						<view class="addressworld"><text class="addressLable">默认</text>河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号</view>
					</view>
					<view class="writeAddress">
						<image class="iconImg" src="../../static/images/world.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="addresschange">
					<view class="addressits">
						<view class="addressChecks activeClass"></view>
						<text>默认地址</text>
					</view>
					<view class="addressDelet">删除地址</view>
				</view>
			</view>
			<view class="addressLists">
				<view class='addressName'>
					<view class='nameMessage'>
						<view class="nameq">
							<text>司马老贼</text>
							<text class="namePhone">13945678852</text>
						</view>
						<view class="addressworld"><text class="addressLable">默认</text>河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号</view>
					</view>
					<view class="writeAddress">
						<image class="iconImg" src="../../static/images/world.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="addresschange">
					<view class="addressits">
						<view class="addressChecks activeClass"></view>
						<text>默认地址</text>
					</view>
					<view class="addressDelet">删除地址</view>
				</view>
			</view>
			<view class="addressLists">
				<view class='addressName'>
					<view class='nameMessage'>
						<view class="nameq">
							<text>司马老贼</text>
							<text class="namePhone">13945678852</text>
						</view>
						<view class="addressworld"><text class="addressLable">默认</text>河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号</view>
					</view>
					<view class="writeAddress">
						<image class="iconImg" src="../../static/images/world.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="addresschange">
					<view class="addressits">
						<view class="addressChecks activeClass"></view>
						<text>默认地址</text>
					</view>
					<view class="addressDelet">删除地址</view>
				</view>
			</view>
		</view>
		<view class="addressflexDoms"></view>
		<view class="addressFlex">
			<view class="addAddress">添加新地址</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style>
	.addressDoms{
		width:100%;
		min-height:100vh;
		background:#eee;
		overflow: hidden;
	}
	.addressFlex{
		width:100%;
		height:120rpx;
		position:fixed;
		bottom:0;
		left:0;
		z-index:10;
		background:#fff;
	}
	.addressflexDoms{
		height:120rpx;
	}
	.addAddress{
		height:60rpx;
		line-height:60rpx;
		width:90%;
		text-align:center;
		margin:30rpx auto;
		border:1rpx solid #d81e06;
		font-size:26rpx;
		color:#f56611;
		border-radius:30rpx;
	}
	.addressUls{
		margin-bottom:20rpx;
		overflow:hidden;
	}
	.addressLists{
		min-height:220rpx;
		margin:20rpx 25rpx 30rpx;
		background:#fff;
		border-radius:15rpx;
		box-shadow:10rpx 10rpx 10rpx #eee;
		padding:25rpx 20rpx;
	}
	.addressName{
		display:flex;
		justify-content:space-between;
		padding:0 20rpx 30rpx 20rpx;
		border-bottom:1rpx solid #ddd;
	}
	.nameMessage{
		width:calc(100% - 110rpx);
	}
	.nameq{
		display:flex;
		justify-content:flex-start;
		height:50rpx;
		line-height:50rpx;
		font-size:30rpx;
		color:#000;
	}
	.namePhone{
		font-size:24rpx;
		color:#999;
		margin-left:12rpx;
		line-height:60rpx;
	}
	.addressworld{
		lin-height:40rpx;
		font-size:26rpx;
		color:#111;
		text-align:justify;
		margin-top:15rpx;
	}
	.addressLable{
		color:#fff;
		margin-right:8rpx;
		background:#e35d4e;
		padding:0 6rpx;
		border-radius:3rpx;
		font-size:23rpx;
	}
	.writeAddress{
		width:100rpx;
		display:flex;
		justify-content:flex-end;
		align-items:center;
	}
	.iconImg{
		width:40rpx;
		margin-top:40rpx;
	}
	.addresschange{
		height:70rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		margin_bottom:20rpx;
		padding:10rpx 10rpx 0 10rpx;
	}
	.addressits{
		display:flex;
		justify-content:flex-start;
		align-items:center;
		font-size:26rpx;
		color:#bbb;
	}
	.addressChecks{
		width:35rpx;
		height:35rpx;
		background:#eee;
		border-radius:20rpx;
		border:1rpx solid #000;
		margin-right:13rpx;
	}
	.activeClass{
		color:#fff;
		background:#d81e06;
		border:1rpx solid #d81e06;
	}
	.addressDelet{
		height:40rpx;
		line-height:40rpx;
		padding:0 30rpx;
		font-size:25rpx;
		color:#666;
		border:1rpx solid #ddd;
		text-align:center;
		border-radius:20rpx;
	}
</style>
