<script setup lang="ts">
import { Minus, Plus } from "@lucide/vue";

const props = defineProps<{
  label: string;
  sub: string;
  modelValue: number;
  min: number;
  max: number;
}>();

const emit = defineEmits<{ "update:modelValue": [value: number] }>();

function dec() {
  emit("update:modelValue", Math.max(props.min, props.modelValue - 1));
}
function inc() {
  emit("update:modelValue", Math.min(props.max, props.modelValue + 1));
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm font-semibold text-[#09102b]">{{ label }}</p>
      <p class="text-xs text-[#5b6580]">{{ sub }}</p>
    </div>
    <div class="flex items-center gap-3">
      <button
        type="button"
        :disabled="modelValue <= min"
        :aria-label="`Decrease ${label}`"
        class="w-7 h-7 flex items-center justify-center rounded-full border border-[rgba(0,31,107,0.2)] text-[#001f6b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6ECF8] transition-colors"
        @click="dec"
      >
        <Minus :size="12" />
      </button>
      <span class="w-4 text-center text-sm font-semibold text-[#09102b]">{{ modelValue }}</span>
      <button
        type="button"
        :disabled="modelValue >= max"
        :aria-label="`Increase ${label}`"
        class="w-7 h-7 flex items-center justify-center rounded-full border border-[rgba(0,31,107,0.2)] text-[#001f6b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E6ECF8] transition-colors"
        @click="inc"
      >
        <Plus :size="12" />
      </button>
    </div>
  </div>
</template>
