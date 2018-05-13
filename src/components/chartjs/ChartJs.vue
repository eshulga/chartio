<template>
  <div class="chart-container">
    <button class="button-preview ripple" @click="chartPreview" ><v-icon>fullscreen</v-icon><span class="mobile-hide">Full Screen</span></button>
    <bar-chart ref="BarChart" :options="options" :chart-data="chartData" :class="currentChart === 'bar' ? 'valid' : 'invalid'" :height="200" />
    <line-chart ref="LineChart" :options="options" :chart-data="chartDataLine" :class="currentChart === 'line' ? 'valid' : 'invalid'" :height="200" />
    <pie-chart ref="PieChart" :chart-data="chartData" :class="currentChart === 'pie' ? 'valid' : 'invalid'" :height="200" />
    <don-chart ref="DonChart" :chart-data="chartData"   :class="currentChart === 'don' ? 'valid' : 'invalid'" :height="200" />
    <div v-if="isActive" @click="chartPreviewClose" id="element_to_pop_up">
      <div class="container-popup">
        <bar-chart :options="options" :chart-data="chartData" :class="currentChart === 'bar' ? 'valid' : 'invalid'" :height="200" />
        <line-chart :options="options" :chart-data="chartDataLine" :class="currentChart === 'line' ? 'valid' : 'invalid'" :height="200" />
        <pie-chart :chart-data="chartData" :class="currentChart === 'pie' ? 'valid' : 'invalid'" :height="200" />
        <don-chart :chart-data="chartData"   :class="currentChart === 'don' ? 'valid' : 'invalid'" :height="200" />
      </div>
    </div>
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
      isActive: false,
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
            backgroundColor: ['#fff000'],
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
    chartPreview () {
      this.isActive = true
    },
    chartPreviewClose () {
      this.isActive = false
    },
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

      arg.labels.forEach(element => {
        label.push(element)
      })

      arg.data.forEach((element, id, arr) => {
        dataSet.push(element)
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
    padding: 10px 10px;
    margin-left:40px;
    box-shadow: -5px 5px 15px 5px rgba(0, 0, 0, 0.15);
    background-color: white;
    display: flex;
    flex-direction: column;

    @include respond-to(tablet) {
      margin-left: 0;
      order: -1;
      margin-bottom: 10%;
      width: 100%;
    }

    @include respond-to(mobile) {
      margin-left: 0;
      order: -1;
      margin-bottom: 10%;
      width: 100%;
    }
  }

  .valid {
    display: block;
  }

  .invalid {
    display: none;
  }

  #element_to_pop_up {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }

  .container-popup {
    position: absolute;
    top: 10%;
    left: 20%;
    right: 20%;
    bottom: 20%;
    background-color: rgba(250, 250, 250, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button-preview {
    padding: 10px 20px;
    margin-left: 5%;
    margin-top: 3%;
    border: 1px solid silver;
    border-radius: 10px;
    align-self: flex-end;
  }

  .button-preview:hover {
    background-color: #ff5722;
    color: #ffffff;
  }

  .mobile-hide {
    @include respond-to(mobile) {
      display: none;
    }
  }

</style>
