<template>
  <div id="app">
    <!--<hello></hello>-->
    <testForcuizhi></testForcuizhi>
  </div>
</template>
<script>
import hello from 'components/HelloWorld'
import testForcuizhi from 'components/testForCuizhijuzhong.vue'
import float from 'components/testForFloat.vue'
export default {
  name: 'app',
  data(){
    return{
      seller:{}
    }
  },
  components: {
      hello,
      testForcuizhi,
      float
  },
  computed:{

  },
  methods:{

  },
  created(){

  }
}
</script>
<style lang="stylus">
  *{
    margin  0
    padding :0
  }
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  .tab-wrapper
    position :fixed
    top:136px
    left:0
    right:0
    bottom:0
</style>
