<template>
	<div class="main">
		<router-view></router-view>
	    <div class="foot-nav">
		      <div class="nav-box" id="navindex">
		        <router-link to="/main/index" class="active"><i class="el-icon-date"></i><p>首页</p></router-link>
		      </div>
		      <div class="nav-box">
		        <router-link to="/main/community"><i class="el-icon-date"></i><p>社区</p></router-link>
		      </div>
		      <div class="nav-box">
		        <router-link to="/main/gift"><i class="el-icon-date"></i><p>礼包</p></router-link>
		      </div>
		      <div class="nav-box">
		        <router-link to="/main/shop"><i class="el-icon-date"></i><p>商城</p></router-link>
		      </div>
		      <div class="nav-box">
		        <router-link to="/main/person"><i class="el-icon-date"></i><p>个人中心</p></router-link>
		      </div>
		  </div>
	</div>
		
</template>
<script>
	export default {
		/*name: 'main',*/
		data() {
			return {
				
			}
		}
	}
</script>
<style lang="less">
.main{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	.foot-nav{
		position:fixed;
		left:0;
		right:0;
		bottom:0;
		height:1.3rem;
		background-color:#545c64;
		display:flex;
		.nav-box{
			width:25%;
			text-align:center;
			line-height:0.6rem;
			border:none;
			padding:0;
			height:1.3rem;
			background-color:#545c64;
			a{
				text-decoration: none;
				color:#fff;
				&.router-link-active{
					color:#3BB713;
				}

			}

			i{
				margin:0;
				padding:0;
				font-size:0.4rem;
				margin-top: 0.2rem;
				line-height: 0.3rem;
			}
			p{
				margin:0;
				text-decoration: none;
				font-size:0.3rem;
				line-height:0.5rem;
			}
		}
	}
}
	
</style>