<template>
  <div class="container">
    <h1>Example ID Page</h1>
    <h1>Props : {{ propName }}</h1>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    propName: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style>
</style>
