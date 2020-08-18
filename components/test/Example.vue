<template>
  <div>
    <h1>Example Component</h1>
    <span>TestStr : {{ str }}</span>
    <span>todoList : {{ todoList }}</span>
    <!-- <span>todoListLength : {{ todoListLength }}</span> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Example',
  computed: {
    // ...mapState('exampleModule', ['todoList']),
    ...mapState('testModule', ['todoList']),
    // ...mapGetters('testModule', ['todoListLength']),
    ...mapState('testModule', ['str']),
    aliasTestStr () {
      return this.str
    }
  },
  created () {
    if (process.client) {
      this.getTodoList()
      // this.EXAMPLE_STR()
    }
  },
  methods: {
    // ...mapActions('exampleModule', ['getTodoList']),
    ...mapActions('testModule', ['getTodoList']),
    ...mapMutations('exampleModule', ['EXAMPLE_STR'])
  }
}
</script>

<style lang="scss" scoped>
</style>
