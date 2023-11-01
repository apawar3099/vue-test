<template>
  <button
    :class="` flex justify-center items-center 
    border border-[#E0E0E0] text-[#1E7B74] px-4 py-1 font-bold text-base rounded-[1000px] w-full ${customClass}`"
    @click="$emit('on-click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    customClass: String
  }
}
</script>
