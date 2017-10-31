<template>
  <div>
    <div class="shop-cart">购物车</div>
    <ul>
      <li v-for="item in cartGoods">
        <img :src="item.image">
        <div class="detail">
          <div class="title">{{item.title}}</div>
          <span class="price">&yen{{item.price}}</span>
          <span class="count">{{item.count}}件</span>
        </div>

      </li>
    </ul>
    <div class="totalPrice" v-if="totalPrice>0">总价:<span>&yen{{totalPrice}}</span></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    data() {
      return {}
    },
    computed: {
      ...mapGetters(['cartGoods']),
      totalPrice() {
        let price = 0
        for (let i = 0; i < this.cartGoods.length; i++) {
          price += this.cartGoods[i].price * this.cartGoods[i].count
        }
        return price.toFixed(2)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .shop-cart {
    padding: 10px;
    font-size: 25px;
  }

  ul {
    li {
      display: flex;
      padding: 10px;
      img {
        flex: 0 0 100px;
        height: 100px;
      }
      .detail {
        flex: 1;
        position: relative;
        margin-left: 10px;
        .title {
          font-size: 16px;
        }
        .price {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 30px;
          color: red;
          font-weight: 700;
        }
        .count {
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .totalPrice {
    margin: 10px;
    font-size: 18px;
    span {
      color: red;
      font-size: 35px;
      font-weight: 700;
    }
  }
</style>
