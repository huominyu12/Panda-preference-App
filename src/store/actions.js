import * as types from './mutations-types'

export const transitionEnd = (context, {obj, callback}) => {
  if (typeof obj === 'object') {
    obj.addEventListener('transitionsEnd', () => {
      callback && callback()
    })
    obj.addEventListener('webkitTransitionEnd', () => {
      callback && callback()
    })
  }
}
export const transitionAgain = ({commit, state}, {obj, modules}) => {
  if (state[modules].index >= 3) {
    state[modules].index = 0
    commit(types.REMOVE_TRANSITIONS, {obj})
    commit(types.SET_TRANSLATE, {obj, x: -obj.clientWidth / 5 + 'px', y: 0, z: 0})
  }
}
