<template>
  <div class="steps">
    <div class="step" v-for="step in orderStatus" :key="step.status">
      <div class="step-icon-parent">
        <div class="step-icon">
          <StepperUnderProcessIcon />
        </div>
      </div>

      <div class="step-label">
        <div class="label">{{ step.status }}</div>
        <div class="sublabel">{{ step.date }}</div>
      </div>
      <StepperStepContent :subStatus="step.subStatus" />
    </div>
    <!-- <div class="step">
      <div class="step-icon-parent">
        <div class="step-icon">
          <StepperUnderProcessIcon />
        </div>
      </div>
      <div class="step-label">
        <div class="label">This is step two!</div>
        <div class="sublabel">The content is a little bigger!</div>
      </div>

      <StepperStepContent :subStatus="orderStatus[3].subStatus" />
    </div>
    <div class="step">
      <div class="step-icon-parent">
        <div class="step-icon">
          <StepperUnderProcessIcon />
        </div>
      </div>
      <div class="step-label">
        <div class="label">And finally step three!</div>
        <div class="sublabel">Last but not the least!</div>
      </div>
      <StepperStepContent :subStatus="orderStatus[3].subStatus" />
    </div> -->
  </div>
</template>
<script>
import StepperUnderProcessIcon from './assets/images/stepper_under_process_icon.vue'
import StepperStepContent from './StepperStepContent.vue'
import { mockOrderDetails } from './orderDetailsSuccess.js'

export default {
  data() {
    return {
      orderStatus: mockOrderDetails.orderDetails.orderStatus,
      purpleq: '#6d17ce'
    }
  },
  cssProps() {
    return {
      //   '--search_bg_color': this.global.props?.search_bg_color,
      //   '--search_border_color': this.global.props?.search_border_color,
      //   '--search_placeholder_color': this.global.props?.search_placeholder_color,
      //   '--search_text_color': this.global.props?.search_text_color
    }
  },
  components: {
    StepperUnderProcessIcon,
    StepperStepContent
  }
}
</script>
<style lang="less">
.steps {
  width: 100%;
  background-color: #fff;
  padding: 24px 0;
  position: relative;
  margin: auto;
}

.step {
  padding: 0 0 24px 48px;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  /* height: 100%; */
  width: 1px;
  background-color: #6d17ce;
  left: 16px;
  top: 44px;
  bottom: 4px;

  z-index: 1;
}
.step-icon-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 40px;
  width: 32px;
  left: 0;

  z-index: 2;
}

.step-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  border: 1px solid v-bind('purpleq');
}
.step-icon-inactive {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  border: 1px solid #6d17ce;
}

.step-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
}

.label {
  font-size: 16px;
  font-family: 'jiotype-black';
  line-height: 20px;
  font-weight: 900;
  color: #141414;
}

.sublabel {
  line-height: 20px;
  font-size: 14px;
  color: #000000a6;
  font-weight: 700;
}
</style>
<script></script>
