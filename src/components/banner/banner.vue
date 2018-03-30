<template>
    <div class="swiper-content" >
        <swiper>
            <swiper-slide v-for="item in listImg" :key="item.id">
                <img :src="item.httpImg">
            </swiper-slide>
           <!--  <div class="swiper-pagination"  slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
       
    </div>
	
	
</template>
<script>
    export default {
        props: ['listImg'],
        mounted() {
            
        }
    }
</script>
<style lang="less" scoped>
	.swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          height:4.6rem;
          img{
            width:100%;
            height:100%
          }
        }
    }
</style>
