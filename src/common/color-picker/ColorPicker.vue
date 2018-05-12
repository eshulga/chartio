<template>
  <div class="area">
    <div class="area__item" v-for="color in colors" :key="color.id" :style="'background-color: #' + color" @click="onClick(color)" :activeItem="activeItem[colors.indexOf(color)] = false">
      <div class="area__item_shadow" v-if="activeItem[colors.indexOf(item)]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {
      colors: ['f70505', 'fff200', '00a651', '00aef0', '9e1f63', 'ec008c', 'be1e2d', 'ef4136', 'f15a29', 'f7941d', 'fbb040', 'd7df23', '8dc63f', '39b54a', '009444', '006838', '2bb673', '00a79d', '27aae1', '1b75bc', '2b3990', '262262', '662d91', '92278f'],
      activeItem: [],
      currentActice: ''
    }
  },
  methods: {
    onClick (item) {
      this.$root.$emit('close-color-picker', `#${item}`)
      const keyItem = this.colors.indexOf(item)
      this.activeItem[keyItem] = true;
      console.log('onClick', this.activeItem)
    }
  },
  watch: {
    activeItem () {
      console.log('watch')
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
    &__item_shadow{
      position: absolute;
      width: 16px;
      height: 16px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
