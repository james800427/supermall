<template>
  <div id="nav">
    <div id="left"><slot name="left"></slot></div>
    <div id="center"><slot name="center"></slot></div>
    <div id="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'NavBar'
  }
</script>
<style>
  #nav{
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 44px;
  }
  #left{
    width: 60px;
    height: 44px;
    background-color: red
  }
  #center{
    flex-grow: 1;
    height: 44px;
    background-color: green
  }
  #right{
    width: 60px;
    height: 44px;
    background-color: red
  }
</style>