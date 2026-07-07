<script setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from "reka-ui";
import { ChevronDown, Check } from "@lucide/vue";

defineProps<{
  label: string;
  modelValue: string;
  options: { value: string; label: string }[];
  hasDivider?: boolean;
}>();

defineEmits<{ "update:modelValue": [value: string] }>();
</script>

<template>
  <div class="relative flex-1 min-w-0">
    <div v-if="hasDivider" class="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
    <SelectRoot :model-value="modelValue" @update:model-value="(v) => $emit('update:modelValue', v as string)">
      <SelectTrigger class="flex flex-col items-start gap-1 px-5 py-3.5 w-full text-left outline-none">
        <span class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none">{{ label }}</span>
        <span class="flex items-center gap-1 text-[15px] font-semibold text-[#09102b]">
          <SelectValue />
          <SelectIcon><ChevronDown :size="13" class="text-[#5b6580]" /></SelectIcon>
        </span>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent class="z-50 bg-white border border-[rgba(0,31,107,0.12)] rounded shadow-lg overflow-hidden" position="popper">
          <SelectViewport class="p-1">
            <SelectItem
              v-for="opt in options"
              :key="opt.value"
              :value="opt.value"
              class="flex items-center gap-2 px-3 py-2 text-sm rounded text-[#09102b] cursor-pointer hover:bg-[#E6ECF8] outline-none data-[highlighted]:bg-[#E6ECF8]"
            >
              <SelectItemText>{{ opt.label }}</SelectItemText>
              <SelectItemIndicator class="ml-auto"><Check :size="12" class="text-[#001F6B]" /></SelectItemIndicator>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
