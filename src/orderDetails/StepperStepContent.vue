<template>
  <div v-if="subStatus">
    <div v-for="item in subStatus" :key="item.status" class="flex py-2 gap-3 items-center">
      <StepperSubstatusAlertIcon v-if="item.type === 'alert'" />
      <StepperSubstatusDoneIcon v-if="item.type === 'done'" />
      <StepperSubstatusPendingIcon v-if="item.type === 'pending'" />
      <div>
        <p class="substatus-label">{{ item.status }}</p>
        <p class="substatus-label">{{ item.reason }}</p>
        <p class="substatus-date">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import StepperSubstatusAlertIcon from './assets/images/stepper_substatus_alert_icon.vue'
import StepperSubstatusDoneIcon from './assets/images/stepper_substatus_done_icon.vue'
import StepperSubstatusPendingIcon from './assets/images/stepper_substatus_pending_icon.vue'

export default {
  props: {
    subStatus: Object
  },
  components: {
    StepperSubstatusAlertIcon,
    StepperSubstatusDoneIcon,
    StepperSubstatusPendingIcon
  },
  mounted() {},
  data() {
    return {}
  }
}
</script>
<style scoped>
.substatus-label {
  line-height: 20px;
  font-size: 14px;
  color: #000000a6;
  font-weight: 500;
}

.substatus-date {
  line-height: 20px;
  font-size: 14px;
  color: #141414;
  font-weight: 700;
}
</style>
