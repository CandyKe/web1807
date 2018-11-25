import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/Index'
import Category from '@/containers/Category'
import HotMusic from '@/containers/Hotmusic'
import Search from '@/containers/Search'
import MusicMore from '@/containers/MusicMore'
import PlayMusic from '@/containers/PlayMusic'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/hotmusic',
      name: 'HotMusic',
      component: HotMusic
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/musicmore',
      name: 'MusicMore',
      component: MusicMore
    },
    {
      path:'/play/:id',
      name:'PlayMusic',
      component:PlayMusic
    }
  ]
})
