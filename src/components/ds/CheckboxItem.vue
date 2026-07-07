<script setup lang="ts">
import { ref } from "vue";
import { Check } from "@lucide/vue";

const props = withDefaults(defineProps<{
  label: string;
  defaultChecked?: boolean;
}>(), {
  defaultChecked: false,
});

const checked = ref(props.defaultChecked);
</script>

<template>
  <label class="flex items-center gap-2.5 cursor-pointer select-none">
    <button
      role="checkbox"
      :aria-checked="checked"
      type="button"
      :class="['flex items-center justify-center rounded-sm border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring', checked ? 'bg-[#001F6B] border-[#001F6B]' : 'border-border bg-card hover:border-[#001F6B]/50']"
      style="width: 18px; height: 18px"
      @click="checked = !checked"
    >
      <Check v-if="checked" :size="11" :stroke-width="3" class="text-white" />
    </button>
    <span class="text-sm text-foreground">{{ label }}</span>
  </label>
</template>
