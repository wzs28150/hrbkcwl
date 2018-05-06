<template>
<div class="full">
	<el-scrollbar>
		<Header :isTop="isTop" />

		<nuxt/>
	</el-scrollbar>
</div>
</template>
<script>
import Header from '../components/header/header';
export default
{
	data: function ()
	{
		return {
			isTop: false
			// scrollpage: document.getElementsByClassName( "el-scrollbar__wrap" )[ 0 ]
		}
	},
	components:
	{
		'Header': Header
	},
	methods:
	{
		handleScroll()
		{
			var scrollpage = document.querySelector( '.el-scrollbar__wrap' )
			var scrollTop = scrollpage.pageYOffset || scrollpage.scrollTop || scrollpage.scrollTop
			if ( scrollTop > 0 )
			{
				this.isTop = true
			}
			else
			{
				this.isTop = false
			}
		},
	},
	mounted()
	{
		document.querySelector( '.el-scrollbar__wrap' )
			.addEventListener( 'scroll', this.handleScroll )
	}
}
</script>
<style>

</style>
