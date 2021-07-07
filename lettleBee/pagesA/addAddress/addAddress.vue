<template>
	<view class="addAddress">
		<view class="adddressUls">
			<view class="addAddressName">
				<lable class="labelName">收货人</lable>
				<input class="addressInput" type="text" placeholder="名字"/>
			</view>
			<view class="addAddressName">
				<lable class="labelName">手机号码</lable>
				<input class="addressInput" type="number" placeholder="手机号"/>
			</view>
			<view class="addAddressName addressregion">
				<view class='regionlabel'>
					<lable class="labelName">选择地区</lable>
					<packerAddress></packerAddress>
				</view>
				<icon class="icon iconfont icon-more iconRight"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	import packerAddress from "../components/packerAddress/packerAddress.vue"
	export default{
		data(){
			return{
			
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
</style>
