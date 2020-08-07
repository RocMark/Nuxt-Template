<template>
  <div>
    <h1>Bs4Modal</h1>
    <div id="myModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">
              Modal Heading
            </h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            Modal body..
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Open modal {{ routePath }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Bs4Modal',
  computed: {
    routePath () {
      return this.$route.fullPath
    }
  },
  mounted () {
    this.$('#myModal').on('shown.bs.modal', function () {
      alert('123')
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
