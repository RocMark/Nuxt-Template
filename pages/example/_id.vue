<template>
  <div class="container">
    <span>Show on Example ID Page | RouteID : {{ routeId }}</span>
    <nuxt-child :prop-name="userName" />
  </div>
</template>

<script>
export default {
  layout: 'example',
  data () {
    return {
      testStr: 'testStr',
      userList: [
        { id: 1, name: 'UserList-1' },
        { id: 2, name: 'UserList-2' },
        { id: 3, name: 'UserList-3' }
      ]
    }
  },
  computed: {
    routeId () {
      return this.$route.params.id
    },
    userName () {
      const user = this.userList.find(el => el.id === Number(this.routeId)) || {}
      return user.name || 'User Not Found'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
