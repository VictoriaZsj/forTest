<template>
  <div>
  <div class="ciuzhi">
    <!--使用绝对定位和负外边距-->
    <div class="child1">有一个小缺点：必须提前知道被居中块级元素的尺寸，否则无法准确实现垂直居中</div>
    <!--使用绝对定位和transform-->
    <!--<div class="child2">不知道尺寸的时候</div>-->
    <!--top和bottom设为相等的值-->
    <!-- <div class="child3">top和bottom设为相等的值</div> -->
  </div>
  <br>
  <br>
  <div class="ciuzhi2">
    <div class="child4">
      给父元素设置相等的上下内边距，则子元素自然是垂直居中的，当然这时候父元素是不能设置高度的
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'cuizhijuzhong',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .ciuzhi{
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
  
    .child1 {
      text-align: left;
      width: 120px;
      height: 190px;
      background: orange;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -60px 0 0 -95px;
      // margin: -25% 0 0 -75px; //百分比是相对于父元素尺寸计算的
    }
    .child2{
      background: #93BC49;
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
    .child3{
      width: 170px;
      height: 150px;
      background: orange;
      position: absolute;
      top:10px;
      bottom: 10px;
      left:65px; //(300-170)/2
      margin: auto;
    }
  }
  .ciuzhi2{
    width: 300px;
    padding: 30px;
    background: #ddd;
    .child4{
      width: 170px;
      height: 150px;
      background: orange;
    }

  }
</style>
