<template>
  <div>
    <p :class="`text-[#141414] font-JioType-Black mb-3`">Payment Details</p>
    <div :class="`flex flex-col gap-2 text-sm font-medium `">
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

      <!-- Discounts -->
      <PaymentAccordion :titleBgColor="`#FBE5F4`">
        <template v-slot:main>
          <p class="payment_item font-bold">
            Total Discount
            <span class="payment_item--price">{{
              paymentDetails.totalDiscount.total | currencyFormat
            }}</span>
          </p>
        </template>
        <template v-slot:expanded>
          <div class="flex flex-col gap-2">
            <p class="payment_item">
              Scheme Discount
              <span class="payment_item--price font-bold">{{
                paymentDetails.totalDiscount.schemeDiscount | currencyFormat
              }}</span>
            </p>
            <p class="payment_item">
              Cart Discount
              <span class="payment_item--price font-bold">{{
                paymentDetails.totalDiscount.cartDiscount | currencyFormat
              }}</span>
            </p>
          </div>
        </template>
      </PaymentAccordion>

      <!-- Mode of payments -->
      <PaymentAccordion>
        <template v-slot:main>
          <p class="payment_item font-bold">
            Payment Mode
            <span class="payment_item--price">{{ MOPList }}</span>
          </p>
        </template>
        <template v-slot:expanded>
          <div class="flex flex-col gap-4">
            <div v-for="mop in paymentDetails.modeOfPayment" class="">
              <span>{{ mapMOP(mop.mode) }}:&nbsp;{{ mop.amount | currencyFormat }}</span>
              <span v-if="mop.transactionId" class="payment_item mt-1">
                Transaction ID <span>{{ mop.transactionId }}</span></span
              >
            </div>
          </div>
        </template>
      </PaymentAccordion>

      <!-- Invoice Details -->
      <PaymentAccordion>
        <template v-slot:main>
          <p class="payment_item font-bold">
            Invoice Amount
            <span class="payment_item--price">{{
              paymentDetails.invoiceDetails.invoiceAmount | currencyFormat
            }}</span>
          </p>
        </template>
        <template v-slot:expanded>
          <div class="flex flex-col gap-2">
            <p class="payment_item">
              Invoice Total
              <span class="payment_item--price">{{
                paymentDetails.invoiceDetails.invoiceTotal | currencyFormat
              }}</span>
            </p>
            <p class="payment_item">
              Total Savings
              <span class="payment_item--price"
                >(-) &nbsp;{{ paymentDetails.invoiceDetails.savingsAmount | currencyFormat }}</span
              >
            </p>
          </div>
        </template>
      </PaymentAccordion>
    </div>
    <!-- Download Invoice -->
    <InvoiceDownload :invoiceNo="invoiceNo" />
  </div>
</template>

<script>
import PaymentAccordion from './PaymentAccordion.vue'
import InvoiceDownload from './InvoiceDownload.vue'
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
    paymentDetails: Object,
    invoiceNo: String
  },
  components: {
    PaymentAccordion,
    InvoiceDownload
  },
  computed: {
    MOPList() {
      return this.paymentDetails.modeOfPayment
        .map((item) => item.mode)
        .map(this.mapMOP)
        .join(', ')
    }
  },
  methods: {
    mapMOP(mop) {
      return this.MOPMapping[mop] || mop
    }
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
