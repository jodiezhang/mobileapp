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
            <cube-slide-item v-for="(tab,index) in tabs" :key="index">
                <component ref="component" :is="tab.component" :data="tab.data"></component>
            </cube-slide-item>
            
        </cube-slide>
    </div>    
</div>    
</template>
<script>

export default {
    name:'tab',
    props: {
        tabs: {
            type: Array,
            default(){
                return {}
            }
        },
        initialIndex:{
            type: Number,
            default:0
        }
    },
    data () {
    return {
      index: this.initialIndex,
      slideOptions: {
          listenScroll:true,
          probeType: 3,
          directionLockThreshold: 0
      }
    }
  },
  methods: {
      onChange(currentIndex) {
        this.index = currentIndex
      },
      onScroll(pos) {
  
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth
        const slideWidth = this.$refs.slide.slide.scrollerWidth
        const transform = -pos.x / slideWidth * tabBarWidth
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