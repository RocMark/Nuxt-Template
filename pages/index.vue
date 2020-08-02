<template>
  <div class="container">
    <Logo />
    <h1>RootPage {{ testStr }} </h1>
    <Example />
  </div>
</template>

<script>
import { test } from '../assets/js/format'

export default {
  computed: {
    testStr () {
      return test || 'Import Fail'
    }
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
