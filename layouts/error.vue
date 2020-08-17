<template>
  <div class="container">
    <Code404 v-if="errorCode===404" />
    <Code500 v-if="errorCode===500" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorCode () {
      return this.error.statusCode
    }
  }
}
</script>
