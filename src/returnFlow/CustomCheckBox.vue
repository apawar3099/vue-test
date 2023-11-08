<template>
  <div
    class="w-6 h-6 border rounded flex justify-center items-center"
    :style="{
      'background-color': checked ? global.primary_main_color : global.body_bg_color,
      'border-width': checked ? 0 : '1px',
      'border-color': disabled ? global.text_disabled_color : global.subtitle
    }"
    @click="!disabled && $emit('on-click-checkbox')"
  >
    <TickIcon v-if="checked" :fillColor="global.primary_darkest_color" />
  </div>
</template>
<script>
import { global } from './../globalColorConfig'
import TickIcon from '../assets/images/tick_icon.vue'
export default {
  props: {
    checked: Boolean,
    disabled: Boolean
  },
  components: {
    TickIcon
  },
  data() {
    return {
      global: global.props
    }
  }
}
</script>
