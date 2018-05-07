<template>
<div id="page">
	<div v-swiper:mySwiper="swiperOption"
	     class="banner">
		<div class="swiper-wrapper ">
			<div class="swiper-slide"
			     v-for="banner in bannerList"
			     :key="banner.id">
				<!-- <img :src="banner.img"> -->
				<div class="bg h-center"
				     :style="{backgroundImage: 'url(' + banner.img + ')'}">
					<div class="text-group" data-swiper-parallax="-900">
						<h2 v-html="banner.title" data-swiper-parallax="-500"></h2>
						<p data-swiper-parallax="-300">{{banner.description}}</p>
						<a :href="banner.url" data-swiper-parallax="-100">了解更多</a>
					</div>
				</div>
			</div>
		</div>
		<div class="scroll"><a href="#content"
			   class="go-down"><img src="~assets/img/go-down.png" alt=""></a></div>
		<div class="swiper-button-prev swiper-button-white"
		     slot="button-prev"></div>
		<div class="swiper-button-next swiper-button-white"
		     slot="button-next"></div>
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
						<li :class="[nowTab == item.id ? 'active' : '']"
						    v-for="item in aboutList"
						    :key="item.key"
						    @click="tabToggle(item.id)">
							<a href="#retina0"
							   aria-controls="home"
							   role="tab"
							   data-toggle="tab"
							   aria-expanded="false">
									<i :class="item.icon"></i>
									{{item.id}}. {{item.title}}
								</a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<transition name="fade"
						            mode="out-in">
							<div role="tabpanel"
							     v-for="item in aboutList"
							     :key="item.id"
							     v-if="nowTab == item.id"
							     class="tab-pane">
								<p>{{item.content}}</p>
							</div>
						</transition>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
		</div>
	</div>
	<div class="container"
	     style="height:2000px; background-color:#fff;">

	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
	data: function () {
		return {
			bannerList:[],
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
			nowTab: 1,
			img:''
			// scrollpage: document.getElementsByClassName( "el-scrollbar__wrap" )[ 0 ]
		}
	},
	methods: {
		tabToggle: function ( id ) {
			this.nowTab = id
		},
		async getBanner () {

      let { data } = await axios({
        method: 'get',
        url: `/index/getbanner`
      })
      this.bannerList = data.data.bannerList
			console.log(this.bannerList);
    }
	},
	async asyncData( {} ) {
		let { data } = await axios.get(`/index/info`)
		return {
					// bannerList: data.data.bannerList,
					aboutContent: data.data.aboutContent,
					aboutList: data.data.aboutList,
				}
		// return  api.getIndex()
		// 	.then( ( res ) => {
		// 		return {
		// 			bannerList: res.data.bannerList,
		// 			aboutContent: res.data.aboutContent,
		// 			aboutList: res.data.aboutList
		// 		}
		// 	} )
		// 	.catch( ( e ) => {
		// 		error( {
		// 			statusCode: 404,
		// 			message: 'Get not found'
		// 		} )
		// 	} )
	},created () {
    this.getBanner ()
  }
}
</script>

<style lang="sass" scoped>
	@import "~assets/css/index.scss";
</style>
