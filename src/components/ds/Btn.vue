<script setup lang="ts">
import { Loader2 } from "@lucide/vue";

type BtnVariant = "primary" | "secondary" | "ghost" | "outline" | "danger" | "gold";
type BtnSize = "sm" | "md" | "lg";

withDefaults(defineProps<{
  variant?: BtnVariant;
  size?: BtnSize;
  loading?: boolean;
  disabled?: boolean;
}>(), {
  variant: "primary",
  size: "md",
  loading: false,
  disabled: false,
});

const btnBase = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none";
const btnVariants: Record<BtnVariant, string> = {
  primary: "bg-[#001F6B] text-white hover:bg-[#002B8F] active:bg-[#001A5C]",
  secondary: "bg-[#E6ECF8] text-[#001F6B] hover:bg-[#D0DBF5] active:bg-[#C0CCEE]",
  ghost: "bg-transparent text-[#001F6B] hover:bg-[#E6ECF8] active:bg-[#D0DBF5]",
  outline: "bg-transparent border border-[#001F6B] text-[#001F6B] hover:bg-[#E6ECF8] active:bg-[#D0DBF5]",
  danger: "bg-[#D0182E] text-white hover:bg-[#A81224] active:bg-[#880F1E]",
  gold: "bg-[#C9A84C] text-[#3D2800] hover:bg-[#B8943D] active:bg-[#9A7B2E]",
};
const btnSizes: Record<BtnSize, string> = {
  sm: "h-8 px-3 text-xs rounded-sm",
  md: "h-10 px-5 text-sm rounded",
  lg: "h-12 px-7 text-base rounded",
};
</script>

<template>
  <button :class="[btnBase, btnVariants[variant], btnSizes[size]]" :disabled="disabled || loading" type="button">
    <Loader2 v-if="loading" class="animate-spin" :size="14" />
    <slot v-else name="icon" />
    <slot />
    <slot v-if="!loading" name="icon-right" />
  </button>
</template>
