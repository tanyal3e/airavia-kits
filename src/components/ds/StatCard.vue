<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ label: string; value: string; delta: string }>();

const positive = computed(() => props.delta.startsWith("+") || props.delta.startsWith("-"));
const up = computed(() => props.delta.startsWith("+"));
</script>

<template>
  <div class="bg-card border border-border rounded p-5">
    <div class="flex items-start justify-between mb-3">
      <p class="text-sm text-muted-foreground font-medium">{{ label }}</p>
      <span class="text-muted-foreground"><slot name="icon" /></span>
    </div>
    <p class="text-2xl font-bold text-foreground tracking-tight">{{ value }}</p>
    <p :class="['text-xs mt-1 font-semibold', positive && up ? 'text-[#0E7A44]' : 'text-destructive']">{{ delta }} vs last month</p>
  </div>
</template>
