import * as types from './mutations-types'

export default {
  [types.SETTRANSFORM](state, {obj, x, y, z}) {
    obj.style.transform = `translate3d(${x},${y},${z})`
    obj.style.webkitTransfrom = `translate3d(${x},${y},${z})`
  },
  [types.GETEACHALLDATA](state, {data}) {
    state.eachPageData = data
    // console.log(state.eachPageData)
  },
  [types.GETDAILYREAKINGS](state, {data}) {
    state.dailyReakingsData = data
  },
  [types.GETPAGENUM](state, {num}) {
    state.deilReakingsPageNum = num
  },
  [types.ALLCONPONVALUE](state, {value}) {
    let numarr = []
    value.forEach(num => {
      let length = num.couponValue.indexOf('元')
      let newnum = num.couponValue.slice(0, length)
      numarr.push(newnum)
    })
    state.allConponValue = numarr
  },
  [types.ALLSELLCOUNT](state, {list}) {
    let sellArr = []
    list.forEach(detail => {
      if (detail.saleNum >= 10000) {
        let num = detail.saleNum / 10000
        let newnum = num.toFixed(1)    // 取小数点后1位，是string型
        sellArr.push(newnum + '万')
      } else {
        sellArr.push(detail.saleNum)
      }
    })
    state.sellCount = sellArr
  },
  [types.ADD_TRANSITIONS](state, {obj}) {
    obj.style.transition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.SET_TRANSLATE](state, {obj, x, y, z}) {
    obj.style.transform = `translate3D(${x},${y},${z})`
    obj.style.webkitTransfrom = `translate3D(${x},${y},${z})`
  },
  [types.REMOVE_TRANSITIONS](state, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  [types.GET_GOODS_DETAIL](state, {item}) {
    state.goodDetail = item
  },
  [types.ADD_TO_CART](state, {good}) {
    let cartgood = state.cartGoods
    if (state.cartGoods.length === 0) {
      good.count = 1
      state.cartGoods.push(good)
      return
    }
    for (let i = 0; i < cartgood.length; i++) {
      if (good.id === state.cartGoods[i].id) {
        return
      } else {
        good.count = 1
      }
    }
    state.cartGoods.push(good)
    state.isAdd = !state.isAdd
  }
}
