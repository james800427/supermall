<template>
  <div id="mainTabbar">
    <Tabbar>
      <TabbarItem v-for="(item, index) in tabbarItems" :key="index" :text="item.name" :img-url="item.url" :img-url-active="item.urlActive" :link="item.link"/>
    </Tabbar>
  </div>
</template>
<script>
  import Tabbar from './common/tabbar/Tabbar'
  import TabbarItem from './common/tabbar/TabbarItem'
  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return {
        tabbarItems: [
          {name: '首页', url: require('../assets/img/home.svg'), urlActive: require('../assets/img/home-active.svg'), link: '/home'},
          {name: '分类', url: require('../assets/img/category.svg'), urlActive: require('../assets/img/category-active.svg'), link: '/category'},
          {name: '购物车', url: require('../assets/img/cart.svg'), urlActive: require('../assets/img/cart-active.svg'), link: '/cart'},
          {name: '我的', url: require('../assets/img/profile.svg'), urlActive: require('../assets/img/profile-active.svg'), link: '/profile'},
        ]
      }
    }
  }
</script>
<style>

</style>