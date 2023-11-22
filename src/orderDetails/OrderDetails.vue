<template>
  <div :class="`p-6 text-[#000000A6] mb-14`">
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

    <!-- order tracking -->
    <VerticleStepper :orderStatus="orderDetails.orderStatus" />
    <hr class="-mx-6 my-6" />
    <!-- payment details -->
    <PaymentDetails
      :paymentDetails="orderDetails.paymentDetails"
      :invoiceNo="orderDetails.invoiceNumber"
    />

    <hr class="-mx-6 my-6" />
    <!-- Item details -->
    <ItemDetails :itemDetails="orderDetails.itemDetails" :totalQty="orderDetails.itemQuantity" />

    <hr class="-mx-6 my-6" />
    <RefundDetails />

    <!-- Actions buttons -->
    <div class="fixed bottom-0 left-0 right-0 flex gap-4 px-6 py-3 footer_with_shadow">
      <SecondaryButton v-if="getActions.return" label="Return" @on-click="console.log('return')" />
      <SecondaryButton
        v-if="getActions.cancel"
        label="Cancel order"
        @on-click="console.log('cancel')"
      />
      <!-- <SecondaryButton v-if="getActions.reorder" label="Reorder" /> -->
    </div>
  </div>
</template>
<script>
import { mockOrderDetails } from './orderDetailsSuccess.js'
import PaymentDetails from './OrderPaymentDetails.vue'
import ItemDetails from './OrderItemDetails.vue'
import SecondaryButton from './SecondaryButton.vue'
import RefundDetails from './OrderRefundDetails.vue'
import VerticleStepper from './VerticalStepper.vue'

export default {
  data() {
    return {
      orderDetails: mockOrderDetails.orderDetails
    }
  },
  components: {
    PaymentDetails,
    ItemDetails,
    SecondaryButton,
    RefundDetails,
    VerticleStepper
  },
  mounted() {
    console.log(this.$options)
  },
  computed: {
    getActions() {
      return {
        return: this.orderDetails.actions.includes('return'),
        reorder: this.orderDetails.actions.includes('reorder'),
        cancel: this.orderDetails.actions.includes('cancel')
      }
    }
  }
}
</script>
<style>
.footer_with_shadow {
  background-color: white;
  box-shadow: 0px -4px 16px 0px rgba(0, 0, 0, 0.08);
  z-index: 10;
}
.card_with_shadow {
  border-radius: 16px;
  /* Shadow/S */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}
</style>
