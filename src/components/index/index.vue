<template>
	<div class="index">
		<div id="wrap"  class="wrapper" ref='indexwrap'>
			<div class="content">
					<div class="inp">
						<input type="text" name="" id="search" placeholder="搜索">
					</div>
					<app-banner :listImg="listImg"></app-banner>
					<!-- <app-hot :hotlist="hotlist"></app-hot> -->

					<app-news :newslist="newslist"></app-news>
					<div class="allgame">
						<p class="gamename">__所有游戏__</p>
						<ul>
							<li v-for="item in allgamelist">
								{{item.id}}
								{{item.gameName}}
							</li>
						</ul>
						<p class="botline">	{{message}}</p>
					</div>
					
			</div>
		
		</div>
	</div>
	
</template>
<script>
	import qs from 'qs';
 	import Banner from '@/components/banner/banner.vue';
 /*	import Hot from '@/components/hot/hot.vue';*/
 	import News from '@/components/news/news.vue';
 	import BScroll from 'better-scroll';
 	var totolpage = 1;
	export default {
		name: 'index',
		data() {
			return {
				msg: "这里是首页",
				listImg:[
						
				],
				newslist:[
					
				],
				page:1,
				totalpage:totolpage,
				allgamelist:[],
				message:"上拉加载更多"
			}
		},
		created(){
			this.getDate();
			this.getEveryday();
			this.getNews();
			this.allgame()
		},
		methods:{
			async getDate(){
                await this.$axios({
                    method: "get",
                    url: "../../../static/banner.json"
                }).then((res)=>{
                    this.listImg = res.data
                })
            },
            async getEveryday(){
                await this.$axios({
                    method: "get",
                    url: "../../../static/hot.json"
                }).then((res)=>{
                    this.hotlist = res.data
                })
            },
            async getNews(){
            	await this.$axios({
                    method: "get",
                    url: "../../../static/news.json"
                }).then((res)=>{
                    this.newslist = res.data
                })
            },
            async allgame(){
            	await this.$axios({
                    method: "get",
                    url: "../../../static/allgame.json",
                    data:qs.stringify({
						"nowPage":this.page
					})
                }).then((res)=>{
                    this.allgamelist = this.allgamelist.concat(res.data.arrGame);
                    this.$nextTick(() => {
		            if (!this.scroll) {
		              this.scroll = new BScroll(this.$refs.indexwrap, {});
		              console.log(this.scroll);
		              this.scroll.on('touchEnd', (pos) => {
		                console.log(pos.y);
		                if (pos.y > 50) {
		                	/*刷新*/
		                 
		                }
		                if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
		                	if(res.data.toltalPage<this.page){

		                		this.message = "我们是有底线的哦"
		                	}else{
		                		this.page=parseInt(this.page)+parseInt("1");
		                	 	this.allgame();

		                	}
		                	
						}
		              })
		            } else {
		              this.scroll.refresh()
		            }
		          })
		        })
            }
		},
		components: {
            'app-banner': Banner,
            /*n*/
            'app-news':News
        }
	}
</script>
<style lang="less" scoped>
.wrapper{
	position:absolute;
	top:0rem;
	left:0;
	right:0;
	bottom:1.3rem;
		.inp{
			background:#545c64;
			width:100%;
			line-height:0.8rem;
			height:0.8rem;
			text-align: center;
			input{
				background:#fff;
				border:none;
				width:80%;
				margin:auto;
				line-height:0.6rem;
				margin-top:0.1rem;
				border-radius:0.54rem;
				text-indent:1em;

			}
		}
		.allgame{
			.gamename{
				line-height:0.8rem;
				font-size:0.5rem;
				text-align: center;
				margin:0;
				padding:0;
			}
			ul{
				padding:0;
				padding: 0.5rem 0.3rem;
				li{
					list-style: none;
					line-height:0.8rem;
				}
			}
			.botline{
				text-align: center;
				line-height: 0.8rem;
				height:0.8rem;
			}
		}
}
</style>
