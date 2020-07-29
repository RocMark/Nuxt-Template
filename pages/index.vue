<template>
  <div class="container">
    <Logo />
    <h1 class="test">
      RootPage
    </h1>
    <Example />
  </div>
</template>

<script>
export default {
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

<style lang="scss">
$test: #f50057;
.test {
  border: .5px solid $test;
}
</style>
