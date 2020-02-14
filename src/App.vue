<template>
  <div id="app">
    <Tabbar>
      <TabbarItem v-for="(item, index) in tabbarItems" :key="index" :text="item.name" :img-url="item.url" :img-url-active="item.urlActive" color-active="blue"/>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar/Tabbar'
  import TabbarItem from './components/tabbar/TabbarItem'
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return {
        tabbarItems: [
          {name: '首页', url: require('./assets/img/home.svg'), urlActive: require('./assets/img/home-active.svg')},
          {name: '分类', url: require('./assets/img/category.svg'), urlActive: require('./assets/img/category-active.svg')},
          {name: '购物车', url: require('./assets/img/cart.svg'), urlActive: require('./assets/img/cart-active.svg')},
          {name: '我的', url: require('./assets/img/profile.svg'), urlActive: require('./assets/img/profile-active.svg')},
        ]
      }
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>
