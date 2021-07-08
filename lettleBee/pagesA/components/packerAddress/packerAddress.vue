<template>
	<view>
		<picker 
		class="pickerClass"
		mode="multiSelector" 
		:range="cityDataList" 
		range-key="name"
		:value="att"
		@change="changeslist"
		@columnchange="columnchangeList">
		{{cityList[0]}} {{cityList[1] || ''}} {{cityList[2] || ''}}
			<!-- {{cityDataList[0][att[0]].name}}
			{{cityDataList[1][att[1]].name}} 
			{{cityDataList[2][att[2]].name}} -->
		</picker>
		<!-- <picker mode="region" @change="columnchanges">
			<view>{{ timetext }} </view>
		</picker> -->
	</view>
</template>
 
<script>
	import cityDatas from '../../common/city.area.js'
	export default {
		data() {
			return {
				att:[0,0,0],
				cityDataList:[],
				cityList:['请选择所在的城市','','']
			}
		},
		onLoad() {
 
		},
		created(){
			this.buildup();
		},
		methods: {
			columnchangeList(e){
				this.changeAttr(e).buildup().$forceUpdate()
			},
			changeslist(e){
				let attr = e.detail.value,citys=[];
				citys.push(cityDatas[attr[0]].name);
				citys.push(cityDatas[attr[0]].cityList[attr[1]].name);
				citys.push(cityDatas[attr[0]].cityList[attr[1]].areaList[attr[2]].name);
				this.cityList = citys;
				console.log(this.cityList,"城市");
			},
			buildup(){
				this.cityDataList[0] = cityDatas.map(items =>{
					return {name:items.name}
				});
				this.cityDataList[1] = cityDatas[this.att[0]].cityList.map(items =>{
					return {name:items.name}
				});
				this.cityDataList[2] = cityDatas[this.att[0]].cityList[this.att[1]].areaList.map(items =>{
					return {name:items.name}
				});
				return this;
			},
			changeAttr(e){
				if(e.detail.column == 0){
					this.att[0] = e.detail.value || 0;
				}
				if(e.detail.column == 1){
					this.att[1] = e.detail.value || 0;
				}
				if(e.detail.column == 2){
					this.att[2] = e.detail.value || 0;
				}
				return this;
			}
		}
	}
</script>
 
<style>
	.pickerClass{
		font-size:25rpx;
	}
</style>