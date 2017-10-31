import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import discover from '../components/discover/discover.vue'
import collection from '../components/collection/collection.vue'
import mine from '../components/mine/mine.vue'
import indexContent from '../components/index/indexConent.vue'
import indexSecondContent from '../components/index/indexSceondContent.vue'
import dailyReakings from '../components/detailpage/dailyReakingsDetail.vue'
import dailydetailcontent from '../components/detailpage/dailydetailcontent.vue'
import goodsDetail from '../components/detailpage/goodsDetail.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      redirect: '/index/今日推荐',
      name: index,
      component: index,
      children: [
        {path: '/index/今日推荐', name: indexContent, component: indexContent},
        {path: '/index/女装', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/美妆护肤', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/配饰', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/男装', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/鞋子', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/个人洗护', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/手机周边', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/箱包', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/数码家电', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/内衣袜子', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/食品保健', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/日用家居', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/文娱保健', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/文娱体育', name: indexSecondContent, component: indexSecondContent},
        {path: '/index/成人用品', name: indexSecondContent, component: indexSecondContent}
      ]
    },
    {path: '/discover', name: discover, component: discover},
    {path: '/collection', name: collection, component: collection},
    {path: '/mine', name: mine, component: mine},
    {
      path: '/dailyReakings',
      name: dailyReakings,
      component: dailyReakings,
      children: [
        {path: '/dailyReakings/总榜', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/女装', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/美妆护肤', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/手机数码', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/配饰', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/食品', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/文体娱乐', name: dailydetailcontent, component: dailydetailcontent},
        {path: '/dailyReakings/日用家居', name: dailydetailcontent, component: dailydetailcontent}
      ]
    },
    {path: '/detail', name: goodsDetail, component: goodsDetail}
  ]
})
