<template>
  <div class="p-6 flex flex-col gap-3">
    <p class="font-JioType-Black text-base">Select batch to return item</p>
    <div v-for="item in propsForCardList" :key="item.mrp">
      <CardWithTableAndCheckboxes :cardData="item" :tableHeaders="['Batch No.', 'Expiry']" />
    </div>
  </div>
</template>
<script>
import { mockOrderDetailsBatchOrName } from '../../orderDetailsByBatchOrName'
import CardWithTableAndCheckboxes from '../CardWithTableAndCheckboxes.vue'
export default {
  data() {
    return {
      apiOrdersData: mockOrderDetailsBatchOrName.data
      //   batchListByPrice: null
    }
  },
  components: {
    CardWithTableAndCheckboxes
  },
  mounted() {
    // console.log(this.apiOrdersData)
    // console.log(this.collectBatchesByPTR())
  },
  computed: {
    collectBatchesByPrice() {
      let batchListByPrice = {}
      if (this.apiOrdersData?.orders) {
        for (let order of this.apiOrdersData.orders) {
          for (let batch of order.batch_details) {
            const currBatch = { order_id: order.order_id, item_name: order.item_name, ...batch }
            if (batchListByPrice[batch.mrp]) {
              batchListByPrice[batch.mrp].push(currBatch)
            } else {
              batchListByPrice[batch.mrp] = [currBatch]
            }
          }
        }
      }

      return batchListByPrice
    },
    propsForCardList() {
      return Object.values(this.collectBatchesByPrice).map((item) => {
        const tableData = item.map((batch) => ({
          col1: batch.batch_id,
          col2: batch.expiry_date,
          enabled: batch.returnable
        }))

        return {
          itemName: item[0].item_name,
          mrp: item[0].mrp,
          ptr: item[0].ptr,
          // batchNo: 'ABCD3880023409',
          // expiryDate: 'Jun 23',
          tableHeaders: ['Batch No.', 'Expiry'],
          tableData
        }
      })
    }
  },
  methods: {}
}
</script>
