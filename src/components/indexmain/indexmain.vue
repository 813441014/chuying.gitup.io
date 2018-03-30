<template>
	<div class="indexmain">
		<v-main></v-main>
		<div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>  
	</div>
		
</template>
<script>
	import vMain from '../main/main.vue';
	export default {
		components:{
				vMain
		},
	}
</script>

<style lang="less">
	.indexmain{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
}
</style>