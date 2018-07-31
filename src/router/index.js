import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'


// 全局注册
Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  'linkActiveClass':'active',
  routes: [
    {
      path: '/',
      redirect:'/goods',
      name: 'goods',
      component: goods
    },{
      path:'/seller',
      name:'seller',
      component:seller
    },{
      path:'/goods',
      name:'goods',
      component:goods
    },{
      path:'/ratings',
      name:'ratings',
      component:ratings
    }
  ]
})
