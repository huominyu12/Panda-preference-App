<template>
  <div>
    <Myheader></Myheader>
    <div class="discover">
      <div class="hot-goods">
        <div class="hot">热门</div>
        <ul>
          <li v-for="item in discoveryPage.hotGrids">
            <img :src="item.imageUrl">
          </li>
        </ul>
      </div>
      <div class="catetory-box">
        <div class="catetory-title">分类</div>
        <ul>
          <li v-for="item in discoveryPage.grids">
            <img :src="item.imageUrl">
            <div class="title">{{item.title}}</div>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
  import header from '../moduleComponent/header.vue'

  export default {
    props: {
      discoveryPage: {
        types: Object
      }
    },
    data() {
      return {}
    },
    created() {
      console.log(this.discoveryPage)
    },
    components: {
      Myheader: header
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .discover{
    position: absolute;
    top:40px;
    left: 0;
    background: #f4f4f4;
    .hot-goods{
      width:100%;
      box-sizing: border-box;
      background: rgb(255,255,255);
      .hot{
        font-size: 18px;
        color: #432a16;
        padding: 15px;
      }
      ul{
        display: inline-block;
        padding-right: 15px;
        box-sizing: border-box;
        padding-bottom: 15px;
        margin-bottom: 0;
        li{
          display: inline-block;
          width: 33%;
          height: 100%;
          padding-left: 15px;
          box-sizing: border-box;
          img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
      }
    }
    .catetory-box{
      margin-top: 8px;
      background: rgb(255,255,255);
      .catetory-title{
        padding: 15px;
        color: #432a16;
        font-size: 18px;
      }
      ul{
        padding:0 20px;
        box-sizing: border-box;
        li{
          display: inline-block;
          width: 25%;
          margin-bottom: 15px;
          text-align: center;
          img{
            width: 70%;
          }
          .title{
            margin-top: 10px;
            color: gray;
          }
        }
      }
    }
  }



</style>
