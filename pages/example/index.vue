<template>
  <div class="container">
    <h1>Example RootPage</h1>
  </div>
</template>

<script>
import { sleep } from '../../assets/js/test'
export default {
  layout: 'example',
  async asyncData () {
    await sleep(1000)
  }
}
</script>

<style lang="scss" scoped>
</style>
