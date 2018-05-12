<template>
  <div class='main-page'>
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
    ChartJs,
    Controls
  }
}
</script>
<style lang="scss" >
.main-page{
  display:flex;
 flex-direction: row;
  background-color: #d1d3d4;
  padding: 50px 50px 50px 50px;
}
</style>
