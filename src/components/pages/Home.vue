<template>
  <div id="home">
    <Navbar>
      <template v-slot:left>
        left
      </template>
      <template v-slot:center>
        center
      </template>
      <template v-slot:right>
        right
      </template>
    </Navbar>
    <Carousel cust-width="600px" cust-height="300px"/>
  </div>
</template>
<script>
  import Navbar from '../common/navbar/Navbar'
  import Carousel from '../common/Carousel'
  // import axios from 'axios'
  export default{
    name: 'Home',
    components: {
      Navbar,
      Carousel
    },
    data(){
      return {
        // 
      }
    },
    // created(){
    //   axios.get('https://aecpm.alicdn.com/tps/i2/TB10vPXKpXXXXacXXXXvKyzTVXX-520-280.jpg').then((res) => {
    //     this.result = res.data
    //     console.log(res)
    //   }).catch((err) => {console.log(err)}).then(() => {console.log('axios.get()执行完成')})
    // }
  }
</script>
<style>

</style>
