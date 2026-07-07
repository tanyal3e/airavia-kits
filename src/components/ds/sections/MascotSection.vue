<script setup lang="ts">
import Section from "../Section.vue";
import AirbridgeMascot from "../AirbridgeMascot.vue";
import AiraviaLogo from "@/components/AiraviaLogo.vue";

const moods = ["happy", "waving", "thinking"] as const;

const moodTitle: Record<(typeof moods)[number], string> = {
  happy: "Default / Happy",
  waving: "Welcome / Waving",
  thinking: "Thinking / Loading",
};
const moodDesc: Record<(typeof moods)[number], string> = {
  happy: "Standard greetings, confirmations",
  waving: "Onboarding, first contact, celebrations",
  thinking: "Processing, loading, uncertainty",
};
</script>

<template>
  <Section id="mascot" title="Brand Mascot — Sky" subtitle="A minimalistic illustrated captain character embodying Airavia's approachable authority.">
    <div class="grid sm:grid-cols-3 gap-6 mb-6">
      <div v-for="mood in moods" :key="mood" class="bg-card border border-border rounded p-8 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
        <AirbridgeMascot :size="140" :mood="mood" />
        <div class="text-center">
          <p class="text-sm font-semibold text-foreground capitalize">{{ moodTitle[mood] }}</p>
          <p class="text-xs text-muted-foreground mt-1">{{ moodDesc[mood] }}</p>
        </div>
      </div>
    </div>
    <div class="bg-[#001F6B] rounded p-8 flex flex-col sm:flex-row items-center gap-6">
      <AirbridgeMascot :size="100" mood="waving" />
      <div class="text-center sm:text-left">
        <div class="inline-flex mb-3">
          <AiraviaLogo :height="24" />
        </div>
        <p class="text-white/40 text-xs font-bold tracking-widest uppercase mb-1">Brand Character</p>
        <h3 class="text-xl font-bold text-white">Meet Sky</h3>
        <p class="text-white/70 text-sm mt-2 max-w-md leading-relaxed">
          Sky is Airavia's guide — always at the gate, ready to help. A friendly face that makes flying feel effortless. Friendly without being frivolous, precise without being cold.
        </p>
      </div>
    </div>
  </Section>
</template>
