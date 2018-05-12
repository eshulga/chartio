<template>
<button @click='jsToPdf'><!-- <img src="../../assets/img/download-btn-icon.png" alt=""> -->Download PDF</button>
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
    display: flex;
    border: 2px solid #ff5722;
    height: 75px;
    width: 160px;
    border-radius: 20px;
    background-color: #ff5722;
    outline: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 16px;
}
img{
    margin: 10px 20px 10px 10px;
}
</style>
