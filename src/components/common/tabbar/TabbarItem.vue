<template>
  <div id="tabbarItem" @click="itemClicked" :style="textStyle">
    <img :src="url"/>
    {{text}}
  </div>
</template>
<script>
  export default {
    name: 'TabbarItem',
    props: {
      'link': {
        type: String
      },
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
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.link) != -1
      },
      url(){
        return this.isActive ? this.imgUrlActive : this.imgUrl
      },
      textStyle(){
        return this.isActive ? {color: this.textColor} : {}
      }
    },
    methods: {
      itemClicked(){
        this.$router.replace(this.link).then(() => {console.log('处理成功')}).catch(err => {err}) //应为在vue-router 3.1版本以后$router的方法都返回一个promise，
        console.log(this.$route.path)
      }
    }
  }
</script>
<style scoped>
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