<template>
  <div class="dailyPage">
    <div class="daily-title"><span class="back" @click="backToPage()"><i
      class="glyphicon glyphicon-menu-left"></i></span>
      每日排行榜
    </div>
    <div class="catetory">
      <div class="left" @click="shipToNumPage(0)">
        <router-link to="/dailyReakings/总榜"><span>总榜</span></router-link>
      </div>
      <div class="right" ref="dailyRankingsWrapper">
        <ul class="daily-rankings">
          <li v-for="(item,index) in dailyReakingsData.header.subColumns" v-if="index>0" @click="shipToNumPage(index)">
            <router-link :to="'/dailyReakings/'+item.name">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view :dailyReakingsData="dailyReakingsData"></router-view>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll'
  import {mapGetters, mapMutations} from 'vuex'

  export default {

    data() {
      return {}
    },
    computed: {
      ...mapGetters(['dailyReakingsData', 'deilReakingsPageNum'])
    },
    created() {
      this.$nextTick(() => {
        this.dailyRankings()
//        document.addEventListener('touchmove', this.dailyRankings, {passive: true})
      })
    },
    methods: {
      ...mapMutations(['GETPAGENUM']),
      backToPage() {
        this.$router.push({path: '/index/今日推荐'})
      },
      shipToNumPage(index) {
        this.GETPAGENUM({num: index})
      },
      dailyRankings() {
        if (this.$refs.dailyRankingsWrapper) {
          this.dailyRankingsWrapper = new IScroll(this.$refs.dailyRankingsWrapper, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import '../../common/less/mixin.less';

  .dailyPage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(255, 255, 255);
    z-index: 50;
    .daily-title {
      width: 100%;
      height: 40px;
      background: #fee25b;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      color: #74541e;
      .back {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 30px;
        margin: 5px 0;
        font-size: 25px;
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
        overflow: hidden;
        ul {
          display: inline-block;
          white-space: nowrap;
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
  }
</style>
