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
<style lang="scss" scoped>
.main-page {
  display:flex;
  flex-direction: row;
  background-color: #f1f2f2;
  padding: 50px;
  height: 100%;
  align-items: flex-start;

  @include respond-to(tablet) {
    flex-direction: column;
    align-items: center;
  }

  @include respond-to(mobile) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
}
</style>
