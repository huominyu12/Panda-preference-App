<template>
  <div>
    <div class="detail">
      <div class="icon"><img :src="goodDetail.image"></div>
      <div class="allIcon">
        <span class="back" @click.stop="skip()"><i class="glyphicon glyphicon-menu-left"></i></span>
        <span class="question"><i class="icon-question"></i>
        <div>帮助</div></span>
        <span class="share"><i class="glyphicon glyphicon-open"></i>
        <div>分享</div></span>
      </div>
      <div class="information">
        <span class="small-icon"><img src="../../common/img/tianmao.jpg" width="20px" height="20px"></span>
        <span class="postage">包邮</span>
        <span class="title">{{goodDetail.title}}</span>
        <div class="oldPrice">原价:<span>&yen{{goodDetail.originPrice}}</span></div>
        <span class="couponValue">券&yen{{goodDetail.couponValue.slice(0, -2)}}</span>
        <div class="price">
          已有<span class="saleNum">{{goodDetail.saleNum}}</span>人购买
          <span class="newPrice">&yen{{goodDetail.price}}</span>
        </div>
      </div>
      <div class="introduction">
        <div class="go">去淘宝看看评价、问卖家<i class="glyphicon glyphicon-menu-right"></i></div>
        详情
      </div>
      <div class="bottom">
        <span class="like"><i class="glyphicon glyphicon-heart-empty"></i>收藏</span>
        <div class="middle">
          <span class="couponValue">{{goodDetail.couponValue.slice(0, -1)}}淘宝优惠券</span></br>
          <span class="expireMsg">{{goodDetail.expireMsg}}</span>
        </div>
        <span class="add" @click="addToCart(goodDetail)" >{{isAdd}}</span>
      </div>
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['goodDetail', 'isAdd']),
      isAdd() {
        if (this.goodDetail.count) {
          return '已加入购物车'
        } else {
          return '加入购物车'
        }
      }
    },
    methods: {
      ...mapMutations(['ADD_TO_CART']),
      skip() {
        this.$router.go(-1)
      },
      addToCart(good) {
        this.ADD_TO_CART({good})
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .detail {
    position: relative;
    background-color: #f5f5f5;
    .allIcon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 10px 0;
      box-sizing: border-box;
      .back {
        float: left;
        width: 45px;
        height: 45px;
        margin-left: 10px;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        background: #a8a9a8;
        color: white;
        i {
          font-size: 30px;
          color: white;
          display: inline-block;
          margin-top: 5px;
        }

      }
      .share, .question {
        float: right;
        width: 45px;
        height: 45px;
        margin-right: 10px;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        background: #a8a9a8;
        font-size: 8px;
        color: white;
        i {
          font-size: 18px;
          display: inline-block;
          margin-top: 4px;
        }
      }

    }
    .icon {
      img {
        width: 100%;
        height: 450px;
      }
    }
    .information {
      position: relative;
      padding: 15px 10px;
      height: 160px;
      background: white;
      .postage {
        margin-left: 3px;
        border-radius: 5px;
        padding: 2px;
        border: 1px solid gray;
      }
      .title {
        font-size: 18px;
        color: #492b14;
      }
      .oldPrice {
        margin: 10px 0;
        font-size: 18px;
        color: gray;
        span {
          margin-left: 10px;
          display: inline-block;
        }
      }
      .couponValue {
        font-size: 15px;
        padding: 5px;
        border-radius: 5px;
        background: #fa585c;
        color: white;
      }
      .price {
        position: absolute;
        right: 10px;
        bottom: 15px;
        font-size: 17px;
        .saleNum {
          color: #ff7d01;
        }
        .newPrice {
          display: inline-block;
          margin-left: 10px;
          font-size: 30px;
          color: #f44f3a;
          font-weight: 700;
        }
      }
    }
    .introduction {
      height: 500px;
      .go {
        margin-top: 5px;
        background: white;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        font-size: 18px;
        i {
          float: right;
          color: dimgray;
        }
      }
    }
    .bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      z-index: 50;
      background: white;
      .like {
        display: inline-block;
        margin: 0 20px;
        width: 30px;
        color: #67513f;
        i {
          font-size: 30px;
        }

      }
      .add {
        float: right;
        display: inline-block;
        line-height: 60px;
        font-size: 20px;
        height: 60px;
        width: 150px;
        text-align: center;
        color: white;
        background: #fb585b;
      }
      .middle {
        position: absolute;
        right: 150px;
        top: 0;
        margin: 0 10px;
        display: inline-block;
        text-align: end;
        .couponValue {
          display: inline-block;
          margin-top: 10px;
          font-size: 17px;
          color: #fb585b;
        }

      }
    }

  }


</style>
