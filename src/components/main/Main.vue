<template>
  <div>
    <Controls />
    <ChartJs />
  </div>
</template>

<script>
import ChartJs from '../chartjs/ChartJs.vue'
import Controls from '../controls/controls.vue'

export default {
  components: {
    ChartJs, Controls
  }
}
</script>
