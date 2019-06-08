<template>
  <div id="app">
    <headerBar :seller="seller"></headerBar>

  </div>
</template>
<script>
 import HeaderBar from 'components/header-bar/header-bar'
 import {getSeller} from 'api'
 export default {
   name:'app',
   data(){
     return{
       seller:{}
     }
   },
   components: {
     HeaderBar
   },
   created(){
     getSeller().then((seller)=>{
       this.seller=seller
     })
   }
 }
</script>


<style lang="stylus">

</style>
