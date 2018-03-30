<template>
	<div>
		<p class="zx">__资讯__</p>
			<ul>
				<li v-for = "item in newslist">
					<span>{{item.id}}</span>
					<span>{{item.gameName}}</span>
				</li>
			</ul>
	</div>	
</template>

<script>
    export default {
        props: ['newslist'],
        created() {
        	
        },
        data(){
        	return{
        		
        	}
        }

    }
    
</script>

<style lang="less" scoped>
.zx{
	line-height:0.8rem;
	font-size:0.5rem;
	text-align: center;
	margin:0;
	padding:0;
	margin-top:0.2rem;
}
ul{
	padding:0.5rem 0.3rem;
	margin:0;
	li{
		list-style: none;
		span{
			margin:0;
			line-height:0.8rem;
		}
	}
}
	
</style>