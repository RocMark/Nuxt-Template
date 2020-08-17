<template>
  <div>
    <h1>Example Component</h1>
    <span>todoList : {{ todoList }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Example',
  computed: {
    ...mapState('exampleModule', ['todoList'])
  },
  created () {
    if (process.client) {
      // this.getTodoList()
      // this.EXAMPLE_STR()
    }
  },
  methods: {
    ...mapActions('exampleModule', ['getTodoList']),
    ...mapMutations('exampleModule', ['EXAMPLE_STR'])
  }
}
</script>

<style lang="scss" scoped>
</style>
