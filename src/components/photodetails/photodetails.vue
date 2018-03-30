<template>
	<div class="photodetails">
		<p class="xiang">	{{maf}}</p>
	</div>
	
</template>
<script>
	export default {
		name: 'photodetails',
		data() {
			return {
				maf:"这里是详情"
			}
		}
	}
	   
</script>
<style lang="less" scoped>
	.xiang{
		padding:1rem;
	}
</style>