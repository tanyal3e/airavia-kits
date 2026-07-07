<script setup lang="ts">
import { ref } from "vue";

defineProps<{ label: string }>();
const on = ref(false);
</script>

<template>
  <label class="flex items-center gap-3 cursor-pointer select-none">
    <button
      role="switch"
      :aria-checked="on"
      type="button"
      :class="['relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring', on ? 'bg-[#001F6B]' : 'bg-[#B8C3DC]']"
      @click="on = !on"
    >
      <span :class="['absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200', on ? 'translate-x-5' : 'translate-x-0']" />
    </button>
    <span class="text-sm font-medium text-foreground">{{ label }}</span>
  </label>
</template>
