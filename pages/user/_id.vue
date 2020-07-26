<template>
  <div class="container">
    <Logo />
    <h1>User {{ routeId }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    routeId () {
      return this.$route.params.id
    }
  }
}
</script>

<style>
</style>
