import Vue from 'vue'
import Vuex from 'vuex'

import exampleModule from '@/store/modules/example/exampleModule'

Vue.use(Vuex)

const state = () => { return {} }

const store = new Vuex.Store({
  modules: {
    exampleModule
  },
  // 全域使用的才寫這裡
  state,
  getters: {},
  actions: {},
  mutations: {},
  strict: process.env.NODE_ENV !== 'production'
})

export default store
