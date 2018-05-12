<template>
<<<<<<< HEAD
  <div class="area">
    <div class="area__item" :class="activeItem === index ? 'area__item-active' : ''" v-for="(color, index) in colors" :key="index" :style="'background-color: #' + color" @click="onClick(color, index)">
=======
    <div class="area">
      <div class="area__item" v-for="color in colors" :key="color.id" :style="'background-color: #' + color"></div>
>>>>>>> dev
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {
<<<<<<< HEAD
      colors: ['f70505', 'fff200', '00a651', '00aef0', '9e1f63', 'ec008c', 'be1e2d', 'ef4136', 'f15a29', 'f7941d', 'fbb040', 'd7df23', '8dc63f', '39b54a', '009444', '006838', '2bb673', '00a79d', '27aae1', '1b75bc', '2b3990', '262262', '662d91', '92278f'],
      activeItem: null
    }
  },
  methods: {
    onClick (color, index) {
      this.$root.$emit('close-color-picker', `#${color}`)
      this.activeItem = index
=======
      // colors: ["ed1c24", "fff200", "00a651", "00aef0", "9e1f63", "ec008c", "be1e2d", "ef4136", "f15a29", "f7941d", "fbb040", "d7df23", "8dc63f", "39b54a", "009444", "006838", "2bb673", "00a79d", "27aae1", "1b75bc", "2b3990", "262262", "662d91", "92278f"]
>>>>>>> dev
    }
  }
}
</script>

<style lang="scss" scoped>
  .area{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 14px;
    width: 192px;
    height: 84px;
    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.4);
    &__item{
      position: relative;
      margin: 2px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    &__item-active{
      opacity: 0.4;
      box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.8);
    }
  }
</style>
