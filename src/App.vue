<template>
  <div id="app">
    <headerBar :seller="seller"></headerBar>
    <div class='tab-wrapper'>
    <tab :tabs="tabs" :initialIndex=0></tab>
    </div>
  </div>
</template>
<script>
 import HeaderBar from 'components/header-bar/header-bar'
 import Goods from 'components/goods/goods'
 import Seller from 'components/seller/seller'
 import Ratings from 'components/ratings/ratings'
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
   },
  computed: {
    tabs(){
      return [
      {label: '商品' , component: Goods, data: {seller:this.seller}},
      {label: '评价' , component: Ratings, data: {seller:this.seller}},
      {label: '商家' , component: Seller, data: {seller:this.seller}},
    ]}
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
