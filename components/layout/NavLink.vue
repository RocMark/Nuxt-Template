<template>
  <nuxt-link
    class="the-nav-link"
    :to="to"
  >
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.the-nav-link {
  margin: 5px;
}
</style>
