<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in carouseList">
				<view class="swiper-item uni-bg-blue">
					   <image style="width:100%; background-color: #eeeeee;"  :src="item" ></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import $https from "../../utils/request.js"

	export default {
		data() {
			return {
				carouseList: ['http://wap.baidu.com/static/img/r/image/2014-04-18/a250be0f0af4d9dd116b4bf1f37dc5c6.jpg',
					"http://img0.bdstatic.com/img/image/wise/4%E5%AB%A9%E8%90%9D%E8%8E%89.jpg"
				],
				autoplay:true,
				interval:2000,
				indicatorDots:true,
				duration:1000,
				
			}
		},
		onLoad() {
			this.getData();

		},
		methods: {
			async getData() {
				let res = await $https({
					url: "https://www.jianshu.com/asimov/notes/75280343/reward_section",
					method: 'get'
				});
				console.log(res);
			}
		}
	}
</script>

<style lang="scss">

</style>
