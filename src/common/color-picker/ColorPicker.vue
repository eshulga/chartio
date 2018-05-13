<template>
  <div class="area">
    <div class="area__item" :class="activeItem === index ? 'area__item-active' : ''" v-for="(color, index) in colors" :key="index" :style="'background-color: #' + color" @click="onClick(color, index)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: ['currentId'],
  data () {
    return {
      colors: ['f70505', 'fff200', '00a651', '00aef0', '9e1f63', 'ec008c', 'be1e2d', 'ef4136', 'f15a29', 'f7941d', 'fbb040', 'd7df23', '8dc63f', '39b54a', '009444', '006838', '2bb673', '00a79d', '27aae1', '1b75bc', '2b3990', '262262', '662d91', '92278f'],
      activeItem: null
    }
  },
  methods: {
    onClick (color, index) {
      this.$eventBus.$emit('close-color-picker')
      this.$eventBus.$emit('data-color-picker', `#${color}`, this.currentId)
      this.activeItem = index
      setTimeout(() => {
        this.activeItem = null
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .area{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 18px;
    width: 260px;
    background-color: black;
    opacity: 0.7;
    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.4);
    &__item{
      position: relative;
      margin: 3px;
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
    &__item-active{
      opacity: 0.4;
      box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.8);
    }
  }
</style>
