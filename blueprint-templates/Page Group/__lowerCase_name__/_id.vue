<template>
  <div>
    <span>Show on All {{lowerCase name}} ID | RouteID : {/{ routeId }}</span>
    <nuxt-child :test="formatStr" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      testStr: 'testStr'
    }
  },
  computed: {
    formatStr () {
      return `${this.testStr} ${this.routeId}`
    },
    routeId () {
      return this.$route.params.id
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
