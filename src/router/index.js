import Vue from 'vue'
import VueRouter from 'vue-router'
/*import App from '../App'*/
Vue.use(VueRouter)





export default new VueRouter({  
  routes:[
		{
		   path: '/',
		   redirect: '/main/index'
  		},
  		{
  			path: '/main',
		   component: resolve => require(['../components/main/main.vue'], resolve),
		    children:[
                {
                    path: 'index',
                    component: resolve => require(['../components/index/index.vue'], resolve)
                },
                {
                    path: 'gift',
                    component: resolve => require(['../components/gift/gift.vue'], resolve)
                },
                {
                    path: 'person',
                    component: resolve => require(['../components/person/person.vue'], resolve)
                },
                {
                    path: 'community',
                    component: resolve => require(['../components/community/community.vue'], resolve),
                    children:[
                    {
                      path:"",
                      redirect:"photoswipe"
                    },
                    {
                      path:"photoswipe",
                      component: resolve => require(['../components/photoswipe/photoswipe.vue'], resolve)
                    },
                    {
                      path:"photodetails",
                      component: resolve => require(['../components/photodetails/photodetails.vue'], resolve)
                    }
                    ]
                },
                {
                    path: 'shop',
                    component: resolve => require(['../components/shop/shop.vue'], resolve),
                    children:[
                    {
                      path:"",
                      redirect:"shoptrue"
                    },
                     {
                      path: 'shoptrue',
                      component: resolve => require(['../components/shoptrue/shoptrue.vue'], resolve)
                      },
                       {
                      path: 'shopfalse',
                      component: resolve => require(['../components/shopfalse/shopfalse.vue'], resolve)
                      }
                    ]
                }
            ]
  		},
      {
        path:"/details",
        component:resolve => require(['../components/details/details.vue'], resolve)
      }
	]
})

