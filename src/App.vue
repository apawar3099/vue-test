<template>
  <!-- <OrderDetails /> -->
  <SelectBatches />
</template>
<script>
import OrderDetails from './OrderDetails.vue'
import SelectBatches from './returnFlow/ReturnByNameOrBatch/SelectBatches.vue'
export default {
  components: {
    OrderDetails,
    SelectBatches
  },
  data() {
    return {}
  }
}
</script>
