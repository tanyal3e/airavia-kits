<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ options: string[] }>();
const val = ref(props.options[0]);
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <label v-for="opt in options" :key="opt" class="flex items-center gap-2.5 cursor-pointer select-none">
      <button
        role="radio"
        :aria-checked="val === opt"
        type="button"
        :class="['flex items-center justify-center rounded-full border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring', val === opt ? 'border-[#001F6B]' : 'border-border bg-card hover:border-[#001F6B]/50']"
        style="width: 18px; height: 18px"
        @click="val = opt"
      >
        <span v-if="val === opt" class="rounded-full bg-[#001F6B]" style="width: 9px; height: 9px" />
      </button>
      <span class="text-sm text-foreground">{{ opt }}</span>
    </label>
  </div>
</template>
