<template>
  <div class="chart-container">
    <bar-chart :class="currentChart === 'bar' ? 'valid' : 'invalid'" :height="200" />
    <line-chart :class="currentChart === 'line' ? 'valid' : 'invalid'" :height="200" />
    <pie-chart :class="currentChart === 'pie' ? 'valid' : 'invalid'" :height="200" />
    <don-chart :class="currentChart === 'don' ? 'valid' : 'invalid'" :height="200" />
  </div>
</template>

<script>
import BarChart from '../../common/charjs/BarChart.vue'
import LineChart from '../../common/charjs/LineChart.vue'
import PieChart from '../../common/charjs/PieChart.vue'
import DonChart from '../../common/charjs/DoughuntChart.vue'

export default {
  data () {
    return {
      currentChart: 'bar'
    }
  },
  components: {
    BarChart, LineChart, PieChart, DonChart
  },
  methods: {
    // changeChart () {
    //   console.log(this)
    // }
  },
  mounted () {
    this.$eventBus.$on('toggleCharts', (args) => {
      this.currentChart = args
    })
  },
  beforeUpdate () {

  }
}
</script>

<style lang="scss" scoped>
  .chart-container {
    max-width: 600px;
    // max-height: 200px;
  }

  .valid {
    display: block;
  }

  .invalid {
    display: none;
  }

</style>
