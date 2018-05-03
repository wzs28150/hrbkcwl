<template>
<header class="header-normal">
	<div class="container">
		<!-- Logo -->
		<div class="logo"><a href="/index.html"><img class="img-responsive" src="../../../../asset/images/logo.png" alt=""></a></div>
    <input type="checkbox" id="myInput">
    <label for="myInput" class=" myInput fr">
      <div class="menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"> </div>
      </div>
    </label>
		<!-- Navigation -->
		<nav class="navbar webimenu">
			<!-- NAV -->
			<ul class="nav ownmenu">
				<li class="active meganav">
					<a href="/index.html" title="网站首页">网站首页</a>
				</li>
				<li>
					<a href="/about_2.html" title="关于我们">关于我们</a>
				</li>
				<li>
					<a href="/products_9.html" title="产品中心  ">产品中心  </a>
				</li>
				<li>
					<a href="/case_10.html" title="项目展示">项目展示</a>
				</li>
				<li>
					<a href="/services_13.html" title="服务中心">服务中心</a>
				</li>
				<li>
					<a href="/blog_14.html" title="博客资讯">博客资讯</a>
				</li>
				<li>
					<a href="/contact_16.html" title="联系我们">联系我们</a>
				</li>
			</ul>
		</nav>

		<!-- Social Icons -->
		<div class="social_icons">
			<a href="#." target="_blank"><i class="fa fa-weibo"></i></a>
			<a href="tencent://message/?uin=2503072299&amp;Site=&amp;Menu-=yes" target="_blank"><i class="fa fa-qq"></i></a>
			<a href="/contact_16.html#content" target="_blank"><i class="fa fa-weixin"></i></a>
			<a href="#." target="_blank"><i class="fa fa-youtube-play"></i></a>
		</div>
	</div>
</header>
</template>
<style lang="sass" scoped>
  @import "./header.scss";
</style>
<script type="text/babel">
export default
{
	data()
	{
		return {
			selectedMenu: '/app'
		}
	},
	computed:
	{

	},
	mounted()
	{
		this.selectedMenu = window.location.pathname.toLowerCase()
			.replace( /\/$/, '' );
	}
}
</script>
