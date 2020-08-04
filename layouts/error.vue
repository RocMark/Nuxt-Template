<template>
  <div class="container">
    <h1>{{ errorMsg }}</h1>
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
    errorMsg () {
      const errorCode = this.error.statusCode
      switch (errorCode) {
        case 404:
          return '找不到頁面'
        case 500:
          return '伺服器錯誤'
        default:
          return 'ErrorMsg Not Set'
      }
    }
  }
}
</script>
