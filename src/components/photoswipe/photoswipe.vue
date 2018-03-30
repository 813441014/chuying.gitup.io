<template>	
	<div class="photoswipe">
		<vue-preview :slides="slide1" @close="handleClose" class="ass"></vue-preview>
	</div>
		
</template>

<script>
		import 'photoswipe/dist/photoswipe.css' ;
		import 'photoswipe/dist/default-skin/default-skin.css';
	export default{
		name:'photoswipe',
		data(){
			return{
				mag:"灯箱效果",
				slide1: [
				          {
				            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
				            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
				            alt: 'picture1',
				            title: 'Image Caption 1',
				            w: 600,
				            h: 400
				          },
				          {
				            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
				            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
				            alt: 'picture2',
				            title: 'Image Caption 2',
				            w: 1200,
				            h: 900
				          },
				          {
				            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
				            msrc: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
				            alt: 'picture2',
				            title: 'Image Caption 2',
				            w: 1280,
				            h: 720
				          },
				          {
				            src: 'http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg',
				            msrc: 'http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg',
				            alt: 'picture2',
				            title: 'Image Caption 2',
				            w: 1200,
				            h: 1200
				          }
				        ]
			}
		},
		methods: {
      handleClose () {
        console.log('close event')
      }
    }
	}
</script>

<style lang="less" >
.ass{
	width:100%;
	.my-gallery{
		width:100%;
		height:2rem;
		overflow: auto;
		margin-top:3%;
			figure{
			width:23%!important;
			margin:0;
			height:1rem;
			padding:0;
			float: left;
			padding:0 1%;
			/*object-fit: fill;*/
			img{
				width:100%;
				height:100%;
				/*margin-top:-10%;*/
				/*object-fit: none ;
				object-fit: contain ;*/
				object-fit: cover ;
			}
			}
	}
	.pswp__button--share{
			display:none;
	}
	.pswp--supports-fs .pswp__button--fs{
		display:none;
	}

}


</style>