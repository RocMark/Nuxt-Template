const EXAMPLE_STR = 'EXAMPLE_STR'

// 初始化 State 值 (必須為 function)
export const state = () => {
  return {
  }
}

// Getters
export const getters = {
}

// 同步事件 => 將資料寫入 Vuex
export const mutations = {
}

// 非同步事件 => 發送 API & 觸發 Mutations
export const actions = {
}

export const strict = process.env.NODE_ENV !== 'production'
