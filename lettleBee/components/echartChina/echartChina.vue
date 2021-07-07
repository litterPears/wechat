<template>
	<view class="wrap">
		<mpvue-echarts id="main" ref="mapChart" :echarts="echarts" @onInit="renderMap" />
	</view>
</template>

<script>
	import * as echarts from '@/pagesA/echarts/echarts.min.js'; /*echarts.min.js为在线定制*/
	import * as chinaJson from '@/pagesA/echarts/china.json'; /*echart.min.js为在线定制*/
	import mpvueEcharts from 'mpvue-echarts';
	import { mymotherland } from "../../utils/json.js"
	export default{
		data(){
			return {
				echarts,
				data:mymotherland,
				myprovince:""
			}
		},
		components: {
			mpvueEcharts
		},
		onLoad() {

		},
		methods: {
			renderMap(e) {
				const that = this;
				var mydata = that.data;
				let {
					canvas,
					width,
					height
				} = e;
				width = width - 20;
				echarts.setCanvasCreator(() => canvas);
				const chart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				echarts.registerMap('china', chinaJson);
				canvas.setChart(chart)
				var optionMap = {
					title: {
						text: '我和我的祖国',
						x: 'center',
						textStyle:{
						 color:"#d81e06",
						 fontSize:15,
						 lineHeight:30,
						 height:30  
						},
						subtext:"吃遍天下美味",
						itemGap:15,
						subtextStyle:{
							color:"#49aff4",
							fontSize:12,
							align:"center"
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b}特色美味',
						borderColor:"#db692d",
						backgroundColor:"#e6e6e6",
						textStyle:{
							color:'#eb6133',
							fontSize:13
						}
					},
					geo: {
						map: 'china',
						roam: false, //不开启缩放和平移
						zoom: 1.2,//视角缩放比例
						selectedMode:'single',
						label: {
							normal: {
								show: false,
								distance:2,
								fontSize: 8,
								color: '#d14b1d' //文字颜色
							}
						},
						itemStyle: {
							normal: {
								areaColor:"#f8ddc5",
								borderColor: '#4865f8' //省份边框颜色
							},
							emphasis: {
								areaColor: '#f84e15', //鼠标选择区域颜色
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.2)', //选择后的边框阴影颜色
								label:{
									color:"#fff",
									fontSize:13
								}
							}
						}
					},
					//配置属性
					series: [
						{
							type: 'map',
							geoIndex: 0,
							animation: false,
							data: mydata,
						}
					]
				};
				//初始化echarts实例
				chart.setOption(optionMap);
				chart.on('click', function (params) {
					that.myprovince = params.name;
					console.log(that.myprovince,"that.myprovince");
				});
				this.$refs.mapChart.setChart(chart);
			}
		}
	}
</script>

<style>
	.wrap {
			width: 100%;
			height: 800rpx;
			border: 1rpx solid #ddd;
		}
</style>
