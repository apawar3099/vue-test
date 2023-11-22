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

    <SecondaryButton
      v-if="isReasonSelected"
      class="w-[60%]"
      label="Return reason"
      @on-click="console.log('return')"
    />
    <div v-else class="flex gap-3">
      <div class="flex-1">
        <p>Return reason:</p>
        <p class="text-title-color">Wrong item received</p>
      </div>
      <SecondaryButton class="h-fit w-fit" label="Change" @on-click="console.log('chnage reson')" />
    </div>
    <div
      class="flex items-center gap-2 mt-2 font-bold"
      :class="[isReasonSelected ? 'disabled-color' : 'text-title-color']"
    >
      <span>Qty:</span>
      <span class="border rounded p-2 w-16 font-medium">0</span>
      <span>out of {{ returnableQty }}</span>
    </div>
  </div>
</template>
<script>
import { global } from '../globalColorConfig'
import SecondaryButton from '../SecondaryButton.vue'
export default {
  components: {
    SecondaryButton
  },
  props: {
    itemData
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
        '--subtitle_color': this.global.subtitle,
        '--disabled_color': this.global.text_disabled_color
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

.disabled-color {
  color: var(--disabled_color);
}
</style>
