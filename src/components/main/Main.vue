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
  data () {
    return {
      name: 'main'
    }
  },
  components: {
    ChartJs, Controls
  }
}
</script>
