<template>
<div id="page">
	<div v-swiper:mySwiper="swiperOption" class="banner">
		<div class="swiper-wrapper ">
			<div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
				<!-- <img :src="banner.img"> -->
				<div class="bg h-center" :style="{backgroundImage: 'url(' + banner.img + ')'}">
					<div class="text-group animate-element right-to-left">
						<h2 v-html="banner.title" class="animate-element right-to-left"></h2>
						<p class="animate-element right-to-left">{{banner.description}}</p>
						<a :href="banner.url" class="animate-element right-to-left">了解更多</a>
					</div>
				</div>
			</div>
		</div>
		<div class="scroll"><a href="#content" class="go-down"><img src="~assets/img/go-down.png" alt=""></a></div>
		<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
		<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
	</div>
	<div class="i-about">
		<div class="container">
			<el-row>
				<el-col :span="16">
					<div class="heading">
						<h4>{{aboutContent.title}}</h4>
						<hr>
						<p>{{aboutContent.content}}</p>
					</div>
					<!-- Tab -->
					<ul class="about-tabs">
						<li class="" v-for="item in aboutList" :key="item.key">
							<a href="#retina0" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="false">
									<i :class="item.icon"></i>
									{{item.id}}. {{item.title}}
								</a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" v-for="item in aboutList" :key="item.key" class="tab-pane">
							<p>{{item.content}}</p>
						</div>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
	</div>
	<div class="container" style="height:2000px; background-color:#fff;">

	</div>
</div>
</template>

<script>
import api from '../plugins/api'
export default {
	data: function () {
		return {
			swiperOption: {
				speed: 2000,
				// autoplay:
				// {
				// 	delay: 3000
				// },
				loop: true,
				navigation: {
					nextEl: '.banner .swiper-button-next',
					prevEl: '.banner .swiper-button-prev'
				},
				on: {
					init: function () {
						this.slides[ 1 ].querySelectorAll( ".animate-element" )
							.forEach( function ( value, index, array ) {
								setTimeout( function () {
									value.classList.add( "in-viewport" );
								}, index * 300 )
							} );
					},
					transitionStart: function () {
						document.querySelector( ".banner .swiper-slide:not(.swiper-slide-active)" )
							.querySelectorAll( ".animate-element" )
							.forEach( function ( value, index, array ) {
								setTimeout( function () {
									value.classList.remove( "in-viewport" );
								}, 2000 )
							} );
					},
					transitionEnd: function () {
						document.querySelector( ".banner .swiper-slide-active" )
							.querySelectorAll( ".animate-element" )
							.forEach( function ( value, index, array ) {
								setTimeout( function () {
									value.classList.add( "in-viewport" );
								}, index * 300 )
							} );
					},
				}
				// some swiper options...
			}
			// scrollpage: document.getElementsByClassName( "el-scrollbar__wrap" )[ 0 ]
		}
	},
	methods: {

	},
	async asyncData( {} ) {
		return api.getIndex()
			.then( ( res ) => {
				return {
					bannerList: res.data.bannerList,
					aboutContent: res.data.aboutContent,
					aboutList: res.data.aboutList
				}
			} )

	},
}
</script>

<style lang="sass" scoped>
	@import "~assets/css/index.scss";
</style>
