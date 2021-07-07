<template>
	<view class='orderDetail'>
		<view class="orderSuccess">
			<icon class="icon iconfont icon-order iconSuccess"></icon>
			<text class="successWorld">交易成功</text>
		</view>
		<view class="addressHome">
			<view class="adddressName name">
				<icon class="icon iconfont icon-ren iconophone"></icon>
				<text class="addressText">小豌豆</text>
			</view>
			<view class="adddressName ophone">
				<icon class="icon iconfont icon-dianhua iconophone"></icon>
				<text class="addressText">13937145586</text>
			</view>
			<view class="adddressName adddres">
				<icon class="icon iconfont icon-location iconophone"></icon>
				<view class="addressText">河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号河南省洛阳市新安县牛杨镇罗家村3排3号</view>
			</view>
		</view>
		<view class="orderListNumber">
			<view class="orderparts">
				<image class="orderImg" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="orderMsg">
					<view class="orderTitle">功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰(60g)</view>
					<view class="numbermoney">
						<view class="moneys">￥10</view>
						<view class="numberst">x10</view>
					</view>
				</view>
			</view>
			<view class="orderparts">
				<image class="orderImg" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="orderMsg">
					<view class="orderTitle">功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰(60g)</view>
					<view class="numbermoney">
						<view class="moneys">￥10</view>
						<view class="numberst">x10</view>
					</view>
				</view>
			</view>
			<view class="orderparts">
				<image class="orderImg" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="orderMsg">
					<view class="orderTitle">功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰(60g)</view>
					<view class="numbermoney">
						<view class="moneys">￥10</view>
						<view class="numberst">x10</view>
					</view>
				</view>
			</view>
			<view class="orderparts">
				<image class="orderImg" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="orderMsg">
					<view class="orderTitle">功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰(60g)</view>
					<view class="numbermoney">
						<view class="moneys">￥10</view>
						<view class="numberst">x10</view>
					</view>
				</view>
			</view>
			<view class="orderparts">
				<image class="orderImg" src="../../static/images/bg02.jpg" mode="widthFix"></image>
				<view class="orderMsg">
					<view class="orderTitle">功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰功夫小凤凰(60g)</view>
					<view class="numbermoney">
						<view class="moneys">￥10</view>
						<view class="numberst">x10</view>
					</view>
				</view>
			</view>
		</view>
		<view class="orderMessage">
			<view class="orderMes">
				<view class='orderdet orderleft'>商品金额</view>
				<view class='orderdet orderright'>￥104.09</view>
			</view>
			<view class="orderMes">
				<view class='orderdet orderleft'>运费</view>
				<view class='orderdet orderright'>免邮</view>
			</view>
			<view class="orderMes">
				<view class='orderdet orderleft'>优惠卷抵扣</view>
				<view class='orderdet orderright'>-￥0.00</view>
			</view>
			<view class="orderMes">
				<view class='orderdet orderleft'>余额抵扣</view>
				<view class='orderdet orderright'>-￥0.09</view>
			</view>
			<view class="orderMes">
				<view class='orderdet orderleft'>实付金额</view>
				<view class='orderdet orderright orderColor'>￥84.23</view>
			</view>
		</view>
		<view class="orderMessage">
			<view class="orderMes">
				<view class='orderdet orderleft'>订单编码</view>
				<view class='orderdet orderright'>45648974654354688645169</view>
			</view>
			<view class="orderMes">
				<view class='orderdet orderleft'>下单时间</view>
				<view class='orderdet orderright'>2021-07-12</view>
			</view>
		</view>
		<view class="bottomMsgs"></view>
		<view class="orderpresons">
			<view class="deletPreson">联系客服</view>
			<view class="deletPreson orderdeteg">删除订单</view>
		</view>
	</view>
</template>

<script>
	
	
	
</script>

<style>
	.orderDetail{
		width:100%;
		min-height:100vh;
		background:#eee;
	}
	.orderSuccess{
		height:150rpx;
		line-height:150rpx;
		background:#f45d31;
		overflow: hidden;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.iconSuccess{
		display:block;
		font-size:80rpx;
		color:#d81e06;
		margin-left:30rpx;
	}
	.successWorld{
		font-size:30rpx;
		color:#fafafa;
		margin-right:50rpx;
		letter-spacing:0.5rpx;
	}
	.addressHome{
		background:#fff;
		padding:20rpx 30rpx;
		margin-bottom:25rpx;
	}
	.adddressName{
		display:flex;
		justify-content:flex-start;
		align-items:flex-start;
		min-height:60rpx;
		lin-height:60rpx;
	}
	.name{
		font-size:27rpx;
		color:#000;
	}
	.ophone{
		font-size:26rpx;
		color:#bfbfbf;
	}
	.iconophone{
		font-size:28rpx;
		color:#3F536E;
		margin-right:10rpx;
	}
	.adddres{
		font-size:27rpx;
		color:#000;
	}
	.addressText{
		width:calc(100% - 40rpx);
		letter-spacing:0.8rpx;
		padding-top:15rpx;
	}
	.orderListNumber{
		padding:20rpx 30rpx;
		background:#fff;
	}
	.orderparts{
		display:flex;
		justify-content:space-between;
		align-items:center;
		margin:40rpx 0 40rpx 0;
	}
	.orderImg{
		width:200rpx;
		height:200rpx;
		border-radius:8rpx;
		margin-right:20rpx;
	}
	.orderMsg{
		width:calc(100% - 220rpx);
		height:200rpx;
		display:flex;
		flex-direction:column;
		align-content:space-between;
	}
	.orderTitle{
		line-height:40rpx;
		height:80rpx;
		font-size:27rpx;
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
	.numbermoney{
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:60rpx;
		line-height:60rpx;
		margin-top:60rpx;
	}
	.moneys{
		font-size:26rpx;
		color:#000;
	}
	.numberst{
		font-size:25rpx;
		color:#aaa;
	}
	.orderMessage{
		margin-top:25rpx;
		padding:20rpx 30rpx;
		background:#fff;
	}
	.orderMes{
		display:flex;
		justify-content:space-between;
		align-items:center;
		min-height:60rpx;
	}
	.orderdet{
		lin-height:60rpx;
		font-size:25rpx;
		width:45%;
	}
	.orderleft{
		color:#333;
	}
	.orderright{
		text-align:right;
		color:#999;
	}
	.orderColor{
		color:#d81e06;
	}
	.bottomMsgs{
		width:100%;
		height:120rpx;
	}
	.orderpresons{
		position:fixed;
		bottom:0;
		left:0;
		z-index:6;
		width:calc(100% - 60rpx);
		height:80rpx;
		margin-top:25rpx;
		padding:20rpx 30rpx;
		background:#fff;
		display:flex;
		justify-content:flex-end;
		align-items:center;
		box-shadow:0 -10rpx 20rpx #eee;
	}
	.deletPreson{
		line-height:50rpx;
		height:50rpx;
		padding:0 30rpx;
		font-size:25rpx;
		color:#000;
		border-radius:30rpx;
		border:1rpx solid #333;
	}
	.orderdeteg{
		margin:0 10rpx 0 30rpx;
	}
</style>
