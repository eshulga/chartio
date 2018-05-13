<template>
    <div class='controls'>
      <chart-toggle/>
      <table-area/>
      <download-button />
    </div>
</template>
<script>
import ChartToggle from '../../common/chart-toggle/ChartToggle.vue'
import TableArea from '../table-area/TableArea.vue'
import DownloadButton from '../../common/download-button/DownloadButton.vue'
export default {
  name: 'Controls',
  data () {
    return {
    }
  },
  components: {
    TableArea, ChartToggle, DownloadButton
  }
}
</script>
<style lang="scss" scoped>
.controls{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40%;
  margin: 0px 0px 40px 0px;
}
</style>
