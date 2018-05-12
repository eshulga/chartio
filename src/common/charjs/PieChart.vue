<script>
// import VueCharts from 'vue-chartjs'
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  methods: {
    update () {
      this.$data._chart.update()
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  }
}
</script>
