<template>
  <div>
    <controls />
    <chart-js />
  </div>
</template>

<script>
import ChartJs from '../chartjs/ChartJs.vue'
import Controls from '../controls/Controls.vue'

export default {
  components: {
    ChartJs, Controls
  }
}
</script>
