<template>
  <div class="container">
    <Logo />
    <h1>RootPage</h1>
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

<style>
</style>
