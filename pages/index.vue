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
      title: 'CustomTitle',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'some description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
