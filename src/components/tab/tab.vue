<template>
<div class="tab">
    <cube-tab-bar
    v-model="selectedLabel"
    :showSlider=true
    :useTransition=false
    :data="tabs"
    ref="tabBar">
    </cube-tab-bar>
    <div class="slide-wrapper">
        <cube-slide :showDots=false
                    :auto-play=false
                    :initial-index="index"
                    :loop=false
                    @change="onChange"
                    @scroll="onScroll"
                    :options="slideOptions"
                    ref="slide">
            <cube-slide-item>
                <goods></goods>
            </cube-slide-item>
            <cube-slide-item>
                <ratings></ratings>
            </cube-slide-item>
            <cube-slide-item>
                <seller></seller>
            </cube-slide-item>
        </cube-slide>
    </div>    
</div>    
</template>
<script>
import Goods from 'components/goods/goods'
import Seller from 'components/seller/seller'
import Ratings from 'components/ratings/ratings'
export default {
    name:'tab',
    data () {
    return {
      index: 0,
      tabs: [{
        label: '商品',
       
      }, {
        label: '评价',
        
      }, {
        label: '商家',
      
      }, ],
      slideOptions: {
          listenScroll:true,
          probeType: 3,
          directionLockThreshold: 0
      }
    }
  },
  components: {
      Goods,
      Seller,
      Ratings
  },
  methods: {
      onChange(currentIndex) {
        this.index = currentIndex
      },
      onScroll(pos) {
        //console.log(pos.x)
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth
        //console.log(tabBarWidth)
        const slideWidth = this.$refs.slide.slide.scrollerWidth
        //console.log(slideWidth)
        const transform = -pos.x / slideWidth * tabBarWidth
        //console.log(transform)
        this.$refs.tabBar.setSliderTransform(transform)
      }
 
  },
  computed: {
      selectedLabel: {
          get() {
              return this.tabs[this.index].label
          },
          set(newVal) {
              this.index = this.tabs.findIndex((value)=>{
                  return value.label === newVal
              })
          }
          
          }
      }
  }

</script>
<style lang='stylus' scoped>
 .tab 
   display:flex
   flex-direction:column
   height: 100%
   >>> .cube-tab
     padding: 10px 0
   .slide-wrapper
     flex:1
     overflow: hidden  
     
  

</style>