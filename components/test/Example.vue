<template>
  <div>
    <h1>Example Component</h1>
    <span>{{ todoLength }}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'Example',
  data () {
    return {
      testTodos: []
    }
  },
  computed: {
    // ...mapState('exampleModule', ['todoList'])
    testStr () {
      // return JSON.stringify(todoList)
      return 'testStr'
    },
    todoLength () {
      const todoCount = this.testTodos.length || 0
      return `todoLength : ${todoCount}`
    }
  },
  // ! 於 Server 也會觸發一次 ? (待查)
  async created () {
    // console.log('\x1B[36m%s\x1B[0m', '=test=====created==')
    const url = 'https://jsonplaceholder.typicode.com/todos'

    const res = await axios.get(url)
    // console.log('\x1B[36m%s\x1B[0m', '=test==RES=====', res.data.length)
    this.testTodos = res.data
  },
  mounted () {
    // console.log('\x1B[36m%s\x1B[0m', '=test=====mounted==')
    // this.getTodoList()
  },
  methods: {
    // ...mapActions('exampleModule', ['getTodoList'])
  }
}
</script>

<style lang="scss" scoped>
</style>
