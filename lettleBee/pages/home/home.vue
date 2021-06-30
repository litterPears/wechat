<template>
	<view class="content">
		<!-- 头部搜索部分 -->
		<searchAddress></searchAddress>
		<!-- swiper部分 -->
		<swiperImg></swiperImg>
		<!-- tab部分 -->
		<listCompent></listCompent>
		<!-- 精选推荐介绍 -->
		<recommended></recommended>
		<!-- 每日特价 -->
		<specialOffer></specialOffer>
		<!-- 精选列表部分 -->
		<featuredList></featuredList>
		<!-- 弹出窗部分 -->
		<market></market>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width:100%;
		min-height:100vh;
		background:#f8f8f8;
	}
</style>
