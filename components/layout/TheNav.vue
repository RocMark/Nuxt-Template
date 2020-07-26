<template>
  <div class="the-nav">
    <h1>TheNav</h1>
    <NavLink v-for="(link) in routeList" :key="link.id" v-bind="link" />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'TheNav',
  data () {
    return {
      routeList: [
        { id: uuidv4(), to: '/user', name: 'User' },
        { id: uuidv4(), to: '/user/5', name: 'UserID' },
        { id: uuidv4(), to: '/not-exist', name: '404' }
      ]
    }
  }
}
</script>

<style>
.the-nav {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 2rem;
}
</style>
