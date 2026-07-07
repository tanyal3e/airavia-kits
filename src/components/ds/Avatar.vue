<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  name: string;
  size?: "sm" | "md" | "lg";
}>(), {
  size: "md",
});

const initials = computed(() => props.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase());
const sizeClasses = { sm: "w-7 h-7 text-xs", md: "w-9 h-9 text-sm", lg: "w-12 h-12 text-base" };
</script>

<template>
  <div :class="`${sizeClasses[size]} rounded-full bg-[#001F6B] text-white font-semibold flex items-center justify-center shrink-0`">
    {{ initials }}
  </div>
</template>
