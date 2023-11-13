<template>
  <div class="px-3 py-2 card_with_shadow text-sm font-medium text-subtitle-color" :style="cssProps">
    <p class="font-bold text-title-color">{{ cardData.itemName }}</p>
    <div class="mt-1 text-xs">
      <span class="font-bold inline-flex items-center"
        >MRP:&nbsp; <span class="text-sm text-title-color">{{ cardData.mrp | currencyFormat }}</span
        ><span>/pc</span></span
      >
      <span class="border-r mx-2"></span>
      <span>PTR: {{ cardData.ptr | currencyFormat }}</span>
    </div>
    <p class="mt-2 font-bold inline-flex items-center text-xs" v-if="cardData.batchNo">
      Batch No.:&nbsp;<span class="text-sm text-title-color">{{ cardData.batchNo }}</span>
    </p>
    <p class="mt-2 text-xs" v-if="cardData.expiryDate">Expiry: {{ cardData.expiryDate }}</p>

    <hr class="mt-2" />

    <div class="">
      <div class="flex justify-between px-3 py-2 text-subtitle-color">
        <div class="basis-1/2 whitespace-nowrap">{{ tableHeaders[0] }}</div>
        <div class="basis-1/4 whitespace-nowrap">{{ tableHeaders[1] }}</div>
        <div class="flex-none w-6"></div>
      </div>
      <div
        v-for="(item, idx) in cardData.tableData"
        :key="item.col1"
        class="flex justify-between font-bold px-3 py-2 rounded-lg alternate-bg text-title-color"
      >
        <div class="basis-1/2">{{ item.col1 }}</div>
        <div class="basis-1/4">{{ item.col2 }}</div>
        <div class="flex-none w-6">
          <CustomCheckBox
            :checked="item.checked"
            :disabled="!item.enabled"
            @on-click-checkbox="$emit('on-check-item', { parentIdx: id, currIdx: idx })"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { global } from './../globalColorConfig'
import CustomCheckBox from './CustomCheckBox.vue'
export default {
  props: {
    cardData: Object,
    tableHeaders: Array,
    id: Number
  },
  components: {
    CustomCheckBox
  },
  data() {
    return {
      global: global.props
      //   itemName: 'Dolo-650 - Strip of 15 Tablets',
      //   mrp: 30,
      //   ptr: 20,
      //   batchNo: 'ABCD3880023409',
      //   expiryDate: 'Jun 23',
      //   tableHeaders: ['Batch No.', 'Expiry'],
      //   tableData: [
      //     { col1: 'ABCD3880023409', col2: 'Jul 23', enabled: true },
      //     { col1: 'ABCD3880029999', col2: 'Aug 23', enabled: true },
      //     { col1: 'ABCD3880021111', col2: 'Sep 23', enabled: false },
      //     { col1: 'ABCD3880020000', col2: 'Oct 23', enabled: true }
      //   ]
    }
  },
  computed: {
    cssProps() {
      return {
        '--tertiary_bg_color': this.global.tertiary_bg,
        '--title_color': this.global.title,
        '--subtitle_color': this.global.subtitle
      }
    }
  }
}
</script>
<style scoped>
.text-title-color {
  color: var(--title_color);
}
.text-subtitle-color {
  color: var(--subtitle_color);
}

.alternate-bg:nth-child(even) {
  background-color: var(--tertiary_bg_color);
}
</style>
