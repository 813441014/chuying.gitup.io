<template>
	<div class="swiper_content">
		<p>热门推荐</p>
	  <swiper>
	  	<swiper-slide v-for="item in hotlist" class="hotitem">
	  		<img :src="item.gameImgUrl">
	  	</swiper-slide>
	  	<div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	  <div class="slider" ref="slider">
	  	<!-- 最外层wrapper -->
	      <div class="slider-group" ref="sliderGroup">
	     <!--  	//content层 -->
	     <slider >
			  <div v-for="item in recommends " class="hotitem">
			    <a href="">
			      <img :src="item.httpImg">
			    </a>
			  </div>
			</slider>
		      <slot>
		      </slot>
		    </div>
		</div>
  </div>
</template>

<script>
    export default {
        props: ['hotlist'],
        created() {
        },
        data(){
        	return{
        		recommends:[
        			 	{  
				          'httpImg': 'http://p0oqd5s9w.bkt.clouddn.com/1521171983506@kaka-2SMooiDJ.jpg'  
					      }, 
					      {  
					        'httpImg': 'http://p0oqd5s9w.bkt.clouddn.com/yundian%20banner'  
					      }, 
					      {  
					          'httpImg': 'http://p0oqd5s9w.bkt.clouddn.com/yundian%20banner'  
					    }
        		]
        	}
        }

    }
    
</script>

<style lang="less" scoped>
.swiper_content{
	p{
		text-align:center;
	}
	.hotitem {
      width:33.3%;
      img{
      	width:33.3%;
      }
    }
}	
	
</style>