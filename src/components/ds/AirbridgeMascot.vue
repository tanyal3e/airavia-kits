<script setup lang="ts">
import { computed } from "vue";
import { User } from "@lucide/vue";

const MOOD_LABELS: Record<string, string> = {
  happy: "Default",
  waving: "Welcome",
  thinking: "Thinking",
};

const props = withDefaults(defineProps<{
  size?: number;
  mood?: "happy" | "thinking" | "waving";
}>(), {
  size: 120,
  mood: "happy",
});

const userIconSize = computed(() => Math.round(props.size * 0.17));
</script>

<template>
  <div
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="rounded-xl border-2 border-dashed border-[#B8C3DC] bg-[#EDF0F7] flex flex-col items-center justify-center gap-2 select-none"
    :aria-label="`Sky mascot placeholder — ${mood}`"
  >
    <div class="w-10 h-10 rounded-full bg-[#DDE2EF] flex items-center justify-center">
      <User :size="userIconSize" class="text-[#8A9EC0]" />
    </div>
    <p class="text-[10px] font-bold text-[#8A9EC0] tracking-wide uppercase">Sky</p>
    <p class="text-[9px] text-[#B8C3DC] font-medium">{{ MOOD_LABELS[mood] }}</p>
  </div>
</template>
