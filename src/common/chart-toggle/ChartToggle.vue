<template>
    <div class="row">
        <button class="ripple" @click="clicked" data-type="bar">
        <font-awesome-icon class="text-svg" icon="chart-bar" size="3x"/><span class="text-button">Bar chart</span></button>
        <button class="ripple" @click="clicked" data-type="line">
        <font-awesome-icon class="text-svg" icon="chart-line" size="3x"/><span class="text-button">Line chart</span></button>
        <button class="ripple" @click="clicked" data-type="pie">
        <font-awesome-icon class="text-svg" icon="chart-pie" size="3x"/><span class="text-button">Pie chart</span></button>
        <button class="ripple" @click="clicked" data-type="don">
        <font-awesome-icon class="text-svg" icon="chart-area" size="3x"/><span class="text-button">Donut chart</span></button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'FAExample',
  data () {
    return {
    }
  },
  methods: {
    clicked: function (event) {
      var sibl = this.getSiblings(event.currentTarget)
      event.currentTarget.classList.add('active')
      event.currentTarget.classList.add('ripple')
      sibl.forEach((item) => {
        return item.classList.remove('active')
      })
      this.$eventBus.$emit('toggleCharts', event.currentTarget.dataset.type)
    },
    getSiblings: function (elem) {
      var siblings = []
      var sibling = elem
      while (sibling.previousSibling) {
        sibling = sibling.previousSibling
        sibling.nodeType === 1 && siblings.push(sibling)
      }

      sibling = elem
      while (sibling.nextSibling) {
        sibling = sibling.nextSibling
        sibling.nodeType === 1 && siblings.push(sibling)
      }

      return siblings
    }
  },
  computed: {
    icon () {
      return faCoffee
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: -5px 5px 15px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
  border-radius: 20px;

  button {
    display: flex;
    border: 1px solid #ff5722;
    height: 75px;
    background: #fff;
    outline: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: #757575;
    font-size: 16px;
    padding: 0 10px;
    width: 25%;
    svg {
      margin: 0 10px;
      color: #ff5722;
    }
    &:nth-child(1) {
      border-radius: 20px 0 0 20px;
      border-right: none;
    }
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(4) {
      border-radius: 0 20px 20px 0;
      border-left: none;
      svg {
        margin: 0;
        padding-left: 10px;
      }
    }
  }
  .active {
    background: #ff5722;
    color: #fff;
    svg {
      color: #fff;
    }
  }
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

.text-button {

  @include respond-to(mobile) {
    display: none;
  }
}

.text-svg {

  @include respond-to(mobile) {
    font-size: 2em;
  }
}

</style>
