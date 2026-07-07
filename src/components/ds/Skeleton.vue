<script setup lang="ts">
withDefaults(defineProps<{ className?: string }>(), { className: "" });
</script>

<template>
  <div :class="`bg-muted rounded animate-pulse ${className}`" />
</template>
