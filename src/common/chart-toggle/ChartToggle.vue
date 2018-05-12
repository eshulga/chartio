<template>
    <div class="row">
        <button class="disabled" @click="clicked" data-type="bar">
        <font-awesome-icon icon="chart-bar" size="3x" v-on:click.stop/>Bar chart</button>
        <button class="disabled" @click="clicked" data-type="line">
        <font-awesome-icon icon="chart-line" size="3x" v-on:click.stop/>Line chart</button>
        <button class="disabled" @click="clicked" data-type="pie">
        <font-awesome-icon icon="chart-pie" size="3x" v-on:click.stop/>Pie chart</button>
        <button class="disabled" @click="clicked" data-type="don">
        <font-awesome-icon icon="chart-area" size="3x" v-on:click.stop/>Doughnut chart</button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'FAExample',
  data () {
    return {
      // isActive: ''
    }
  },
  methods: {
    clicked: function (event) {
      var sibl = this.getSiblings(event.target)
      event.target.classList.add('active')
      sibl.forEach((item) => {
        return item.classList.remove('active')
      })
      this.$eventBus.$emit('toggleCharts', event.target.dataset.type)
      console.log(event.target.dataset.type)
      // this.isActive = !this.isActive
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
  button {
    display: flex;
    border: 2px solid #ff5722;
    height: 75px;
    width: 130px;
    background: #fff;
    outline: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: #757575;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 40px;
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

</style>
