<template>
  <div :class="`p-6 text-[#000000A6]`">
    <p :class="`font-bold text-[#6D17CE] mb-4 text-base`">{{ orderDetails.deliveryInfo }}</p>
    <div :class="`text-sm font-bold `">
      <p>Order ID {{ orderDetails.orderNumber }}</p>
      <p>
        {{ `${orderDetails.itemQuantity} ${orderDetails.itemQuantity > 1 ? 'Items' : 'Item'}` }}
        <span class="border-r mx-2"></span>
        {{ orderDetails.paymentDetails.totalAmount | currencyFormat }}
      </p>
    </div>

    <hr class="-mx-6 my-6" />

    <PaymentDetails :paymentDetails="orderDetails.paymentDetails" />
  </div>
</template>
<script>
import { mockOrderDetails } from './orderDetailsSuccess.js'
import PaymentDetails from './OrderPaymentDetails.vue'
export default {
  data() {
    return {
      orderDetails: mockOrderDetails.orderDetails
    }
  },
  components: {
    PaymentDetails
  },
  mounted() {
    console.log(this.$options)
  }
}
</script>
