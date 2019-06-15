<template>
  <div>
    <h3>浮动清除</h3>
    <div class="content clearfix">
        <div class="float1">
        </div>
        <div class="fix"></div>
        <!-- <span class="fix">是否水电费舒服</span> -->
        <!-- <span class="fix2"></span> -->
        <div class="float2">
        </div> 
        <!-- <br clear="all" /> -->
    </div>
    <div class="line"></div>
    <br>
    <br>
    <h3>自适应</h3>
     <div class="box">
        <div class="left"></div>
        <div class="right"></div>
        <div class="cont">
            <div class="aa"></div>
            <div class="bb"></div>
        </div>
        
    </div>
  </div>
</template>

<script>
  export default {
    name: 'float',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    text-align: left;
      &:before{
        text-align: left;
         content: '<' ;
         width: 50px;
         height: 50px;
      }
      width: 200px;
    //   height: 100px;
      &.clearfix::after{
          content: '';
          display: block;
          clear: both;
          height:0;
          line-height:0;
          visibility:hidden;
      }
      border: 1px solid black;
      .float1{
          float: left;
          width: 70px;
          height: 50px;
          border: 1px solid red;
          
      }
      .float2{
          float: right;
          width: 50px;
          height: 50px;
          border: 1px solid red
      }
      .fix{
          text-align: left;
          width: 110px;
          height: 100px;
          border: 1px solid blue;
          // clear: left;
          // &::after{
          //   content: ' ' ;
          //   width: 50px;
          //   height: 50px;
          //   } 
          //  &::before{
          //   content: '《' ;
          //   width: 50px;
          //   height: 50px;
          //   }
      }
      .fix2{
          text-align: left;
          display: inline-block;
          width: 100px;
          height: 100px;
          border: 1px solid blue;
          clear: right;
          
          &::after{
            content: '》' ;
            width: 50px;
            height: 50px;
            } 
           &::before{
            content: '《' ;
            width: 50px;
            height: 50px;
            }
          
      }
  }
  .line{
      position: relative;
      &:after{
          margin-top: 10px;
          content:'';
          position:absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1px;
          background-color: #000000;
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
      }
  }
  /////////////////////
        .box {
            height: 200px;
            position: relative;
            .aa{
                padding: 0 10px ;
                position: relative;
                left: 250px; 
                height: 100%;
                width: 100px;
                background: black 
            }
            .left {
            width: 200px;
            background-color: red;
            float: left;
            height: 100%;
            }
            .cont {
                background-color: yellow;
                height: 100%;
            }
            .right {
                width: 200px;
                background-color: green;
                float: right;
                height: 100%;
            }
        }
</style>
