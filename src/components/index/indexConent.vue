<template>
  <div class="container-box">
    <div class="slide">
      <ul ref="slideImage" class="slide-ul">
        <li><img :src="indexPage.banners[2].imageUrl"/></li>
        <li v-for="item in indexPage.banners">
          <img :src="item.imageUrl">
        </li>
        <li><img :src="indexPage.banners[0].imageUrl"/></li>
      </ul>
      <div class="dotBox">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <table class="recommend">
      <tr>
        <td rowspan="2" id="first-td">
          <div class="left-recommend-title">{{indexPage.gridsV2[0].title}}</div>
          <div class="left-recommend-text">{{indexPage.gridsV2[0].text}}</div>
          <div class="left-image"><img :src="indexPage.gridsV2[0].imageUrl"></div>
        </td>

        <td class="second-td">
          <div class="right-recommend-title">{{indexPage.gridsV2[1].title}}</div>
          <div class="right-recommend-text">{{indexPage.gridsV2[1].text}}</div>
          <div class="right-image"><img :src="indexPage.gridsV2[1].imageUrl"></div>
        </td>
      </tr>
      <tr>
        <td class="second-td">
          <div class="right-recommend-title">{{indexPage.gridsV2[2].title}}</div>
          <div class="right-recommend-text">{{indexPage.gridsV2[2].text}}</div>
          <div class="right-image"><img :src="indexPage.gridsV2[2].imageUrl"></div>
        </td>
      </tr>
    </table>
    <div class="daily-rankings" @click="stopInterval()">
      <div class="daily-rankings-title">
        <span class="daily-rankings-left">每日排行榜</span>
        <span class="daily-rankings-right" @click="shipToDetail()">查看全部<i
          class="glyphicon glyphicon-menu-right"></i></span>
      </div>
      <div class="daily-rankings-contain" ref="dailyRankingsContain">
        <ul>
          <li v-for="(item,index) in discoveryPage.navPage[0].topList" @click="shipToDetail()">
            <span class="top" v-if="index<3">{{index + 1}}</span><span class="bottom" v-if="index<3"></span>
            <img :src="item.image">
            <div class="content">
              <span class="title">{{item.title}}</span>
              <div class="bottom-content">
                <span class="price">&yen{{item.price}}</span>
                <span class="saleNum">已售:{{sellCount[index]}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="update">{{indexPage.note}}</div>
    <div class="goodsList">
      <ul>
        <li v-for="(item,index) in indexPage.items.list" @click="skipToGoodDetail(item)">
          <img :src="item.image" :style="item.title?'height:200px;margin-bottom:100px;':'height:300px;'">
          <div class="goods-contain" v-if="item.title">
            <div class="goods-title">
              <img src="../../common/img/tianmao.jpg" style="width:20px;height: 20px;vertical-align:middle;"/>
              <span class="free-shopping">包邮</span>
              <span class="title">{{item.title}}</span></div>
            <div class="new-price">
              <span class="after">券后&yen</span><span class="rate-price">{{item.price}}</span>
            </div>
            <span class="coupon-value"><span class="left-circle"></span>
              券&yen{{item.couponValue.slice(0, 2)}}<span class="right-circle"></span></span>
          </div>

        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    props: {
      indexPage: {
        type: Object
      },
      discoveryPage: {
        type: Object
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['dailyReakingsData', 'deilReakingsPageNum', 'sellCount', 'timer', 'index'])
    },
    created() {
      this.$nextTick(() => {
        setTimeout(() => {
          let obj = document.getElementsByClassName('slide-ul')[0]
          let dot = document.getElementsByClassName('dot')
          this.SET_TRANSLATE({obj, x: -obj.clientWidth / 5 * (this.index + 1) + 'px', y: 0, z: 0})
          this.ACTIVE_DOT({dot, num: this.index})
          this.startInterval({obj, dot})
          this.transitionEnd({obj, callback: this.callbackAgain})
          this.touchs({obj, dot})
        }, 100)
//        document.addEventListener('touchstart', this.dailyRankings, {passive: true})
        this.dailyRankings()
      })
      this.ALLSELLCOUNT({list: this.discoveryPage.navPage[0].topList})
    },
    methods: {
      ...mapMutations(['GETEACHALLDATA', 'GETPAGENUM', 'ALLSELLCOUNT', 'SET_TRANSLATE', 'ACTIVE_DOT', 'GET_GOODS_DETAIL']),
      ...mapActions(['startInterval', 'transitionEnd', 'transitionAgain', 'touchs']),
      dailyRankings() {
        if (this.$refs.dailyRankingsContain) {
          this.dailyRankingsWrapper = new IScroll(this.$refs.dailyRankingsContain, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        }
      },
      shipToDetail() {
        this.GETPAGENUM({num: 0})
        window.scrollTo(0, 0)
        this.$router.push({path: '/dailyReakings/总榜'})
      },
      callbackAgain() {
        let obj = document.getElementsByClassName('slide-ul')[0]
        this.transitionAgain({obj, modules: 'slide'})
      },
      stopInterval() {
        clearInterval(this.timer)
      },
      skipToGoodDetail(item) {
        clearInterval(this.timer)
        this.GET_GOODS_DETAIL({item})
        if (item.title) {
          window.scrollTo(0, 0)
          this.$router.push({path: '/detail'})
        }
      }
    },
    watch: {
      discoveryPage(val) {
        if (val) {
          this.ALLSELLCOUNT({list: this.discoveryPage.navPage[0].topList})
          this.$nextTick(() => {
            this.dailyRankings()
//            document.addEventListener('touchstart', this.dailyRankings, {passive: true})
          })
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../common/less/mixin.less";

  .container-box {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #f8f5f6;
    margin-bottom: 60px;
    .slide {
      width: 100%;
      height: 150px;
      position: relative;
      overflow: hidden;
      ul {
        display: inline-block;
        width: 500%;
        height: 150px;
        /*white-space: nowrap;*/
        &:first-child {
          transform: translateX(-20%);
        }
        li {
          width: 20%;
          height: 150px;
          display: inline-block;
          float: left;
          img {
            width: 100%;
            height: 150px;
          }
        }
      }
      .dotBox {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px 15px;
        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: rgb(255, 255, 255);
          border-radius: 50%;
          border: 1px solid black;
          &.active {
            background: #ffe850;
          }
        }
      }
    }
    .recommend {
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
      background: rgb(255, 255, 255);
      border-bottom: 1px solid #f2f2f2;
      tr {
        td {
          width: 50%;
          padding: 12px;
          box-sizing: border-box;
        }
        #first-td {
          border-right: 1px solid #f2f2f2;
          .left-recommend-title {
            font-size: 20px;
            color: #3f3021;
          }
          .left-recommend-text {
            margin-top: 10px;
            color: #efb580;
          }
          .left-image {
            text-align: center;
            margin-top: 10px;
            img {
              width: 100px;
              height: 100px;
            }
          }

        }
        .second-td {
          position: relative;
          height: 50%;
          border-bottom: 1px solid #f2f2f2;
          .right-recommend-title {
            margin-top: 5px;
            font-size: 18px;
            color: #3f3021;
          }
          .right-recommend-text {
            margin-top: 10px;
            color: #efb580;
            width: 55%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .right-image {
            position: absolute;
            top: 12px;
            right: 12px;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }

      }
    }
    .daily-rankings {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      background: rgb(255, 255, 255);
      overflow: hidden;
      .daily-rankings-title {
        margin-bottom: 10px;
        .daily-rankings-left {
          font-size: 17px;
          color: #614e3b;
          margin-left: 5px;
        }
        .daily-rankings-right {
          float: right;
          margin-right: 5px;
          font-size: 17px;
          color: #b6b0ae;
          i {
            margin-left: 5px;
            margin-top: 3px;
            font-size: 16px;
            vertical-align: top;
          }
        }
      }

      .daily-rankings-contain {
        ul {
          display: inline-block;
          height: 160px;
          white-space: nowrap;
          li {
            position: relative;
            display: inline-block;
            width: 130px;
            &:nth-of-type(1) {
              .num(#ff7d01);
            }
            &:nth-of-type(2) {
              .num(#faba07);
            }
            &:nth-of-type(3) {
              .num(#f9d96e);
            }
            img {
              width: 110px;
              height: 110px;
              margin-bottom: 10px;
            }
            .content {
              .title {
                display: inline-block;
                width: 110px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .bottom-content {
                .price {
                  color: red;
                  font-size: 17px;
                  font-weight: bold;
                }
                .saleNum {
                  text-overflow: ellipsis;
                  color: darkgray;
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
    .update {
      width: 100%;
      text-align: center;
      height: 50px;
      line-height: 50px;
      color: #cbc7c4;
      font-size: 18px;
    }
    .goodsList {
      ul {
        font-size: 0;
        li {
          display: inline-block;
          position: relative;
          width: 49%;
          height: 300px;
          text-align: center;
          margin: 2px;
          border-radius: 5px;
          overflow: hidden;
          img {
            display: inline-block;
            /*vertical-align: sub;*/
          }
          .goods-contain {
            position: absolute;
            top: 200px;
            left: 0;
            width: 100%;
            height: 100px;
            background: rgb(255, 255, 255);
            /*margin-top: 5px;*/
            padding: 7px;
            box-sizing: border-box;
            .goods-title {
              /*display: inline-block;*/
              height: 40px;
              font-size: 16px;
              overflow: hidden;
              .free-shopping {
                display: inline-block;
                padding: 0 3px;
                border-radius: 5px;
                border: 1px solid #b4aca8;
                font-size: 13px;
                color: #b4aca8;
              }
              .title {
                color: #a9a19d;
              }
            }
            .new-price {
              position: absolute;
              bottom: 0;
              left: 7px;
              display: block;
              .after {
                color: #f67376;
                font-size: 14px;
              }
              .rate-price {
                font-size: 30px;
                font-weight: 700;
                color: #f86062;
              }

            }
            .coupon-value {
              position: absolute;
              bottom: 7px;
              right: 7px;
              display: inline-block;
              margin: 0 7px;
              padding: 0 10px;
              background: #fb585b;
              font-size: 15px;
              color: rgb(255, 255, 255);
              .left-circle {
                position: absolute;
                top: 6px;
                left: -4px;
                display: inline-block;
                border-radius: 50%;
                width: 8px;
                height: 8px;
                background: rgb(255, 255, 255);
              }
              .right-circle {
                position: absolute;
                top: 6px;
                right: -4px;
                display: inline-block;
                border-radius: 50%;
                width: 8px;
                height: 8px;
                background: rgb(255, 255, 255);
              }
            }
          }

        }
      }
    }
  }

</style>
