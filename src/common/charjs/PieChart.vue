<script>
// import VueCharts from 'vue-chartjs'
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#fff000', '#000000', '#123456', '#654321'],
          data: [40, 20, 12, 39]
        }
      ]
    })
  }
}
</script>
