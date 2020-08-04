<template>
  <div class="container">
    <h1>Example ID Edit Page</h1>
    <h1>Props : {{ propName }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'example',
  props: {
    propName: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    routeId () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
