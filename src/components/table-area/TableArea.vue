<template>
  <div class="main">
    <h1>Table-area</h1>
    <download-button />
  </div>
</template>

<script>
import DownloadButton from '../../common/download-button/DownloadButton.vue'
export default {
  name: 'TableArea',
  data () {
    return {
    }
  },
  components: {
    DownloadButton
  }
}
</script>

<style lang="scss" scoped>
</style>
