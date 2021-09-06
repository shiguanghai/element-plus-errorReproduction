import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      user: null // 当前登录用户状态
    }
  },
  mutations: {
    // 修改容器数据必须使用 mutation 函数
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {},
  modules: {}
})

export default store
