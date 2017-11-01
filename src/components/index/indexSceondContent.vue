<template>
  <div class="contain-box">
    <div class="slide" ref="imageSlide">
      <ul>
        <li v-for="item in eachPageData.recs">
          <img :src="item.imageUrl">
        </li>
      </ul>
    </div>
    <div class="category">
      <div class="hot">
        <span class="hot-category">{{eachPageData.categoryTitle}}</span>
        <span class="all-category">{{eachPageData.categoryValue}}<i class="glyphicon glyphicon-menu-right"></i></span>
      </div>
      <div class="categories">
        <ul>
          <li v-for="item in eachPageData.categories">
            <img :src="item.imageUrl" width="60px" height="60px">
            <div class="categories-title">{{item.title}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods">
      <div class="note">{{eachPageData.note}}</div>
      <div class="two-title">
        <div class="title"><span class="active">综合</span></div>
        <div class="title"><span>最新</span></div>
      </div>
      <ul>
        <li v-for="item in eachPageData.items.list" @click="skipToGoodDetail(item)">
          <img :src="item.image" width="100%" height="250px" style="vertical-align:top;">
          <div class="detail-box">
            <div class="good-detail">
              <img src="../../common/img/taobao.jpg" width="20px" height="20px" style="vertical-align: top">
              <span class="free-shopping" v-if="item.isFreePostage">包邮</span>
              <span class="good-title">{{item.title}}</span>
            </div>
            <div class="price">现价&yen<span class="price-num">{{item.price}}</span></div>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    created() {
      this.$nextTick(() => {
        this.scroll()
//        document.addEventListener('touchstart', this.scroll, {passive: true})
      })
    },
    computed: {
      ...mapGetters(['eachPageData'])
    },
    methods: {
      ...mapMutations(['GET_GOODS_DETAIL']),
      scroll() {
        if (this.$refs.imageSlide) {
          this.imageSlideWrapper = new IScroll(this.$refs.imageSlide, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        }
      },
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
  @import '../../common/less/mixin.less';

  .contain-box {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #f5f5f5;
    .slide {
      width: 100%;
      height: 160px;
      padding: 20px;
      box-sizing: border-box;
      background: rgb(255, 255, 255);
      overflow: hidden;
      ul {
        white-space: nowrap;
        display: inline-block;
        li {
          display: inline-block;
          width: 250px;
          height: 120px;
          img {
            width: 240px;
            height: 120px;
            border-radius: 10px;

          }
        }
      }
    }
    .category {
      margin-top: 10px;
      width: 100%;
      padding: 15px;
      background: rgb(255, 255, 255);
      .hot {
        padding-bottom: 10px;
        border-bottom: 1px solid #dadada;
        .hot-category {
          font-size: 20px;
          font-weight: bold;
          color: #5d4633;
        }
        .all-category {
          float: right;
          font-size: 17px;
          margin-top: 5px;
          color: #9b938d;
        }
      }
      .categories {
        width: 100%;
        padding-top: 30px;
        box-sizing: border-box;
        ul {
          padding-bottom: 0;
          li {
            width: 25%;
            display: inline-block;
            text-align: center;
            .categories-title {
              margin: 10px 0;
              font-size: 18px;
              color: gray;
            }
          }
        }
      }
    }
    .goods {
      margin-top: 10px;
      padding-bottom: 55px;
      .note {
        text-align: center;
        background: rgb(255, 255, 255);
        padding: 15px 0;
        font-size: 18px;
        color: #b0a9a6;
      }
      .two-title {
        padding: 15px;
        box-sizing: border-box;
        background: rgb(255, 255, 255);
        .title {
          width: 49%;
          display: inline-block;
          text-align: center;
          font-size: 20px;
          color: #43250d;
          span {
            padding: 0 10px;
            &.active {
              color: #f36569;
              .border-bottom-3px(#f36569, -15px, 0, 100%)
            }
          }
        }
      }
      ul {
        font-size: 0;
        li {
          display: inline-block;
          width: 49%;
          height: 360px;
          margin: 2px;
          background: rgb(255, 255, 255);
          text-align: center;
          border-radius: 3px;
          overflow: hidden;
          /*img{*/
          /*border-radius: 3px;*/
          /*}*/
          .detail-box {
            padding: 10px 5px;
            height: 110px;
            box-sizing: border-box;
            .good-detail {
              height: 46px;
              overflow: hidden;
              .free-shopping {
                padding: 2px 4px;
                margin: 0 5px;
                border: 1px solid #968b86;
                border-radius: 5px;
                font-size: 14px;
                color: #968b86;
              }
              .good-title {
                font-size: 17px;
                color: dimgray;
              }
            }
            .price {
              margin-top: 10px;
              text-align: left;
              color: #fb585b;
              font-size: 16px;
              .price-num {
                font-size: 30px;
                font-weight: 700;
              }
            }

          }
        }
      }
    }
  }

</style>
