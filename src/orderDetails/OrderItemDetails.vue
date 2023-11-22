<template>
  <p :class="` flex justify-between items-center text-[#141414]  mb-4`">
    <span class="font-JioType-Black">Item Detail</span>
    <span class="text-sm font-bold">{{ totalQty }}&nbsp;{{ totalQty > 1 ? 'Items' : 'Item' }}</span>
  </p>
  <div :class="`flex flex-col gap-2 text-sm font-medium `">
    <div
      v-for="item in itemDetails"
      :key="item.name"
      class="card_with_shadow p-3 flex flex-col gap-2"
    >
      <div>
        <p :class="`text-[#141414]  font-bold`">{{ item.name }}</p>
        <p>{{ item.description }}</p>
      </div>

      <div class="flex justify-between items-center">
        <div class="text-xs">
          <span class="mr-1">
            PTR: <span class="font-bold">{{ item.PTR | currencyFormat }}</span>
          </span>
          <span class="line-through">{{ item.mrp | currencyFormat }}</span>
          <span class="border-r mx-2"></span>
          <span :class="`text-[#141414]  font-bold`">Qty: {{ item.quantity }}</span>
        </div>
        <span :class="`text-[#141414]  font-bold`">{{ item.price | currencyFormat }}</span>
      </div>

      <!-- Item Discounts -->
      <PaymentAccordion :titleBgColor="`#FBE5F4`">
        <template v-slot:main>
          <p class="payment_item font-bold">
            Discount
            <span class="payment_item--price"> TODO </span>
          </p>
        </template>
        <template v-slot:expanded>
          <div class="flex flex-col gap-2">
            <p class="payment_item">
              TODO
              <span class="payment_item--price font-bold"> TODO </span>
            </p>
          </div>
        </template>
      </PaymentAccordion>
    </div>
  </div>
</template>
<script>
import PaymentAccordion from './PaymentAccordion.vue'

export default {
  data() {
    return {
      MOPMapping: {
        UPI: 'UPI',
        'CREDIT BALANCE': 'Credit Balance'
      }
    }
  },
  props: {
    itemDetails: Object,
    totalQty: String
  },
  components: {
    PaymentAccordion
  }
}
</script>
<style lang="less" scoped>
.payment_item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--price {
    color: #141414;
  }
  &--total {
    color: #141414;
    font-weight: 700;
  }
  &--total_price {
    font-size: 16px;
    font-weight: 900;
  }
}
</style>
