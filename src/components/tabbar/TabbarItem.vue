<template>
  <div id="tabbarItem" @click=" isActive = !isActive" :class="{active: isActive}" :style="textStyle">
    <img :src="url"/>
    {{text}}
  </div>
</template>
<script>
  export default {
    props: {
      'imgUrl': {
        type: null
      }, 
      'imgUrlActive': {
        type: null
      }, 
      'text': {
        type: String
      }, 
      'textColor': {
        type: String,
        default: '#d4237a'
      }
    },
    data(){
      return {
        isActive: false
      }
    },
    computed: {
      url(){
        return this.isActive ? this.imgUrlActive : this.imgUrl
      },
      textStyle(){
        return this.isActive ? {color: this.textColor} : {}
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
  
</style>