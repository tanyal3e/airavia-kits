<script setup lang="ts">
import { ref, computed } from "vue";
import { format } from "date-fns";
import { PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent } from "reka-ui";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Calendar as CalendarIcon } from "@lucide/vue";

export type DateRange = { from?: Date; to?: Date };

const props = defineProps<{
  departLabel: string;
  returnLabel: string;
  modelValue: DateRange;
}>();

const emit = defineEmits<{ "update:modelValue": [value: DateRange] }>();

const open = ref(false);
const fmt = (d?: Date) => (d ? format(d, "d MMM") : "");

// vue-datepicker's range model is a [Date, Date] tuple; bridge to/from
// the { from, to } shape used by the rest of the booking widget.
const pickerModel = computed<[Date, Date] | null>({
  get(): [Date, Date] | null {
    return props.modelValue.from && props.modelValue.to ? [props.modelValue.from, props.modelValue.to] : null;
  },
  set(v: [Date, Date] | null) {
    if (v && v[0] && v[1]) emit("update:modelValue", { from: v[0], to: v[1] });
  },
});
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <button type="button" class="w-full flex items-stretch text-left">
        <div class="relative flex-1 min-w-0">
          <div class="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
          <div class="flex flex-col gap-1 px-5 py-3.5">
            <span class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{{ departLabel }}</span>
            <span class="text-[15px] font-semibold text-[#09102b] truncate">{{ fmt(modelValue.from) }}</span>
          </div>
        </div>
        <div class="relative flex-1 min-w-0">
          <div class="flex flex-col gap-1 px-5 py-3.5">
            <span class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{{ returnLabel }}</span>
            <span class="flex items-center justify-between gap-2 text-[15px] font-semibold text-[#09102b] truncate">
              {{ fmt(modelValue.to) }}
              <CalendarIcon :size="14" class="text-[#5b6580] shrink-0" />
            </span>
          </div>
        </div>
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent align="start" class="z-50 bg-white border border-border rounded shadow-lg p-0" :side-offset="4">
        <VueDatePicker
          v-model="pickerModel"
          range
          :multi-calendars="2"
          inline
          auto-apply
        />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style>
:root {
  --dp-primary-color: #001f6b;
  --dp-border-radius: 4px;
  --dp-font-family: "Hanken Grotesk", system-ui, sans-serif;
}
</style>
