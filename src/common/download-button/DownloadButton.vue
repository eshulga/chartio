<template>
<button class="button-pdf" @click='jsToPdf'><img class="img-pdf" src="../../assets/img/download-btn-icon.png" alt="">Download PDF</button>
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
.button-pdf {
    width: 269px;
    height: 59px;
    border-radius: 20px;
    background-color: #ff5722;
    font-family: Roboto;
    color:  #ffffff;
    font-size: 24px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    cursor: pointer;
}
.img-pdf {
    width: 32px;
    height: 40px;
    margin: 10px 20px 10px 10px;
}
</style>
