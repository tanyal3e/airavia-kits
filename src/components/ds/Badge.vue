<script setup lang="ts">
type BadgeVariant = "info" | "success" | "warning" | "error" | "neutral" | "economy" | "business" | "first";

withDefaults(defineProps<{
  variant?: BadgeVariant;
  dot?: boolean;
  pill?: boolean;
}>(), {
  variant: "neutral",
  dot: false,
  pill: false,
});

const badgeStyles: Record<BadgeVariant, string> = {
  info: "bg-[#D2DCFA] text-[#001F6B]",
  success: "bg-[#D4F0E3] text-[#0E7A44]",
  warning: "bg-[#FEF0D9] text-[#994F08]",
  error: "bg-[#FDDDDF] text-[#A81224]",
  neutral: "bg-[#EDF0F7] text-[#5B6580]",
  economy: "bg-[#EDF0F7] text-[#2E3452] border border-[#B8C3DC]",
  business: "bg-[#001F6B] text-white",
  first: "bg-[#C9A84C] text-[#3D2800]",
};
</script>

<template>
  <span :class="['inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold', pill ? 'rounded-full' : 'rounded-sm', badgeStyles[variant]]">
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
    <slot />
  </span>
</template>
