// import { EXAMPLE_STR } from '@/store/constant/mutation-type'
// *  namespaced 為 true => mutation-type 就可以重複了才對
const EXAMPLE_STR = 'EXAMPLE_STR'

// 初始化 State 值 (必須為 function)
const state = () => {
  return {
    todoList: []
  }
}

// Getters
const getters = () => {
  return {
    todoLength: (state) => {
      // console.log('\x1B[36m%s\x1B[0m', '=test=======', state)
      return state.todoList.length || 0
    }
  }
}

// 同步事件 => 將資料寫入 Vuex
const mutations = {
  [EXAMPLE_STR] (state, data) {
    state.todoList = data
  }
}

// 非同步事件 => 發送 API & 觸發 Mutations
const actions = {
  getTodoList (context, payload) {
    const reqData = { ...payload }
    const url = '/users'
    this.$testRequest.get(url, { params: reqData })
      .then((res) => {
        const resData = res.data
        context.commit(EXAMPLE_STR, resData)
      })
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions
}
