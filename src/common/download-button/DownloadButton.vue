<template>
<button class="button-pdf ripple" @click='jsToPdf'><img class="img-pdf" src="../../assets/img/download-btn-icon.png" alt="">Download PDF</button>
</template>

<script>
import JsPDF from 'jsPDF'
import html2canvas from 'html2canvas'

export default {
  name: 'DownloadButton',
  data () {
    return {
    }
  },
  methods: {
    jsToPdf () {
      html2canvas(document.querySelector('.chart-container .valid canvas'))
        .then(
          canvas => {
            let pdfName = 'test'
            let imgData = canvas.toDataURL('image/png')
            let doc = new JsPDF('l', 'mm')
            doc.addImage(imgData, 'PNG', 10, 10)
            doc.save(pdfName + '.pdf')
          }
        )
    }
  }
}

</script>

<style lang="scss" scoped>
.button-pdf {
    width: 220px;
    height: 60px;
    border-radius: 10px;
    background-color: #ff5722;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color:  #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    cursor: pointer;
}
.img-pdf {
    width: 32px;
    height: 40px;
    margin: 10px 20px 10px 10px;
}

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, rgb(255, 255, 255) 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }
}
</style>
