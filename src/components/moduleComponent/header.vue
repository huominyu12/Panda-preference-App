<template>
  <div class="header">
    <div class="header-content">
      <span class="search"><i class="icon-search"></i></span>
      <input placeholder="搜索商品,发现更多优惠券"/>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .header {
    display: inline-block;
    width: 100%;
    height: 40px;
    background: #fde35b;
    .header-content {
      position: relative;
      span {
        position: absolute;
        left: 5%;
        top: 5px;
        width: 30px;
        height: 30px;
        padding: 5px;
        box-sizing: border-box;
        display: inline-block;
        z-index: 20;
        i {
          font-size: 20px;
          color: #87796e;
        }

      }
      input {
        position: absolute;
        top:0;
        left: 0;
        margin: 5px 5%;
        padding-left:30px ;
        height: 30px;
        width: 90%;
        box-sizing: border-box;
        border: 1px solid white;
        border-radius: 8px;
        color: #b2aba7;

      }
      /*background: rgb(255,255,255);*/
      /*border-radius: 10px;*/
    }
  }
</style>
