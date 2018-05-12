<template>
    <div>
      <table-area/>

      <color-picker></color-picker>
    </div>
</template>
<script>
import TableArea from '../table-area/TableArea.vue'

import ColorPicker from '@/common/color-picker/ColorPicker.vue'
export default {
  name: 'Controls',
  data () {
    return {
    }
  },
  components: {
    TableArea, ColorPicker
  }
}
</script>

<style lang="scss" scoped>
</style>
