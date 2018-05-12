<template>
    <div class="area">
      <div class="area__item" v-for="color in colors" :key="color.id" :style="'background-color: #' + color"></div>
    </div>
</template>

<script>

export default {
  name: 'ColorPicker',
  data () {
    return {
      // colors: ["ed1c24", "fff200", "00a651", "00aef0", "9e1f63", "ec008c", "be1e2d", "ef4136", "f15a29", "f7941d", "fbb040", "d7df23", "8dc63f", "39b54a", "009444", "006838", "2bb673", "00a79d", "27aae1", "1b75bc", "2b3990", "262262", "662d91", "92278f"]
    }
  }
}
</script>

<style lang="scss" scoped>
  .area{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px;
    width: 384px;
    height: 134px;
    &____item{
      margin: 4px;
      width: 34px;
      height: 34px;
    }
  }

</style>
