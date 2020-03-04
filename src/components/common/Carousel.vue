<template>
  <div id="carousel" @mouseover="showBtn" @mouseout="hideBtn" :style="custSize">
    <!-- 只有使用行内样式，才能通过this.$refs.list.style.marginLeft获取到值 -->
    <ul id="list" ref="list" @transitionend="transitionEnd" 
      :style="{'width': widthOnNum*7+'px','transition-duration':'.3s','transform':'translate3d(-' + custWidth + ',0px,0px)','backface-visibility':'hidden'}">
      <li class="item" ref="img0"><a href=""><img src="../../assets/img/carousel/frame-5.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img1"><a href=""><img src="../../assets/img/carousel/frame-1.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img2"><a href=""><img src="../../assets/img/carousel/frame-2.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img3"><a href=""><img src="../../assets/img/carousel/frame-3.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img4"><a href=""><img src="../../assets/img/carousel/frame-4.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img5"><a href=""><img src="../../assets/img/carousel/frame-5.jpg" alt="" :style="custSize"></a></li>
      <li class="item" ref="img6"><a href=""><img src="../../assets/img/carousel/frame-1.jpg" alt="" :style="custSize"></a></li>
    </ul>
    <!-- <div id="seal" ref="seal" style="display:none;"><img src="../../assets/img/carousel/frame-1.jpg" alt=""></div> -->
    <button :style="{'top': (heightOnNum-30)/2+'px'}" class="btn" id="btn-goPre" ref="btnGoPre" @click="goPre">&lt;</button>
    <button :style="{'top': (heightOnNum-30)/2+'px'}" class="btn" id="btn-goNext" ref="btnGoNext" @click="goNext">&gt;</button>
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
    props: {
        'custWidth': {
          type: String,
          default: '260px'
        },
        'custHeight': {
          type: String,
          default: '160px'
        }
    },
    computed: {
      custSize(){
        return {'width': this.custWidth, 'height': this.custHeight}
      },
      widthOnNum(){
        return parseInt(this.custWidth.split('px')[0])
      },
      heightOnNum(){
        return parseInt(this.custHeight.split('px')[0])
      }
    },
    methods: {
      autoPlay(){
        this.index++
        this.$refs.list.style.transition = 'transform .3s'
        this.$refs.list.style.transform = `translate3d(-${this.index * this.dealWithPx(this.custWidth)}px, 0px, 0px)`
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
            that.$refs.list.style.transform = `translate3d(-${that.index * that.dealWithPx(that.custWidth)}px, 0px, 0px)`
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
        this.$refs.list.style.transform = `translate3d(-${this.index * this.dealWithPx(this.custWidth)}px, 0px, 0px)`
      },
      goNext(){
        this.index--
        this.$refs.list.style.transition = 'transform .3s'
        this.$refs.list.style.transform = `translate3d(-${this.index * this.dealWithPx(this.custWidth)}px, 0px, 0px)`
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
        this.$refs.list.style.transform = `translate3d(-${this.index * this.dealWithPx(this.custWidth)}px, 0px, 0px)`
      },
      dealWithPx(px){
        return parseInt(px.split('px')[0])
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
    position: relative;
    overflow: hidden
  }
  #list{
    height: 100%
  }
  .item{
    float: left;
  }
  .btn{
    width: 30px;
    height: 30px;
    padding: 1px;
    font-size: 20px;
    color: #fff;
    z-index: 100;
    position: absolute;
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
    right: 10%;
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