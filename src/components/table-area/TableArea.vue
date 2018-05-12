<template>
  <div class="main">
    <h1>Table-area</h1>
    <input type="file" name="xlfile" id="xlf" @change="fileInputHandler">
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  name: 'TableArea',
  data () {
    return {
      files: []
    }
  },
  methods: {
    fileInputHandler (e) {
      console.dir(e.target.files)
      let data = new Uint8Array(e.target.files)
      console.dir(data)
      var files = e.target.files
      for (let i = 0, f = files[i]; i !== files.length; ++i) {
        var reader = new FileReader()
        var name = f.name
        reader.onload = function (e) {
          var data = e.target.result
          var workbook = XLSX.read(data, {type: 'binary'})
          console.log(name, workbook)
        }
        reader.readAsBinaryString(f)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
