<template>
    <div>
      <table-area />
      <chart-toggle />
    </div>
</template>
<script>
import TableArea from '../table-area/TableArea.vue'
import ChartToggle from '../../common/chart-toggle/ChartToggle.vue'

export default {
  name: 'Controls',
  data () {
    return {
    }
  },
  components: {
    TableArea, ChartToggle
  }
}
</script>

<style lang="scss" scoped>
</style>
