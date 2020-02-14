<template>
  <div id="tabbarItem" @click=" isActive = !isActive" :class="{active: isActive}">
    <img :src="url"/>
    {{text}}
  </div>
</template>
<script>
  export default {
    props: ['imgUrl', 'imgUrlActive', 'text', {
        'colorActive': {
          type: String,
          default: 'red'
        }
      }
    ],
    data(){
      return {
        isActive: false
      }
    },
    computed: {
      url(){
        return this.isActive ? this.imgUrlActive : this.imgUrl
      }
    }
  }
</script>
<style>
  #tabbarItem{
    height: 49px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1
  }
  img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: #d4237a
  }
</style>