<template>
  <div>
    <p :class="`text-[#141414] font-JioType-Black mb-3`">Payment Details</p>
    <div :class="`text-sm font-medium flex flex-col gap-2`">
      <p class="payment_item">
        Order Amount
        <span class="payment_item--price">{{ paymentDetails.orderAmount | currencyFormat }}</span>
      </p>
      <p class="payment_item">
        GST Amount
        <span class="payment_item--price">{{ paymentDetails.gstAmount | currencyFormat }}</span>
      </p>
      <p class="payment_item payment_item--total">
        Total Amount
        <span class="payment_item--total_price">{{
          paymentDetails.totalAmount | currencyFormat
        }}</span>
      </p>
    </div>

    <PaymentAccordion :titleBgColor="`#FBE5F4`">
      <template v-slot:main>sdsdsd</template>
      <template v-slot:expanded>qqqqq</template>
    </PaymentAccordion>
  </div>
</template>

<script>
import PaymentAccordion from './PaymentAccordion.vue'

export default {
  props: {
    paymentDetails: Object
  },
  components: {
    PaymentAccordion
  }
}
</script>
<style lang="less">
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
