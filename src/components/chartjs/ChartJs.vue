<template>
  <div class="chart-container">
    <bar-chart :height="200" />
    <line-chart :height="200" />
    <pie-chart :height="200" />
    <don-chart :height="200" />
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

    }
  },
  components: {
    BarChart, LineChart, PieChart, DonChart
  }
}
</script>

<style lang="scss" scoped>
  .chart-container {
   width: 60%;
    background-color: white;
    margin-left:40px;
  }

</style>
