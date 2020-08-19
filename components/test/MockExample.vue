<template>
  <div>
    <h1>MockExample</h1>
    <p>{{ mockData.title }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'MockExample',
  computed: {
    ...mapState('exampleModule', ['mockData'])
  },
  created () {
    if (process.client) {
      this.mockCORS()
    }
  },
  methods: {
    ...mapActions('exampleModule', ['mockCORS'])
  }

}
</script>

<style lang="scss" scoped>
</style>
