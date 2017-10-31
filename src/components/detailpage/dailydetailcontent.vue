<template>
  <div>
    <div class="explain-box">
      <div class="title"><span class="icon">
        <img src="../../common/img/1.jpg" width="25px" height="25px"
             style="margin-right: 5px;margin-bottom: 5px"></span>
        {{dailyReakingsData.header.subColumns[deilReakingsPageNum].title}}
      </div>
      <div class="article">{{dailyReakingsData.header.subColumns[deilReakingsPageNum].desc}}</div>
    </div>
    <ul v-if="deilReakingsPageNum<2">
      <li v-for="(item ,index) in dailyReakingsData.content[deilReakingsPageNum].list" @click="skipToGoodDetail(item)">
        <div class="num" v-if="index<3"><span class="top">{{index + 1}}</span><span class="bottom"></span></div>
        <img :src="item.image">
        <div class="contain-box">
          <div class="title">{{item.title}}</div>
          <div class="recComment">{{item.recComment}}</div>
          <div class="price-and-conpon">
            <span class="yen">&yen</span><span class="price">{{item.price}}</span>
            <span class="couponValue" v-if="item.couponValue">已减&yen{{allConponValue[index]}}</span>
          </div>
          <span class="saleNum">{{sellCount[index]}}人买过</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    props: {
      dailyReakingsData: {
        type: Object
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['eachPageData', 'deilReakingsPageNum', 'allConponValue', 'sellCount'])
    },
    created() {
      this.ALLCONPONVALUE({value: this.dailyReakingsData.content[this.deilReakingsPageNum].list})
      this.ALLSELLCOUNT({list: this.dailyReakingsData.content[this.deilReakingsPageNum].list})
    },
    methods: {
      ...mapMutations(['ALLCONPONVALUE', 'ALLSELLCOUNT', 'GET_GOODS_DETAIL']),
      skipToGoodDetail(item) {
        this.GET_GOODS_DETAIL({item})
        window.scrollTo(0, 0)
        this.$router.push({path: '/detail'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../common/less/mixin.less";

  .explain-box {
    /*height: 150px;*/
    border-top: 10px solid #f5f5f5;
    padding: 20px;
    .title {
      font-size: 20px;
    }
    .article {
      margin-top: 10px;
      font-size: 16px;
      color: #977d6b;
    }
  }

  ul {
    li {
      position: relative;
      display: flex;
      width: 100%;
      height: 130px;
      margin-bottom: 5px;
      border-top: 1px solid #f0f0f0;
      .num {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 30px;
      }
      &:nth-of-type(1) {
        .num {
          .num(#fc7e02)
        }
      }
      &:nth-of-type(2) {
        .num {
          .num(#ffb800)
        }
      }
      &:nth-of-type(3) {
        .num {
          .num(#fed86d)
        }
      }
      img {
        flex: 0 0 130px;
        height: 130px;
      }
      .contain-box {
        flex: 1;
        position: relative;
        padding: 15px 10px;
        overflow: hidden;
        .title {
          display: inline-block;
          width: 100%;
          font-size: 17px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .recComment {
          color: gray;
        }
        .price-and-conpon {
          position: absolute;
          bottom: 15px;
          left: 10px;
          .yen {
            color: #fb585b;
          }
          .price {
            font-size: 25px;
            font-weight: 700;
            color: #fb585b;
          }
          .couponValue {
            margin-left: 5px;
            padding: 2px;
            background: #fb585b;
            color: rgb(255, 255, 255);
          }

        }
        .saleNum {
          position: absolute;
          bottom: 15px;
          right: 10px;
          color: gray;
        }

      }
    }
  }
</style>
