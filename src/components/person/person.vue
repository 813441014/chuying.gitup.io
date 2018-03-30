<template>
	<div class="person">
		<!-- <p>{{msg}}</p> -->
		<router-link to="/details" class="person_cl">个人中心  点击进入详情页面</router-link>	
	</div>
	
</template>
<script>
	export default {
		name: 'person',
		data() {
			return {
				
			}
		}
	}
</script>
<style lang="less">
.person{
	text-align: center;
	padding:0.5rem;
	.person_cl{
		text-decoration: none;
		color: #333;
		line-height:0.8rem;
		text-align: center;
		width:100%;
		margin: auto;
	}
}
	
</style>
