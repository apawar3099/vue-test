<template>
  <div class="px-3 py-1 flex justify-between items-center mt-4 card_with_shadow">
    <div>
      <p :style="{ color: '#141414', 'font-weight': 700 }">Invoice</p>
      <p class="text-xs">{{ invoiceNo }}</p>
    </div>
    <div class="flex">
      <span class="mx-1 p-3"><ShareIcon :fillColor="`#1E7B74`" /></span>
      <span class="p-3"><DownloadIcon :fillColor="`#1E7B74`" /></span>
    </div>
  </div>
</template>
<script>
import ShareIcon from './assets/images/share_icon_new.vue'
import DownloadIcon from './assets/images/download_icon_new.vue'

export default {
  props: {
    invoiceNo: String
  },
  components: {
    DownloadIcon,
    ShareIcon
  }
}
</script>
