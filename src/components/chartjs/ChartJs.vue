<template>
  <div class="chart-container">
    <bar-chart ref="BarChart" :options="options" :chart-data="chartData" :class="currentChart === 'bar' ? 'valid' : 'invalid'" :height="200" />
    <line-chart ref="LineChart" :options="options" :chart-data="chartData" :class="currentChart === 'line' ? 'valid' : 'invalid'" :height="200" />
    <pie-chart ref="PieChart" :chart-data="chartData" :class="currentChart === 'pie' ? 'valid' : 'invalid'" :height="200" />
    <don-chart ref="DonChart" :chart-data="chartData"   :class="currentChart === 'don' ? 'valid' : 'invalid'" :height="200" />
  </div>
</template>

<script>
import hsl from 'hsl-to-hex'
import BarChart from '../../common/charjs/BarChart.vue'
import LineChart from '../../common/charjs/LineChart.vue'
import PieChart from '../../common/charjs/PieChart.vue'
import DonChart from '../../common/charjs/DoughuntChart.vue'

export default {
  data () {
    return {
      render: true,
      currentChart: 'bar',
      options: {
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              suggestedMin: 0,
              beginAtZero: true
            }
          }]
        }
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Новый',
            backgroundColor: [],
            data: []
          }
        ]
      },
      chartDataLine: {
        labels: [],
        datasets: [
          {
            label: 'Новый',
            backgroundColor: [],
            data: []
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
    },
    changetableColor (color, id) {
      this.$eventBus['color' + id] = color
      this.updateData()
    },
    updateColor () {
      let datasetCount = 0
      this.chartData.datasets[0].data.forEach((element, id, arr) => {
        const hue = (360 / arr.length) * datasetCount
        const hexColor = hsl(hue, 70, 50)

        this.chartData.datasets[0].backgroundColor[id] = this.$eventBus['color' + id] ? this.$eventBus['color' + id] : hexColor
        datasetCount++
      })
    },
    changeChart (args) {
      this.currentChart = args
    }
  },
  mounted () {
    this.$eventBus.$on('chartData', (arg) => {
      this.render = false

      let label = []
      let dataSet = []
      let datasetCount = 0

      arg.labels.forEach(element => {
        label.push(element)
      })

      arg.data.forEach((element, id, arr) => {
        dataSet.push(element)
        const hue = (360 / arr.length) * datasetCount
        const hexColor = hsl(hue, 70, 50)
        this.chartData.datasets[0].backgroundColor[id] = this.$eventBus['color' + id] ? this.$eventBus['color' + id] : hexColor
        datasetCount++
      })

      this.chartData.labels = label
      this.chartDataLine.labels = label
      this.chartData.datasets[0].data = dataSet
      this.chartDataLine.datasets[0].data = dataSet
      this.chartData.datasets[0].label = arg.name
      this.updateColor()
      this.updateData()
    })

    this.$eventBus.$on('toggleCharts', this.changeChart)

    this.$eventBus.$on('data-color-picker', this.changetableColor)
  },
  beforeUpdate () {

  }
}
</script>

<style lang="scss" scoped>
  .chart-container {
   width: 60%;
    padding: 50px 10px;
    margin-left:40px;
    box-shadow: -5px 5px 15px 5px rgba(0, 0, 0, 0.15);
    background-color: white;
  }

  .valid {
    display: block;
  }

  .invalid {
    display: none;
  }

</style>
