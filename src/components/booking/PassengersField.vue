<script setup lang="ts">
import { ref, computed } from "vue";
import { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent } from "reka-ui";
import PassengerRow from "./PassengerRow.vue";

const props = defineProps<{
  label: string;
  adults: number;
  childrenCount: number;
  hasDivider?: boolean;
}>();

const emit = defineEmits<{ change: [adults: number, children: number] }>();

const open = ref(false);
const summary = computed(() => {
  const adultsPart = `${props.adults} Adult${props.adults !== 1 ? "s" : ""}`;
  const childrenPart = props.childrenCount > 0 ? `, ${props.childrenCount} Child${props.childrenCount !== 1 ? "ren" : ""}` : "";
  return adultsPart + childrenPart;
});
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <button type="button" class="relative flex-1 min-w-0 w-full text-left">
        <div v-if="hasDivider" class="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
        <div class="flex flex-col gap-1 px-5 py-3.5">
          <span class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{{ label }}</span>
          <span class="text-[15px] font-semibold text-[#09102b] truncate">{{ summary }}</span>
        </div>
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent align="start" class="z-50 bg-white border border-border rounded shadow-lg w-64 p-4" :side-offset="4">
        <PassengerRow
          label="Adults"
          sub="Age 12+"
          :model-value="adults"
          :min="1"
          :max="9"
          @update:model-value="(v) => emit('change', v, childrenCount)"
        />
        <div class="h-px bg-[rgba(0,31,107,0.08)] my-3" />
        <PassengerRow
          label="Children"
          sub="Age 0–11"
          :model-value="childrenCount"
          :min="0"
          :max="8"
          @update:model-value="(v) => emit('change', adults, v)"
        />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
