<template>
  <div v-if="currentStep && !isExpanded" class="flex items-center">
    <div class="step flex-1 !pb-0" :style="stepsStyleConfig.currentStatusStyle">
      <div class="step-icon-parent">
        <div class="step-icon">
          <component
            :is="getIcon(currentStep.statusId)"
            :fillColor="stepsStyleConfig.currentStatusStyle['--step_icon_color']"
          ></component>
        </div>
      </div>

      <div class="step-label">
        <div class="label">{{ currentStep.status }}</div>
        <div class="sublabel">{{ currentStep.desc }}</div>
        <div class="sublabel date">{{ currentStep.date }}</div>
      </div>
    </div>
    <DownArrow class="h-12 w-12 p-2" @click="isExpanded = true" fillColor="#1E7B74" />
  </div>
  <div v-if="isExpanded" class="relative">
    <div class="steps">
      <div
        class="step"
        v-for="(step, index) in orderStatus"
        :key="step.status"
        :style="stepStyle[index]"
      >
        <div class="step-icon-parent">
          <div class="step-icon">
            <component
              :is="getIcon(step.statusId)"
              :fillColor="stepStyle[index]['--step_icon_color']"
            ></component>
          </div>
        </div>

        <div class="step-label">
          <div class="label">{{ step.status }}</div>
          <div class="sublabel">{{ step.desc }}</div>
          <div class="sublabel date">{{ step.date }}</div>
        </div>
        <StepperStepContent :subStatus="step.subStatus" />
      </div>
    </div>
    <UpArrow
      class="absolute top-0 right-0 h-12 w-12 p-2"
      @click="isExpanded = false"
      fillColor="#1E7B74"
    />
  </div>
</template>
<script>
import DownArrow from '../src/assets/images/down-arrow-new.vue'
import UpArrow from '../src/assets/images/up_arrow.vue'
import stepper_order_confirmed_icon from './assets/images/stepper_order_confirmed_icon.vue'
import stepper_ready_for_pickup_icon from './assets/images/stepper_ready_for_pickup_icon.vue'
import stepper_cancelled_icon from './assets/images/stepper_cancelled_icon.vue'
import stepper_delivered_icon from './assets/images/stepper_delivered_icon.vue'
import stepper_in_transit_icon from './assets/images/stepper_in_transit_icon.vue'
import stepper_order_received_icon from './assets/images/stepper_order_received_icon.vue'
import stepper_out_for_delivery_icon from './assets/images/stepper_out_for_delivery_icon.vue'
import { forwardOrderConfig } from './StepperConfig'
import StepperStepContent from './StepperStepContent.vue'
import { mockOrderDetails } from './orderDetailsSuccess.js'

export default {
  data() {
    return {
      currentStep: null,
      isExpanded: false
      //   orderStatus: mockOrderDetails.orderDetails.orderStatus
    }
  },
  props: {
    orderStatus: Object
  },
  components: {
    DownArrow,
    UpArrow,
    stepper_out_for_delivery_icon,
    stepper_order_received_icon,
    stepper_in_transit_icon,
    stepper_delivered_icon,
    stepper_cancelled_icon,
    stepper_ready_for_pickup_icon,
    stepper_order_confirmed_icon,
    StepperStepContent
  },
  mounted() {
    console.log(this.stepStyle)
  },

  computed: {
    stepsStyleConfig() {
      return {
        currentStatusStyle: {
          '--status_type': 'current',
          '--step_icon_color': '#F0E8FA',
          '--step_bg_color': '#6D17CE',
          '--step_border_color': '#6D17CE',
          '--step_label_color': '#141414',
          '--step_sublabel_color': '#000000A6'
        },
        doneStatusStyle: {
          '--status_type': 'done',
          '--step_icon_color': '#6D17CE',
          '--step_bg_color': '#F0E8FA',
          '--step_border_color': '#6D17CE',
          '--step_label_color': '#000000A6',
          '--step_sublabel_color': '#000000A6'
        },
        pendingStatusStyle: {
          '--status_type': 'pending',
          '--step_icon_color': '#B5B5B5',
          '--step_bg_color': '#fff',
          '--step_border_color': '#B5B5B5',
          '--step_label_color': '#000000A6',
          '--step_sublabel_color': '#000000A6'
        },
        cancelledStatusStyle: {
          '--status_type': 'cancelled',
          '--step_icon_color': '#F50031',
          '--step_bg_color': '#FEE6EA',
          '--step_border_color': '#F50031',
          '--step_label_color': '#141414',
          '--step_sublabel_color': '#000000A6'
        }
      }
    },
    stepStyle() {
      let stepStyle = []
      if (!this.orderStatus) {
        return Array(10).fill(null)
      }

      // Needed to traverse this in reverse order because , color of verticle line depends upon the status of the next item,
      //so by traversing in reverse we can save one extra parse

      for (let idx = this.orderStatus.length - 1; idx >= 0; idx--) {
        const item = this.orderStatus[idx]

        // Below line is checking if the next item is in pending state, if so then make line as grey
        const verticleLineColor =
          stepStyle[0]?.['--status_type'] === 'pending' ? '#E0E0E0' : '#6D17CE'

        let itemStyle = {}
        if (item.statusId === 462) {
          itemStyle = { ...this.stepsStyleConfig.cancelledStatusStyle }
        } else if (item.active === false) {
          itemStyle = { ...this.stepsStyleConfig.pendingStatusStyle }
        } else if (
          item.active === true &&
          (!this.orderStatus[idx + 1] || this.orderStatus[idx + 1]?.active === false)
        ) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.currentStep = item
          itemStyle = { ...this.stepsStyleConfig.currentStatusStyle }
        } else {
          itemStyle = { ...this.stepsStyleConfig.doneStatusStyle }
        }
        itemStyle['--step_line_color'] = verticleLineColor
        stepStyle.unshift(itemStyle)
      }
      return stepStyle
    }
  },

  methods: {
    getIcon(statusId) {
      return forwardOrderConfig[statusId]
    }
  }
}
</script>
<style lang="less">
.steps {
  width: 100%;
  background-color: #fff;
  padding: 0;
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
  background-color: var(--step_line_color); // #6d17ce;
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
  border: 1px solid var(--step_border_color);
  background-color: var(--step_bg_color);
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
  color: var(--step_label_color); // #141414;
}

.sublabel {
  line-height: 20px;
  font-size: 14px;
  color: var(--step_sublabel_color); //#000000a6;
  font-weight: 500;
}
.date {
  color: var(--step_label_color); //#000000a6;
  font-weight: 700;
}
</style>
<script></script>
