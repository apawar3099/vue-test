<template>
  <!-- <OrderDetails /> -->
  <!-- <SelectBatches /> -->
  <!-- <SelectOrders :selectedBatches="['B1', 'B2', 'B3']" /> -->
  <SelectItemsForReturn />
</template>
<script>
import OrderDetails from './OrderDetails.vue'
import SelectBatches from './returnFlow/ReturnByNameOrBatch/SelectBatches.vue'
import SelectOrders from './returnFlow/ReturnByNameOrBatch/SelectOrders.vue'
import SelectItemsForReturn from './returnFlow/SelectItemsForReturn.vue'
export default {
  components: {
    OrderDetails,
    SelectBatches,
    SelectOrders,
    SelectItemsForReturn
  },
  data() {
    return {}
  }
}
</script>
