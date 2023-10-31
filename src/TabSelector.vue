<template>
  <div class="px-6 flex justify-around">
    <div>Order</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabOptions: [
        {
          label: 'Order History',
          tabId: 'order'
        },
        {
          label: 'Return History',
          tabId: 'return'
        }
      ]
    }
  }
}
</script>
