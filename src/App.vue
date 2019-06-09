<template>
  <div id="app">
    <headerBar :seller="seller"></headerBar>
    <div class='tab-wrapper'>
    <tab></tab>
    </div>
  </div>
</template>
<script>
 import HeaderBar from 'components/header-bar/header-bar'
 import Tab from 'components/tab/tab'
 import {getSeller} from 'api/index'
 export default {
  name:'app',
   data(){
     return{
       seller:{}
     }
   },
  created(){
     this._getSeller();
   },
  components: {
     HeaderBar,
     Tab
   },
  methods: {
     _getSeller(){
      getSeller().then((seller)=>{
       this.seller=seller
     })
     }
   }
 
 }
</script>


<style lang="stylus">
   .tab-wrapper
     position:fixed
     top:136px
     left:0
     right:0
     bottom:0

</style>
