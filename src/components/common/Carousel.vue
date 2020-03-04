<template>
  <div id="carousel" @mouseover="showBtn" @mouseout="hideBtn">
    <!-- 只有使用行内样式，才能通过this.$refs.list.style.marginLeft获取到值 -->
    <ul id="list" ref="list" @transitionend="transitionEnd" 
      style="transition-duration:.3s;transform:translate3d(-260px,0px,0px);backface-visibility:hidden" 
      >
      <li class="item" ref="img0"><a href=""><img src="../../assets/img/carousel/frame-5.jpg" alt=""></a></li>
      <li class="item" ref="img1"><a href=""><img src="../../assets/img/carousel/frame-1.jpg" alt=""></a></li>
      <li class="item" ref="img2"><a href=""><img src="../../assets/img/carousel/frame-2.jpg" alt=""></a></li>
      <li class="item" ref="img3"><a href=""><img src="../../assets/img/carousel/frame-3.jpg" alt=""></a></li>
      <li class="item" ref="img4"><a href=""><img src="../../assets/img/carousel/frame-4.jpg" alt=""></a></li>
      <li class="item" ref="img5"><a href=""><img src="../../assets/img/carousel/frame-5.jpg" alt=""></a></li>
      <li class="item" ref="img6"><a href=""><img src="../../assets/img/carousel/frame-1.jpg" alt=""></a></li>
    </ul>
    <!-- <div id="seal" ref="seal" style="display:none;"><img src="../../assets/img/carousel/frame-1.jpg" alt=""></div> -->
    <button class="btn" id="btn-goPre" ref="btnGoPre" @click="goPre">&lt;</button>
    <button class="btn" id="btn-goNext" ref="btnGoNext" @click="goNext">&gt;</button>
    <ul class="points">
      <li class="point" @click="pointClick(1)" :style="index==1 ? {'background-color': 'red'} : {}"></li>
      <li class="point" @click="pointClick(2)" :style="index==2 ? {'background-color': 'red'} : {}"></li>
      <li class="point" @click="pointClick(3)" :style="index==3 ? {'background-color': 'red'} : {}"></li>
      <li class="point" @click="pointClick(4)" :style="index==4 ? {'background-color': 'red'} : {}"></li>
      <li class="point" @click="pointClick(5)" :style="index==5 ? {'background-color': 'red'} : {}"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Carousel',
    data(){
      return {
        timer: 0,
        index: 0, 
        isMouseOver: false // 用来决定是否执行startPlay()方法，false为执行，true为不执行 
      }
    },
    methods: {
      autoPlay(){
        this.index++
        this.$refs.list.style.transition = 'transform .3s'
        this.$refs.list.style.transform = `translate3d(-${this.index * 260}px, 0px, 0px)`
      },
      rollBack(){ 
          this.stopPlay()
          this.index  = this.index > 5 ? 1 : 5
          this.$refs.list.style.transition = 'transform 0s'
          // 'this' here is 'VueComponent' object
          let that = this
          //下列setTimeout是为了保证切换流畅
          setTimeout(function(){
            // 'this' here(in anonymous function) is 'window' object.
            that.$refs.list.style.transform = `translate3d(-${that.index * 260}px, 0px, 0px)`
            if ( !that.isMouseOver ){
             that.startPlay()
            }
          }, 300)
      },
      transitionEnd(){
        if ( this.index > 5 || this.index < 1){
          this.rollBack()
        }
      },
      goPre(){
        this.index++
        this.$refs.list.style.transition = 'transform .3s'
        this.$refs.list.style.transform = `translate3d(-${this.index * 260}px, 0px, 0px)`
      },
      goNext(){
        this.index--
        this.$refs.list.style.transition = 'transform .3s'
        this.$refs.list.style.transform = `translate3d(-${this.index * 260}px, 0px, 0px)`
      },
      stopPlay(){
        clearInterval(this.timer)
        this.timer = 0
      },
      startPlay(){
        if ( this.timer === 0){
          this.timer = setInterval(this.autoPlay, 3000)
        }
        
      },
      showBtn(){
        this.stopPlay()
        this.isMouseOver = true
        this.$refs.btnGoPre.style.visibility = "visible"
        this.$refs.btnGoNext.style.visibility = "visible"
      },
      hideBtn(){
        this.$refs.btnGoPre.style.visibility = "hidden"
        this.$refs.btnGoNext.style.visibility = "hidden"
        this.isMouseOver = false
        this.startPlay()
      },
      pointClick(point){
        this.index = point
        this.$refs.list.style.transform = `translate3d(-${this.index * 260}px, 0px, 0px)`
      }
    },
    mounted(){
      this.startPlay()
    }
  }
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0
  }
  #carousel{
    width: 260px;
    height: 160px;
    position: relative;
    overflow: hidden
  }
  #list{
    width: 1820px;
    transition-duration: .3s
  }
  .item{
    float: left;
  }
  img{
    width: 260px;
    height: 160px
  }
  #seal{
    width: 260px;
    height: 160px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 50
  }
  .btn{
    width: 30px;
    height: 30px;
    padding: 1px;
    font-size: 20px;
    color: #fff;
    z-index: 100;
    position: absolute;
    top: 65px;
    background-color: rgb(60, 60, 33);
    border: solid 1px rgb(60, 60, 33);
    border-radius: 100%;
    visibility: hidden;
    opacity: .3
  }
  #btn-goPre{
    left: -15px;
    text-align: right
  }
  #btn-goNext{
    right: -15px;
    text-align: left
  }
  .points{
    list-style: none;
    position: absolute;
    bottom: 6px;
    left: 100px;
    z-index: 120
  }
  .point{
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid 1px #f7f4f4;
    background-color: #524f4f;
    margin-right: 3px;
  }
</style>