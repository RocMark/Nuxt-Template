<template>
  <div>
    <h1>Example Component</h1>
    <span>TestStr : {{ testStr }}</span>
    <span>todoListLength : {{ todoListLength }}</span>
    <!-- <span>TEST_ENV_STR : {{ process.env.TEST_ENV_STR }}</span> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Example',
  computed: {
    ...mapState('exampleModule', ['todoList']),
    ...mapGetters('exampleModule', ['todoListLength']),
    ...mapState('testModule', { testStr: 'str' })
  },
  created () {
    if (process.client) {
      this.getTodoList()
      // this.EXAMPLE_STR()
    }
  },
  methods: {
    ...mapActions('exampleModule', ['getTodoList']),
    // ...mapActions('testModule', ['getTodoList']),
    ...mapMutations('exampleModule', ['EXAMPLE_STR'])
  }
}
</script>

<style lang="scss" scoped>
</style>
