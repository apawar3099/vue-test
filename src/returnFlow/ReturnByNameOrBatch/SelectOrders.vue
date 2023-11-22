<template>
  <div class="p-6 flex flex-col gap-3">
    <p class="font-JioType-Black text-base">Select order ID</p>
    <div v-for="(item, index) in propsForOrderListCards" :key="item.batch_id">
      <CardWithTableAndCheckboxes
        :cardData="item"
        :tableHeaders="['Order ID', 'Returnable Qty.']"
        :id="index"
        @on-check-item="updateEntry"
      />
    </div>
    {{ propsForOrderListCards }}
    <button @click="proceedToReturnOrders">proceed</button>
  </div>
</template>
<script>
import { mockOrderDetailsBatchOrName } from '../../orderDetailsByBatchOrName'
import CardWithTableAndCheckboxes from '../CardWithTableAndCheckboxes.vue'
export default {
  props: {
    selectedBatches: Object
  },
  data() {
    return {
      apiOrdersData: mockOrderDetailsBatchOrName.data,
      propsForOrderListCards: []
      // OrderListGroupedByBatch
      //   batchListByPrice: null
    }
  },
  components: {
    CardWithTableAndCheckboxes
  },
  mounted() {
    // console.log(this.apiOrdersData)
    this.groupOrdersByBatch
    // console.log(this.groupOrdersByBatch())
  },
  computed: {
    groupOrdersByBatch() {
      let ordersListGroupedByBatch = {}
      if (this.apiOrdersData?.orders) {
        for (let order of this.apiOrdersData.orders) {
          for (let batch of order.batch_details) {
            if (this.selectedBatches.includes(batch.batch_id)) {
              const currOrder = { order_id: order.order_id, item_name: order.item_name, ...batch }
              if (ordersListGroupedByBatch[batch.batch_id]) {
                ordersListGroupedByBatch[batch.batch_id].push(currOrder)
              } else {
                ordersListGroupedByBatch[batch.batch_id] = [currOrder]
              }
            }
          }
        }
      }

      this.preparePropsForOrderListCards(ordersListGroupedByBatch)
      return ordersListGroupedByBatch
    }
  },
  methods: {
    proceedToReturnOrders() {
      let selectedBatchAndOrders = []
      this.propsForOrderListCards.forEach((batch) => {
        batch.tableData?.forEach((order) => {
          if (order.checked) {
            selectedBatchAndOrders.push({ order_id: order.col1, batch_id: batch.batch_id })
          }
        })
      })

      const selectedOrders = {}
      // grouping batches by orders so that it will be easier to parse from api data on next page
      selectedBatchAndOrders.forEach((item) => {
        if (selectedOrders[item.order_id]) {
          selectedOrders[item.order_id].push(item.batch_id)
        } else {
          selectedOrders[item.order_id] = [item.batch_id]
        }
      })

      console.log('selectedOrders-', selectedOrders)
      this.$emit('on-selected-orders', selectedOrders)
      //change component to orders
    },

    preparePropsForOrderListCards(ordersListGroupedByBatch) {
      this.propsForOrderListCards = Object.values(ordersListGroupedByBatch).map((batch) => {
        const tableData = batch.map((item) => ({
          col1: item.order_id,
          col2: item.returable_qty,
          enabled: true,
          checked: false
        }))

        return {
          itemName: batch[0].item_name,
          mrp: batch[0].mrp,
          ptr: batch[0].ptr,
          batchNo: batch[0].batch_id,
          expiryDate: batch[0].expiry_date,
          tableData
        }
      })
    },
    updateEntry({ parentIdx, currIdx }) {
      this.propsForOrderListCards[parentIdx].tableData[currIdx].checked =
        !this.propsForOrderListCards[parentIdx].tableData[currIdx].checked
    }
  }
}
</script>
