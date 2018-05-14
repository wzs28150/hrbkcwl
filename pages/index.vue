<template>
<div id="page">
	<!-- banner start -->
	<div v-swiper:mySwiper="swiperOption" class="banner">
		<div class="swiper-wrapper ">
			<div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
				<!-- <img :src="banner.img"> -->
				<div class="bg h-center" :style="{backgroundImage: 'url(' + banner.img + ')'}">
					<div class="text-group" data-swiper-parallax="-900">
						<h2 v-html="banner.title" data-swiper-parallax="-500"></h2>
						<p data-swiper-parallax="-300">{{banner.description}}</p>
						<a :href="banner.url" data-swiper-parallax="-100">了解更多</a>
					</div>
				</div>
			</div>
		</div>
		<div class="scroll"><a href="#content" class="go-down"><img src="~assets/img/go-down.png" alt=""></a></div>
		<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
		<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
	</div>
	<!-- banner end -->
	<!-- about start -->
	<div class="i-about padding-top-100 padding-bottom-100">
		<div class="container">
			<el-row :gutter="20">
				<el-col :span="16">
					<div class="heading">
						<h4>{{aboutContent.title}}</h4>
						<hr>
						<p>{{aboutContent.content}}</p>
					</div>
					<!-- Tab -->
					<ul class="about-tabs">
						<li :class="[nowTab == item.id ? 'active' : '']" v-for="item in aboutList" :key="item.key" @click="tabToggle(item.id)">
							<a href="#retina0" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false">
									<i :class="item.icon"></i>
									{{item.id}}. {{item.title}}
								</a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<transition name="fade" mode="out-in">
							<div role="tabpanel" v-for="item in aboutList" :key="item.id" v-if="nowTab == item.id" class="tab-pane">
								<p>{{item.content}}</p>
							</div>
						</transition>
					</div>
				</el-col>
				<el-col :span="8">
					<div v-swiper:aboutpicSwiper="swiperOption2" class="aboutpic">
						<div class="swiper-wrapper ">
							<div class="swiper-slide" v-for="pic in aboutpic" :key="pic.id">
								<!-- <img :src="banner.img"> -->
								<div class="bg h-center" :style="{backgroundImage: 'url(' + pic.thumb + ')'}">
								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
	<!-- about end -->
	<!-- products start -->
	<div class="i-products padding-top-100 padding-bottom-100">
		<div class="container">
			<div class="heading text-center"><span style="color:#fff;">WHAT WE DO</span>
				<h4 style="color:#fff;">我们提供最好的产品</h4>
				<hr>
				<p style="color:#fff;">
					提供高端网站建设一条龙服务！丰富的产品种类，领先的技术实力，为您提供最全面的服务！
				</p>
			</div>
		</div>
	</div>
	<!-- products end -->
	<div class="container" style="height:2000px; background-color:#fff;">

	</div>
</div>
</template>

<script>
import api from '~/plugins/api'
export default {
	data: function () {
		return {
			swiperOption: {
				speed: 2000,
				autoplay: {
					delay: 3000
				},
				loop: true,
				navigation: {
					nextEl: '.banner .swiper-button-next',
					prevEl: '.banner .swiper-button-prev'
				},
				parallax: true,

			},
			swiperOption2: {
				speed: 2000,
				// autoplay: {
				// 	delay: 3000
				// },
				effect: 'fade',
				loop: true,
				pagination: {
					el: '.aboutpic .swiper-pagination',
					clickable: true
				}
			},
			nowTab: 1,
			img: ''
			// scrollpage: document.getElementsByClassName( "el-scrollbar__wrap" )[ 0 ]
		}
	},
	methods: {
		tabToggle: function ( id ) {
			this.nowTab = id
		}
	},
	async asyncData( {} ) {
		return api.getIndex()
			.then( ( res ) => {
				return {
					bannerList: res.data.bannerList,
					aboutContent: res.data.aboutContent,
					aboutList: res.data.aboutList,
					aboutpic: res.data.aboutpic
				}
			} )
			.catch( ( e ) => {
				error( {
					statusCode: 404,
					message: 'Get not found'
				} )
			} )
	}
}
</script>

<style lang="sass">
	@import "~assets/css/index.scss";
</style>
