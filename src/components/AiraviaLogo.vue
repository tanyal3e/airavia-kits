<script setup lang="ts">
// White logotype (icon + wordmark) — designed for dark/navy backgrounds only.
// On light backgrounds, wrap in a dark chip (see SiteFooter usage).
import airaviaLogo from "@/imports/AiraviaWeb/LogoWhite.png";

withDefaults(defineProps<{ height?: number; className?: string }>(), {
  height: 24,
  className: "",
});
</script>

<template>
  <img
    :src="airaviaLogo"
    alt="Airavia"
    :style="{ height: `${height}px`, width: 'auto' }"
    :class="`shrink-0 object-contain ${className}`"
  />
</template>
