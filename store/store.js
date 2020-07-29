import Vue from 'vue'
import Vuex from 'vuex'

import exampleModule from './modules/example/exampleModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    exampleModule
  },
  // 全域使用的才寫這裡
  state: () => {},
  actions: {},
  mutations: {},
  strict: process.env.NODE_ENV !== 'production'
})

export default store
