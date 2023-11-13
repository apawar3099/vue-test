<template>
  <div
    class="border rounded-2xl p-3 text-subtitle-color border-color font-medium text-sm"
    :style="cssProps"
  >
    <p class="font-bold text-title-color mb-1">Dolo-650 - Strip of 15 Tablets</p>
    <div class="flex flex-col gap-1 text-xs">
      <span>PTR: {{ 200 | currencyFormat }}</span>
      <p>
        <span>Batch No.:&nbsp;BA12346785</span>
        <span class="border-r mx-2"></span>
        <span>Expiry: Jun’24</span>
      </p>
      <span>Order ID: AAAA1111222234</span>
    </div>

    <hr class="my-3" />

    <SecondaryButton class="w-3/5" label="Return reason" @on-click="console.log('return')" />
  </div>
</template>
<script>
import { global } from './../globalColorConfig'
import SecondaryButton from '../SecondaryButton.vue'
export default {
  components: {
    SecondaryButton
  },
  data() {
    return {
      global: global.props,
      returnItems: [{}]
    }
  },
  computed: {
    cssProps() {
      return {
        '--border_color': this.global.button_secondary_border_color,
        '--title_color': this.global.title,
        '--subtitle_color': this.global.subtitle
      }
    }
  }
}
</script>
<style lang="less" scoped>
.text-title-color {
  color: var(--title_color);
}
.text-subtitle-color {
  color: var(--subtitle_color);
}
.border-color {
  border-color: var(--border_color);
}
</style>
