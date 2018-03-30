<template>
	<div class="gift">
		<div id="wrap"  class="wrapper" ref='wrapper'>
			<div class="content">
				<div class="loading-wrapper topline">
					<span class="">{{toptishi}}</span>
				</div>
				<ul v-for="item in giftlist">
					<li>
						<div class="icon">
							<img v-bind:src="item.ioc">
						</div>
						<div class="game_title">
							<div><p>{{item.gameName}}</p><p>{{item.descriptor}}</p></div>
							<div>
								<span class="playnow" onclick="newPay()">
									<img src="">
								</span>
							</div>
						</div>
						<div class="clearfix"></div>
					</li>
					<template v-if="item.giftList.length > 0">
						<li v-for="giftitem in item.giftList" class="gift_list">
							<div class="game_describle">
								<p>{{giftitem.giftTitle}}</p>
								<p>{{giftitem.giftDescriptor}}</p>
								<p class="game_line">
									<i>
										<span class="line" style="width:30.5%">

										</span>
									</i>
									<span>剩余70%</span>
								</p>
								<div>
									<span class="getgift" id="gtigiftid10" onclick="gamecli()">
										<!-- <img src="./img/getgift.png"> -->
									</span>
								</div>
							</div>
						</li>
					</template>

				</ul>
				<div class="loading-wrapper botline">
					<span>{{bottishi}}</span>
				</div>
			</div>
			 
			

		</div>
		

</div>

</template>
<script>
import BScroll from 'better-scroll';
import qs from 'qs';
	export default {
		name: 'gift',
		data() {
			return {
				msg: "这里个人礼包",
				giftlist:[

				],
				listitems:[

				],
				 page:"1",
				 totalPage:"",
				 toptishi:"下拉加载",
				 bottishi:"上拉刷新"
			}
		},
		created(){
			this.getDate();
			this.$nextTick(() => { // 原始写法 this.$nextTick(function () {});
		        // 调用滚动的初始化方法
		    })
		     /*this.loadData()*/
		},
		methods:{
			loadData() {
		        this.getDate().then((res) => {
		          this.giftlist = res.data[0].arrGiftFree.concat(this.giftlist)
		          this.$nextTick(() => {
		            if (!this.scroll) {
		              this.scroll = new BScroll(this.$refs.wrapper, {})
		              this.scroll.on('touchend', (pos) => {
		                // 下拉动作
		                if (pos.y > 50) {
		                  this.loadData()
		                }
		              })
		            } else {
		              this.scroll.refresh()
		            }
		          })
		        })
	    	},
			async getDate(){
                await this.$axios({
                    method: "get",
                    url: "../../../static/gamegift.json",
                    /*data: qs.stringify({
						"nowPage":this.page,
					})*/
                }).then((res)=>{
                	this.totalPage=res.data[0].totalPage;
                    this.giftlist = res.data[0].arrGiftFree.concat(this.giftlist);
                    this.$nextTick(() => {
		            if (!this.scroll) {
		              this.scroll = new BScroll(this.$refs.wrapper, {});
		              console.log(this.scroll);
		              this.scroll.on('touchEnd', (pos) => {
		              	console.log(pos);
		                if (pos.y > 50) {
		                  this.page=parseInt(this.page)+parseInt("1");
		                  if(this.page>this.totalPage){
		                  	this.toptishi = "已经加载全部"
		                  }else{
		                  	this.getDate()
		                  }
		                  
		                }
		                if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
		                	this.bottishi = "刷新成功"
						}else{
							
						}
		              })
		            } else {
		              this.scroll.refresh()
		            }
		          })
		        })
            },
		}
	}
</script>
<style lang="less" scoped>
.topline{
	line-height:0.8rem;
	text-align: center;
}
.botline{
	line-height:0.8rem;
	text-align: center;
}
#wrap{
	position:absolute;
	top:0rem;
	left:0;
	right:0;
	bottom:1.3rem;
	ul{
		list-style: none;
		background: #23252F;
		margin-top: 0;
		text-align: center;
		padding:0;
		margin:0;
		li{
			color: #fff;
   			padding: 0.2rem 0 0.3rem 0;
   			text-align: left;
   			color: #fff;
			height: 3rem;
			padding: 0.2rem 0 0.3rem 0;
			display:flex;
			&:nth-of-type(1){
			    .icon{
					 &:nth-of-type(1){
					   width: 2.5rem;
						height: 2.5rem;
						margin-top: 0.2rem;
						margin-left: 0.1rem;
						border-radius: 0.6rem;
						img{
						    width: 1.66rem;
							height: 1.66rem;
							margin-top: 0.2rem;
							margin-left: 0.1rem;
							border-radius: 0.6rem;
						    }
					    }
					}
					.game_title{
					    flex:1;
					   	display:flex;
					    div{
					    	&:nth-of-type(1){
					    	flex:1;
					    	}
					    }

				    }
				    .clearfix {
					    clear: both;
					}
			 }
			 .gift_list{
			 	color: #fff;
			 	.game_describle{
			 	    float: left;
					width: 6rem;
					text-align: left;
			 	}
			 	.game_line{
			 		line-height: 0.8rem;
    				margin-top: 0.15rem;
			 	}
			 }

		}
	}
}

</style>
