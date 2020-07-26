import axios from 'axios'
// import { createInterceptor } from '@/store/interceptors/interceptors'
// import * as types from '../../mutation-type'

// ! mutation-type 待處理，應該用 types.EXAMPLE_STR 呼叫
const EXAMPLE_STR = 'EXAMPLE_STR'

// 必須對應 store.js 中的 module 名稱
const moduleName = 'exampleModule'
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL

const request = axios.create({
  // baseURL: `${API_BASE_URL}`,
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { }
})
// createInterceptor({ request, moduleName })

// 初始化 State 值 (必須為 function)
const state = () => {
  return {
    todoList: []
  }
}

// 同步事件 => 將資料寫入 Vuex
const mutations = {
  [EXAMPLE_STR] (context, data) {
    this.state[moduleName].todoList = data
  }
}

// 非同步事件 => 發送 API & 觸發 Mutations
const actions = {
  getTodoList (context, data) {
    const reqData = { ...data }
    const url = '/todos'
    request.get(url, { params: reqData })
      .then(res => res.json()) // json-placeholder的資料需要先轉換才加的
      .then((res) => {
        const resData = res.data
        context.commit([EXAMPLE_STR], resData)
      })
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions
}
