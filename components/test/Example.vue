<template>
  <div>
    <h1>Example</h1>
    {{ testStr }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Example',
  computed: {
    // ...mapState('exampleModule', ['todoList'])
    testStr () {
      // return JSON.stringify(todoList)
      return 'testStr'
    }
  },
  mounted () {
    // this.getTodoList()
  },
  methods: {
    // ...mapActions('exampleModule', ['getTodoList'])
  }
}
</script>

<style scoped lang="scss">
</style>
