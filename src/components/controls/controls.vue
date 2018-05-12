<template>
    <div>
      <table-area />
      <chart-toggle />

      <color-picker/>
    </div>
</template>
<script>
import TableArea from '../table-area/TableArea.vue'
import ChartToggle from '../../common/chart-toggle/ChartToggle.vue'

import ColorPicker from '@/common/color-picker/ColorPicker.vue'
export default {
  name: 'Controls',
  data () {
    return {
    }
  },
  components: {
    TableArea, ChartToggle, ColorPicker
  }
}
</script>

<style lang="scss" scoped>
</style>
