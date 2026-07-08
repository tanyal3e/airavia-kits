<script setup lang="ts">
import { ref } from "vue";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";

const durations: { key: string; label: string; token: string }[] = [
  { key: "fast", label: "Fast · 150ms", token: "duration-(--duration-fast)" },
  { key: "base", label: "Base · 200ms", token: "duration-(--duration-base)" },
  { key: "slow", label: "Slow · 300ms", token: "duration-(--duration-slow)" },
];

const hovered = ref<string | null>(null);
</script>

<template>
  <Section id="animation" title="Animation" subtitle="Shared motion tokens for consistent, predictable transitions.">
    <div class="space-y-10">
      <div>
        <SectionLabel>Duration Tokens</SectionLabel>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="d in durations"
            :key="d.key"
            :class="['w-28 h-20 rounded border border-border bg-card flex items-center justify-center text-xs font-semibold text-muted-foreground transition-all ease-(--ease-standard)', d.token, hovered === d.key ? 'scale-105 bg-[#E6ECF8] text-[#001F6B] border-[#001F6B]/30' : '']"
            @mouseenter="hovered = d.key"
            @mouseleave="hovered = null"
          >
            {{ d.label }}
          </div>
        </div>
      </div>
      <div>
        <SectionLabel>Easing Tokens</SectionLabel>
        <div class="flex flex-wrap gap-4">
          <div class="w-32 h-16 rounded border border-border bg-card flex items-center justify-center text-xs font-semibold text-muted-foreground transition-transform duration-(--duration-base) ease-(--ease-entrance) hover:translate-x-2">
            ease-entrance
          </div>
          <div class="w-32 h-16 rounded border border-border bg-card flex items-center justify-center text-xs font-semibold text-muted-foreground transition-transform duration-(--duration-base) ease-(--ease-exit) hover:-translate-x-2">
            ease-exit
          </div>
          <div class="w-32 h-16 rounded border border-border bg-card flex items-center justify-center text-xs font-semibold text-muted-foreground transition-transform duration-(--duration-base) ease-(--ease-standard) hover:scale-110">
            ease-standard
          </div>
        </div>
      </div>
      <div>
        <SectionLabel>Typing Dots (Staggered Token Usage)</SectionLabel>
        <div class="inline-flex gap-1.5 items-center bg-[#f2f3f5] border border-[#d1d5db] rounded-[16px] px-4 py-3">
          <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow: visible">
            <circle class="anim-typing-dot" cx="4" cy="12" r="4" fill="#3D64E0" style="animation-delay: 0ms" />
            <circle class="anim-typing-dot" cx="18" cy="4" r="4" fill="#3D64E0" opacity="0.6" style="animation-delay: 200ms" />
            <circle class="anim-typing-dot" cx="33" cy="11" r="6" fill="#3D64E0" opacity="0.3" style="animation-delay: 400ms" />
          </svg>
          <span class="text-xs text-[#5b6580] ml-1">Sky is typing…</span>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.anim-typing-dot {
  animation: anim-typing-dot-bounce 1.2s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}
@keyframes anim-typing-dot-bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-6px);
  }
}
</style>
