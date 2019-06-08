<template>
  <div id="app">
    <headerBar :seller="seller"></headerBar>

  </div>
</template>
<script>
 import HeaderBar from 'components/header-bar/header-bar'
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
     HeaderBar
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

</style>
