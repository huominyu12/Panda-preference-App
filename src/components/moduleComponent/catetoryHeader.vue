<template>
  <div>
    <div class="daily-title"><span class="back"><i class=""></i></span>
      {{title}}
    </div>
    <div class="catetory">
      <div class="left">
        <router-link :to="'/'+pageRouter+'/'+pageData[0]"><span>pageData[0]</span></router-link>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in pageData" v-if="index>0">
            <router-link :to="'/'+pageRouter+'/'+item.name">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      pageRouter: {
        type: String
      },
      pageData: {
        type: Object
      }
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import '../../common/less/mixin.less';
  .daily-title {
    width: 100%;
    height: 40px;
    background: #fee25b;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    .back {
      float: left;
      width: 40px;
      height: 40px;
      font-size: 30px;
    }
  }
  .catetory {
    display: flex;
    width: 100%;
    height: 40px;
    background: #fee25b;
    .left {
      flex: 0 0 70px;
      display: inline-block;
      margin: 7px 0;
      text-align: center;
      border-right: 1px solid #c9ab31;
      font-size: 18px;
      a {
        color: #77571d;
        font-weight: 700;
        text-decoration: none;
      }
      a.active {
        .border-bottom-3px(#40240c, -10px, 0, 100%);
        text-decoration: none;
      }
    }
    .right {
      flex: 1;
      display: inline-block;
      margin: 0 18px;
      width: 70%;
      height: 40px;
      ul {
        white-space: nowrap;
        overflow: hidden;
        li {
          display: inline-block;
          margin: 0 10px;
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          a {
            color: #684424;
            font-weight: 700;
            text-decoration: none;
          }
          a.active {
            .border-bottom-3px(#432609, -10px, 0, 100%);
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
