<template>
  <div v-if="isLoaded" className="test-container">
    <h1>Example Component</h1>
    <p>{{ testStr }}</p>
  </div>
  <div v-else className="test-container">
    <p>PlaceHolder</p>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    testStr () {
      return JSON.stringify(this.data)
    },
    isLoaded () {
      return this.data.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
.test-container {
  border: .5px solid #f50057;
  padding: 1rem;
}
</style>
