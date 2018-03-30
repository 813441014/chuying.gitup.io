<template>
	<div  class="community">
		<nav>
            <ul>
                <li>
                    <router-link to="/main/community/photodetails" class="navcss">详情</router-link>   
                </li>
            </ul>
        </nav>
       <!--  <router-view></router-view>	 -->
        <router-view></router-view> 
	</div>
</template>
<script>
	import photoSwipe from 'photoswipe';
	import 'photoswipe/dist/photoswipe.min.js';
	import 'photoswipe/dist/photoswipe-ui-default.min.js';
	export default {
		name: 'community',
		data() {
			return {
				
			}
		}
	}
	   
</script>
<style lang="less" scoped>
.wenzi{
    line-height:1rem;
}
	figure {
		margin:0;
		padding:0;
		a{
			width:33.3%;
			img{
				max-width:100%;
			}
		}
	}
</style>