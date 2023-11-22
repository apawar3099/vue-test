<template>
  <div></div>
</template>
<script>
import { global } from '../globalColorConfig'
import { mockOrderDetailsBatchOrName } from '../orderDetailsByBatchOrName'
export default {
  components: {},
  props: {},
  data() {
    return {
      global: global.props,
      apiOrdersData: mockOrderDetailsBatchOrName.data, // data to be fetched from api
      returnItemsListData: [],
      returnItems: { OID2: ['B1', 'B3'], OID1: ['B1', 'B2'] } // data to be taken from global store
    }
  },
  computed: {
    cssProps() {
      return {
        '--border_color': this.global.button_secondary_border_color,
        '--title_color': this.global.title,
        '--subtitle_color': this.global.subtitle,
        '--disabled_color': this.global.text_disabled_color
      }
    }
  },
  methods: {
    getDataForReturnItemsCards() {
      dataForReturnItemsCards = []
      apiOrdersData?.orders.forEach((order) => {
        let selectedBatches = returnItems[order.order_id]
        if (batches) {
          order.batch_details.forEach((batch) => {
            if (selectedBatches.includes(batch.batch_id)) {
              let returnItemData = {
                order_id: order.order_id,
                item_name: order.item_name,
                ...batch
              }

              dataForReturnItemsCards.push(returnItemData)
            }
          })
        }
      })

      return dataForReturnItemsCards
    }
  }
}
</script>
<style lang="less" scoped>
.text-title-color {
  color: var(--title_color);
}
.text-subtitle-color {
  color: var(--subtitle_color);
}
.border-color {
  border-color: var(--border_color);
}

.disabled-color {
  color: var(--disabled_color);
}
</style>
