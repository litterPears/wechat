<template>
	<view class="addAddress">
		<view class="adddressUls">
			<view class="addAddressName">
				<lable class="labelName">收货人</lable>
				<input class="addressInput" type="text" placeholder="请输入填写收货人的姓名"/>
			</view>
			<view class="addAddressName">
				<lable class="labelName">手机号码</lable>
				<input class="addressInput" type="number" placeholder="请输入填写正确的手机号"/>
			</view>
			<view class="addAddressName addressregion">
				<view class='regionlabel'>
					<lable class="labelName">选择地区</lable>
					<packerAddress></packerAddress>
				</view>
				<icon class="icon iconfont icon-more iconRight"></icon>
			</view>
			<view class="addressFlows">
				<lable class="labelName">详细地址</lable>
				<textarea class="textareaT" placeholder-class="placeHolderClass" placeholder="请填写详细地址"></textarea>
			</view>
		</view>
		<view class="changethis">
			<text>设为默认地址</text>
			<switch :checked="checkedTag" color="#d81e06" @change="switch1Change"/>
		</view>
		<button type="warn" class="buttons">保存</button>
	</view>
</template>

<script>
	import packerAddress from "../components/packerAddress/packerAddress.vue"
	export default{
		data(){
			return{
				checkedTag:false
			}
		},
		components:{
			packerAddress
		},
		methods:{
			bindRegionChange(e){
				console.log(e,"ee");
			}
		}
	}
</script>

<style>
	.addAddress{
		width:100%;
		min-height:100vh;
		background:#eee;
	}
	.adddressUls{
		background:#fff;
		padding:20rpx 25rpx;
	}
	.addAddressName{
		display:flex;
		justify-content:flex-start;
		align-items:center;
		height:90rpx;
		line-height:90rpx;
		border-bottom:1rpx solid #ddd;
	}
	.regionlabel{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.addressregion{
		justify-content:space-between;
	}
	.pickerLable{
		width:300rpx;
		height:90rpx;
	}
	.labelName{
		font-size:26rpx;
		color:#000;
		width:120rpx;
		margin-right:10rpx;
	}
	.addressInput{
		height:60rpx;
		width:350rpx;
		line-height:60rpx;
		color:#000;
		font-size:26rpx;
	}
	.iconRight{
		font-size:28rpx;
	}
	.addressFlows{
		display:flex;
		justify-content:flex-start;
		height:170rpx;
		padding:30rpx 0 0 0;
	}
	.textareaT{
		width:calc(100% - 140rpx);
		height:120rpx;
		font-size:26rpx;
		color:#000;
		padding:3rpx 10rpx 10rpx 0;
	}
	.changethis{
		margin-top:30rpx;
		height:120rpx;
		lin-height:120rpx;
		padding:0 25rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		font-size:26rpx;
		color:#333;
		background:#fff;
	}
	.buttons{
		margin:100rpx 40rpx 0 40rpx;
		border-radius:35rpx;
	}
</style>
