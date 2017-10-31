import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'
import slide from './modules/slide'

Vue.use(Vuex)

const state = {
  eachPageData: 0,
  dailyReakingsData: 0,
  deilReakingsPageNum: 0,
  allConponValue: [],
  sellCount: [],
  goodDetail: {},
  cartGoods: [],
  isAdd: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    slide
  }
})
