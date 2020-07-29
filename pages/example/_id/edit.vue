<template>
  <div class="container">
    <h1>Example ID Edit Page</h1>
    <h1>RouteID : {{ routeId }}</h1>
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

<style lang="scss">
</style>
