<template>
  <div>
    <Myheader></Myheader>
    <div class="header-nav">
      <router-link to="/index/今日推荐">
        <span class="left-nav" @click="stopInterval()">今日推荐</span>
      </router-link>
      <div class="middle-nav" ref="middleContent" @click="stopInterval()">
        <ul>
          <li v-for="(item,index) in discoveryPage.grids" @click="getData(index)">
            <router-link :to="'/index/'+item.title">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="right-nav"><i class="icon-list2"></i></div>
    </div>
    <router-view :indexPage=" indexPage" :discoveryPage="discoveryPage" :dailyReakings="dailyReakings"></router-view>

  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import header from '../moduleComponent/header.vue'
  import {mapMutations, mapGetters} from 'vuex'

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
      ...mapGetters(['timer'])
    },
    created() {
      this.ALLSELLCOUNT({list: this.discoveryPage.navPage[0].topList})
      this.$nextTick(() => {
        document.addEventListener('touchmove', this.middleContent, {passive: true})
      })
    },
    methods: {
      ...mapMutations(['GETEACHALLDATA', 'ALLSELLCOUNT']),
      middleContent() {
        if (this.$refs.middleContent) {
          this.middleContentBox = new IScroll(this.$refs.middleContent, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        }
      },
      getData(index) {
        this.GETEACHALLDATA({data: this.discoveryPage.navPage[index]})
      },
      stopInterval() {
        clearInterval(this.timer)
      }
    },
    components: {
      Myheader: header
    },
    watch: {
      indexPage(val) {
        if (val) {
          this.$nextTick(() => {
            document.addEventListener('touchmove', this.middleContent, {passive: true})
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../common/less/mixin.less";

  .header-nav {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #fee25b;
    & > a.active {
      .left-nav {
        .border-bottom-3px(#6e4c21, -10px, 10px, 80%)
      }
    }
    .left-nav {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: 25%;
      height: 20px;
      margin: 10px 0;
      text-align: center;
      font-size: 18px;
      line-height: 20px;
      color: #6e4c21;
      font-weight: 700;
      border-right: 1px solid #d5b73e;
    }
    .middle-nav {
      position: absolute;
      top: 0;
      left: 25%;
      display: inline-block;
      width: 50%;
      height: 40px;
      margin: 0 10px;
      /*box-sizing: border-box;*/
      white-space: nowrap;
      overflow: hidden;
      ul {
        display: inline-block;
        height: 40px;
        li {
          display: inline-block;
          height: 40px;
          padding: 10px 0;
          margin: 0 10px;
          box-sizing: border-box;
          /*line-height: 30px;*/
          color: #6e4c21;
          font-weight: 700;
          font-size: 18px;
          a {
            color: #6e4c21;
            text-decoration: none;
          }
          & > a.active {
            text-decoration: none;
            .border-bottom-3px(#6e4c21, -8px, 0, 100%);
          }
        }

      }

    }
    .right-nav {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      width: 19%;
      height: 20px;
      padding: 0 10px;
      margin: 10px 0;
      box-sizing: border-box;
      font-size: 20px;
      text-align: center;
      color: #6e4c21;
      border-left: 1px solid #6e4c21;
    }
  }
</style>
