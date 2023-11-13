<template>
  <div class="p-6 flex flex-col gap-3">
    <p class="font-JioType-Black text-base">Select batch to return item</p>
    <div v-for="(item, index) in propsForBatchListCards" :key="item.mrp">
      <CardWithTableAndCheckboxes
        :cardData="item"
        :tableHeaders="['Batch No.', 'Expiry']"
        :id="index"
        @on-check-item="updateEntry"
      />
    </div>
    <button @click="proceedToSelectOrders">proceed</button>
  </div>
</template>
<script>
// ;[
//   {
//     itemName: 'dolo',
//     mrp: 52,
//     ptr: 44,
//     tableData: [
//       { col1: 'B1', col2: 'Jan 23', enabled: false, checked: false },
//       { col1: 'B1', col2: 'Jan 23', enabled: true, checked: true }
//     ]
//   },
//   {
//     itemName: 'dolo',
//     mrp: 53,
//     ptr: 45,
//     tableData: [
//       { col1: 'B2', col2: 'Feb 23', enabled: true, checked: false },
//       { col1: 'B3', col2: 'Mar 23', enabled: true, checked: false }
//     ]
//   }
// ]

// {
//     itemName: 'dolo',
//     mrp: 53,
//     ptr: 45,
// batch no
// expiry date

//     tableData: [
//       { col1: 'B2', col2: 'Feb 23', enabled: true, checked: false },
//       { col1: 'B3', col2: 'Mar 23', enabled: true, checked: false }
//     ]
//   }

// {
//     "52": [
//         {
//             "order_id": "OID1",
//             "item_name": "dolo",
//             "mrp": 52,
//             "ptr": 44,
//             "batch_id": "B1",
//             "expiry_date": "Jan 23",
//             "returable_qty": 100,
//             "returnable": false,
//             "return_reasons": [
//                 {
//                     "id": 21,
//                     "reason": "Expiry Return"
//                 },
//                 {
//                     "id": 23,
//                     "reason": "Missing Item"
//                 }
//             ]
//         },
//         {
//             "order_id": "OID2",
//             "item_name": "dolo",
//             "batch_id": "B1",
//             "mrp": 52,
//             "ptr": 44,
//             "expiry_date": "Jan 23",
//             "returable_qty": 80,
//             "returnable": true
//         }
//     ],
//     "53": [
//         {
//             "order_id": "OID1",
//             "item_name": "dolo",
//             "mrp": 53,
//             "ptr": 45,
//             "batch_id": "B2",
//             "expiry_date": "Feb 23",
//             "returable_qty": 100,
//             "returnable": true
//         },
//         {
//             "order_id": "OID2",
//             "item_name": "dolo",
//             "batch_id": "B3",
//             "mrp": 53,
//             "ptr": 45,
//             "expiry_date": "Mar 23",
//             "returable_qty": 30,
//             "returnable": true
//         }
//     ]
// }

import { mockOrderDetailsBatchOrName } from '../../orderDetailsByBatchOrName'
import CardWithTableAndCheckboxes from '../CardWithTableAndCheckboxes.vue'
export default {
  data() {
    return {
      apiOrdersData: mockOrderDetailsBatchOrName.data,
      propsForBatchListCards: []
      //   batchListByPrice: null
    }
  },
  components: {
    CardWithTableAndCheckboxes
  },
  mounted() {
    this.groupedBatchesByPrice
    // console.log(this.apiOrdersData)
    // console.log(this.groupedBatchesByPrice)
  },
  computed: {
    groupedBatchesByPrice() {
      // This method returns batch list grouped by price

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
      this.preparePropsForBatchListCards(batchListByPrice)

      return batchListByPrice
    }
  },

  methods: {
    proceedToSelectOrders() {
      let selectedBatches = []
      this.propsForBatchListCards.forEach((item) => {
        item.tableData?.forEach((batch) => {
          if (batch.checked) {
            selectedBatches.push(batch.col1)
          }
        })
      })

      console.log('rrr-', selectedBatches)
      this.$emit('on-selected-batches', selectedBatches)
      //change component to orders
    },
    preparePropsForBatchListCards(groupedBatchesByPrice) {
      this.propsForBatchListCards = Object.values(groupedBatchesByPrice).map((item) => {
        const tableData = item.map((batch) => ({
          col1: batch.batch_id,
          col2: batch.expiry_date,
          enabled: batch.returnable,
          checked: false
        }))

        return {
          itemName: item[0].item_name,
          mrp: item[0].mrp,
          ptr: item[0].ptr,
          // batchNo: 'ABCD3880023409',
          // expiryDate: 'Jun 23',
          tableData
        }
      })
    },
    updateEntry({ parentIdx, currIdx }) {
      this.propsForBatchListCards[parentIdx].tableData[currIdx].checked =
        !this.propsForBatchListCards[parentIdx].tableData[currIdx].checked
    }
  }
}
</script>
