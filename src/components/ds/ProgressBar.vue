<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  label: string;
  value: number;
  max: number;
  color?: string;
}>(), {
  color: "#0057D9",
});

const pct = computed(() => Math.round((props.value / props.max) * 100));
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div class="flex justify-between">
      <p class="text-sm font-medium text-foreground">{{ label }}</p>
      <p class="text-sm text-muted-foreground">{{ value }} / {{ max }}</p>
    </div>
    <div class="h-2 bg-muted rounded-full overflow-hidden">
      <div class="h-full rounded-full transition-all duration-700" :style="{ width: `${pct}%`, backgroundColor: color }" />
    </div>
  </div>
</template>
