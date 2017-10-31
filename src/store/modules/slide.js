import * as types from '../mutations-types'

const state = {
  index: 0,
  timer: 0,
  isMove: false,
  moveX: 0,
  startX: 0,
  distanceX: 0
}

const getters = {
  index: state => state.index,
  timer: state => state.timer
}

const mutations = {
  [types.ACTIVE_DOT]({state}, {dot, num}) {
    for (let i = 0; i < dot.length; i++) {
      dot[i].className = 'dot'
    }
    if (num > dot.length - 1) {
      num = 0
    }
    dot[num].className = 'dot active'
  }
}

const actions = {
  startInterval({state, commit}, {obj, dot}) {
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      let offsetX = -obj.clientWidth / 5 * (state.index + 1)
      commit(types.ADD_TRANSITIONS, {obj})
      commit(types.SET_TRANSLATE, {obj, x: offsetX + 'px', y: 0, z: 0})
      commit(types.ACTIVE_DOT, {dot, num: state.index})
    }, 2000)
  },
  touchs({state, commit}, {obj, dot}) {
    obj.addEventListener('touchstart', (e) => {
      clearInterval(state.timer)
      state.startX = e.touches[0].clientX
    })
    obj.addEventListener('touchmove', (e) => {
      state.moveX = e.touches[0].clientX
      state.distanceX = state.startX - state.moveX
      let offsetX = -obj.offsetWidth / 5 * (state.index + 1) - state.distanceX + 'px'
      commit(types.REMOVE_TRANSITIONS, {obj})
      commit(types.SET_TRANSLATE, {obj, x: offsetX, y: 0, z: 0})
      state.isMove = true
    })
    obj.addEventListener('touchend', (e) => {
      if (Math.abs(state.distanceX) > obj.clientWidth / 15 && state.isMove) {
        if (state.distanceX > 0) {
          state.index++
        } else {
          state.index--
        }
        if (state.index < 0) {
          state.index = 2
          let offsetX = -obj.clientWidth / 5 * (state.index + 1) + 'px'
          commit(types.REMOVE_TRANSITIONS, {obj})
          commit(types.SET_TRANSLATE, {obj, x: offsetX, y: 0, z: 0})
        }
        if (state.index > 2) {
          state.index = 0
          let offsetX = -obj.clientWidth / 5 * (state.index + 1) + 'px'
          commit(types.REMOVE_TRANSITIONS, {obj})
          commit(types.SET_TRANSLATE, {obj, x: offsetX, y: 0, z: 0})
        }
      }
      commit(types.SET_TRANSLATE, {obj, x: -obj.clientWidth / 5 * (state.index + 1) + 'px', y: 0, z: 0})
      commit(types.ADD_TRANSITIONS, {obj})
      commit(types.ACTIVE_DOT, {dot, num: state.index})
      state.isMove = false
      state.distanceX = 0
      state.startX = 0
      state.moveX = 0
      clearInterval(state.timer)
      state.timer = setInterval(() => {
        state.index++
        let offsetX = -obj.clientWidth / 5 * (state.index + 1) + 'px'
        commit(types.SET_TRANSLATE, {obj, x: offsetX, y: 0, z: 0})
        commit(types.ADD_TRANSITIONS, {obj})
        commit(types.ACTIVE_DOT, {dot, num: state.index})
      }, 1500)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
