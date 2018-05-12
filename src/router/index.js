import Vue from 'vue'
import Router from 'vue-router'

import BarChart from '@/common/charjs/BarChart.vue'
import DoughuntChart from '@/common/charjs/DoughuntChart.vue'
import LineChart from '@/common/charjs/LineChart.vue'
import PieChart from '@/common/charjs/PieChart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'barChart', component: BarChart },
    { path: '/', name: 'barChart', component: DoughuntChart },
    { path: '/', name: 'barChart', component: LineChart },
    { path: '/', name: 'barChart', component: PieChart }
  ]
})
