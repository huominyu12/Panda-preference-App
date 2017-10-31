<template>
  <div id="app">
    <router-view :indexPage="indexPage" :discoveryPage="discoveryPage" :dailyReakings="dailyReakings"></router-view>
    <div class="bottom-nav" @click="stopInterval()">
      <ul>
        <router-link to="/index">
          <li><i class="icon-home"></i>
            <div class="content">首页</div>
          </li>
        </router-link>
        <router-link to="/discover">
          <li><i class="glyphicon glyphicon-th-large"></i>
            <div class="content">发现</div>
          </li>
        </router-link>
        <router-link to="/collection">
          <li><i class="icon-heart"></i>
            <div class="content">收藏</div>
          </li>
        </router-link>
        <router-link to="/mine">
          <li><i class="glyphicon glyphicon-user"></i>
            <div class="content">我的</div>
          </li>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        indexPage: {},
        discoveryPage: {},
        dailyReakings: {},
        nineNineNrea: {}
      }
    },
    computed: {
      ...mapGetters(['timer'])
    },
    created() {
      let self = this
      this.$axios.get('/api/indexPage')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.indexPage = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/discoveryPage')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.discoveryPage = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/dailyReakings')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.dailyReakings = res.data
            this.GETDAILYREAKINGS({data: self.dailyReakings})
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/nineNineArea')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            self.nineNineArea = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    methods: {
      ...mapMutations(['GETDAILYREAKINGS']),
      changePage(page) {
        this.$router.push({path: '/index/' + page})
      },
      stopInterval() {
        clearInterval(this.timer)
      }
    }
  }
</script>

<style lang="less" scoped>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 55px;
    width: 100%;
    background: rgb(255, 255, 255);
    /*z-index: 10;*/
    & > ul .active {
      & > li i {
        color: #fee25e;
      }
    }
    li {
      display: inline-block;
      width: 24%;
      height: 50px;
      padding-top: 5px;
      text-align: center;
      i {
        font-size: 25px;
        color: rgb(138, 123, 111);
      }
      .content {
        font-size: 14px;
        color: #999999;
      }

    }
  }

</style>
