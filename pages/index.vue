<template>
  <div class="container">
    <Logo />
    <h1>RootPage</h1>
    <p>test: {{ test }}</p>
    <p>mockData: {{ JSON.stringify(mockData) }}</p>
    <!-- <Example /> -->
    <!-- <MockExample /> -->
    <!-- <img src="../assets/img/demo.svg" alt="demo"> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  //! 注意 axios interceptor 會用到 localStorage 在後端執行時會噴錯
  async fetch (context) {
    await context.store.dispatch('exampleModule/testFetch', { name: 'fetch' })
    await context.store.dispatch('exampleModule/mockCORS')
  },
  async asyncData (context) {
    await context.app.store.dispatch('exampleModule/testFetch', { name: 'asyncData' })
    return { test: 'asyncData' }
  },
  data () {
    return {
      test: 'data'
    }
  },
  computed: {
    // ...mapState('exampleModule', { mockData: 'mockData' })
    ...mapState('exampleModule', ['mockData'])
  },
  methods: {
    ...mapActions('exampleModule', ['mockCORS'])
  },
  head () {
    return {
      title: 'HomePage',
      meta: [
        {
          hid: 'home',
          name: 'home',
          content: 'this is home page'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
