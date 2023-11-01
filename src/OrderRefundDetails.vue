<template>
  <div :class="`text-[#141414]`">
    <p :class="` font-JioType-Black mb-4`">Returns and refund</p>

    <div class="rounded-2xl p-4 text-sm" :style="{ 'background-color': '#F5F5F5' }">
      <span class="font-bold">Note:</span> A refund of ₹200 will be added to credit balance within 5
      working days
    </div>

    <div class="card_with_shadow flex justify-between px-3 py-2">
      <span class="font-bold">Refund</span>
      <div :class="`flex gap-2  items-center text-xs text-[#000000A6]`">
        <span>1 Item</span>
        <span class="border-r"> &nbsp;</span>
        {{ `₹200.00` }}
        <div :class="`bg-[#6D17CE] text-[#F5F5F5] rounded px-2 py-1 font-bold`">Complete</div>
      </div>
    </div>
  </div>
</template>
