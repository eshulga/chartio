<template>
  <div class="chart-container">
    <bar-chart ref="BarChart" :chart-data="chartData" :class="currentChart === 'bar' ? 'valid' : 'invalid'" :height="200" />
    <line-chart ref="LineChart" :chart-data="chartData" :class="currentChart === 'line' ? 'valid' : 'invalid'" :height="200" />
    <pie-chart ref="PieChart" :chart-data="chartData" :class="currentChart === 'pie' ? 'valid' : 'invalid'" :height="200" />
    <don-chart ref="DonChart" :chart-data="chartData"   :class="currentChart === 'don' ? 'valid' : 'invalid'" :height="200" />
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
      render: true,
      currentChart: 'bar',
      chartData: {
        labels: ['март', 'апрель'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#fff000',
            data: [1000, 12000]
          }
        ]
      }
    }
  },
  components: {
    BarChart, LineChart, PieChart, DonChart
  },
  methods: {
    updateData () {
      this.$refs.BarChart.update()
      this.$refs.LineChart.update()
      this.$refs.PieChart.update()
      this.$refs.DonChart.update()
    }
  },
  mounted () {
    this.$eventBus.$on('chartData', (arg) => {
      this.render = false

      let label = []
      let dataSet = []

      arg.labels.forEach(element => {
        label.push(element)
      })

      arg.data.forEach(element => {
        dataSet.push(element)
      })

      this.chartData.labels = label
      this.chartData.datasets[0].data = dataSet

      this.updateData()
    })

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
   width: 60%;
    background-color: white;
    margin-left:40px;
  }

  .valid {
    display: block;
  }

  .invalid {
    display: none;
  }

</style>
