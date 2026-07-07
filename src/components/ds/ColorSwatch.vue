<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ name: string; hex: string }>();
const copied = ref(false);

function copy() {
  try {
    navigator.clipboard.writeText(props.hex).catch(() => {});
  } catch {}
  copied.value = true;
  setTimeout(() => (copied.value = false), 1200);
}
</script>

<template>
  <button class="group flex flex-col gap-1.5 text-left focus:outline-none" :title="`Copy ${hex}`" @click="copy">
    <div class="h-12 w-full rounded-sm border border-border transition-transform group-hover:scale-105" :style="{ backgroundColor: hex }" />
    <span class="text-xs font-medium text-foreground">{{ name }}</span>
    <span class="font-[JetBrains_Mono,monospace] text-[10px] text-muted-foreground">{{ copied ? "Copied!" : hex }}</span>
  </button>
</template>
