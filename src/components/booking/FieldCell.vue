<script setup lang="ts">
withDefaults(defineProps<{
  label: string;
  modelValue: string;
  hasDivider?: boolean;
  className?: string;
}>(), {
  className: "",
});

defineEmits<{ "update:modelValue": [value: string] }>();
</script>

<template>
  <div :class="`relative flex-1 min-w-0 ${className}`">
    <div v-if="hasDivider" class="absolute right-0 top-2 bottom-2 w-px bg-[rgba(0,31,107,0.12)]" />
    <div class="flex flex-col gap-1 px-5 py-3.5">
      <label class="text-[10px] font-bold uppercase tracking-[1px] text-[#5b6580] leading-none whitespace-nowrap">{{ label }}</label>
      <input
        :value="modelValue"
        class="w-full bg-transparent text-[15px] font-semibold text-[#09102b] outline-none truncate"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>
