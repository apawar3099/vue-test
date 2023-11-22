<template>
  <div
    class="rounded-lg"
    :style="{
      'background-color': contentBgColor
    }"
  >
    <div
      :class="`flex items-center pl-2 rounded-lg ${expanded && 'rounded-b-none'} `"
      :style="{
        'background-color': titleBgColor
      }"
      @click="expanded = !expanded"
    >
      <div class="basis-full">
        <slot name="main"> </slot>
      </div>

      <div class="p-1">
        <DownArrow fillColor="#1E7B74" v-if="!expanded" />
        <UpArrow fillColor="#1E7B74" v-else />
      </div>
    </div>
    <div v-if="expanded" class="py-2 pl-2 pr-8">
      <slot name="expanded"></slot>
    </div>
  </div>
</template>
<script>
import DownArrow from '../src/assets/images/down-arrow-new.vue'
import UpArrow from '../src/assets/images/up_arrow.vue'

export default {
  data() {
    return {
      expanded: false
    }
  },
  props: {
    titleBgColor: String,
    contentBgColor: {
      type: String,
      default: '#f5f5f5'
    }
  },
  components: {
    DownArrow,
    UpArrow
  }
}
</script>
