<template>
  <div class="container">
    <h1>Example ID Page</h1>
    <h1>RouteID : {{ routeId }}</h1>
    <h1>UserList : {{ userName }}</h1>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data () {
    return {
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
      const user = this.userList.find(el => el.id === Number(this.$route.params.id)) || {}
      return user.name || 'User Not Found'
    }
  }
}
</script>

<style>
</style>
