const EXAMPLE_STR = 'EXAMPLE_STR'
const MOCK_EXAMPLE = 'MOCK_EXAMPLE'

// 初始化 State 值 (必須為 function)
export const state = () => {
  return {
    todoList: [],
    mockData: {}
  }
}

// Getters
export const getters = () => {
  return {
    todoLength: (state) => {
      // console.log('\x1B[36m%s\x1B[0m', '=test=======', state)
      return state.todoList.length || 0
    }
  }
}

// 同步事件 => 將資料寫入 Vuex
export const mutations = {
  [EXAMPLE_STR] (state, data) {
    state.todoList = data
  },
  [MOCK_EXAMPLE] (state, data) {
    state.mockData = data
  }
}

// 非同步事件 => 發送 API & 觸發 Mutations
export const actions = {
  getTodoList (context, payload) {
    const reqData = { ...payload }
    const url = '/users'
    this.$testRequest.get(url, { params: reqData })
      .then((res) => {
        const resData = res.data
        context.commit(EXAMPLE_STR, resData)
      })
  },
  mockCORS (context, payload) {
    const reqData = { ...payload }
    const url = '/test'
    this.$mockRequest.get(url, { params: reqData })
      .then((res) => {
        const resData = res.data
        context.commit(MOCK_EXAMPLE, resData)
      })
  }
}

export const strict = process.env.NODE_ENV !== 'production'
