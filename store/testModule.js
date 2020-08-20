const EXAMPLE_STR = 'EXAMPLE_STR'

// 初始化 State 值 (必須為 function)
export const state = () => {
  return {
    str: 'TestStr789789789',
    todoList: []
  }
}

// 同步事件 => 將資料寫入 Vuex
export const mutations = {
  [EXAMPLE_STR] (state, data) {
    state.todoList = data
  }
}

// 非同步事件 => 發送 API & 觸發 Mutations
export const actions = {
  getTodoList (context, payload) {
    const reqData = { ...payload }
    const url = '/todos'
    this.$testRequest.get(url, { params: reqData })
      .then((res) => {
        const resData = res.data
        context.commit(EXAMPLE_STR, resData)
      })
  }
}

export const strict = process.env.NODE_ENV !== 'production'
