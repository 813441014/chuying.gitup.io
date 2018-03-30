<template>
	<div class="shop">
		<app-banner :listImg="listImg"></app-banner>
		<nav>
			<ul>
				<li>
					<router-link to="/main/shop/shoptrue" class="navcss">实物</router-link>	
				</li>
				<li>
					<router-link to="/main/shop/shopfalse" class="navcss">虚拟</router-link>	
				</li>
			</ul>
		</nav>
		<router-view></router-view>	
	</div>
</template>
<script>
import Banner from '@/components/banner/banner.vue';
	export default{
			name:'shop',
			data(){
				return{
					listImg:[
						
					]
				}
			},
			created(){
				this.getDate()
			},
			methods:{
				async getDate(){
	                await this.$axios({
	                    method: "get",
	                    url: "../../../static/banner.json"
	                }).then((res)=>{
	                    this.listImg = res.data
	                })
            	}
			},
			components: {
            'app-banner': Banner
        	}
	}
</script>
<style lang="less" scoped>
	nav{
		background:#545c64;
		ul{
			display:flex;
			padding: none;
			margin:0;
			li{
				list-style: none;
				width:50%;
				text-align: center;
				.navcss{
					text-decoration: none;
					line-height:0.8rem;
					font-size:0.4rem;
					color:#fff;
				}
				.router-link-active{
					color:#3BB713;
				}
			}
		}
	}
</style>