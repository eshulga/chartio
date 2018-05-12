<template>
<button @click='jsToPdf'><img src="../../assets/img/download-btn-icon.png" alt="">Download PDF</button>
</template>

<script>
import JsPDF from 'jsPDF'

export default {
  name: 'DownloadButton',
  data () {
    return {
    }
  },
  methods: {
    jsToPdf () {
      let pdfName = 'test'
      var doc = new JsPDF()
      doc.text('Hello World!', 10, 10)
      doc.save(pdfName + '.pdf')
      console.log('CLICK!')
    }
  }

}

</script>

<style lang="scss" scoped>
button{
    width: 567px;
    height: 168px;
    border-radius: 20px;
    background-color: #ff5722;
    font-family: Roboto;
    color:  #ffffff;
    font-size: 50px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
}
img{
    margin: 10px 20px 10px 10px;
}
</style>
