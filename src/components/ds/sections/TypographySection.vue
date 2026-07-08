<script setup lang="ts">
import Section from "../Section.vue";

const items = [
  { label: "Display L", size: "text-[69px]", weight: "font-bold", text: "Paris CDG · Terminal 2E", desc: "69px · 700" },
  { label: "Display L", size: "text-5xl", weight: "font-bold", text: "Paris CDG · Terminal 2E", desc: "48px · 700" },
  { label: "Heading 1", size: "text-3xl", weight: "font-bold", text: "Book your next adventure", desc: "30px · 700" },
  { label: "Heading 2", size: "text-2xl", weight: "font-semibold", text: "Upcoming Flights", desc: "24px · 600" },
  { label: "Heading 3", size: "text-xl", weight: "font-semibold", text: "Seat Selection", desc: "20px · 600" },
  { label: "Heading 4", size: "text-lg", weight: "font-semibold", text: "Baggage Allowance", desc: "18px · 600" },
  { label: "Body", size: "text-base", weight: "font-normal", text: "Experience world-class service on every Airavia flight — fully-flat beds, gourmet dining, and priority boarding.", desc: "16px · 400" },
  { label: "Body Small", size: "text-sm", weight: "font-normal", text: "Ticket prices include checked baggage, in-flight meals, and lounge access for Business passengers.", desc: "14px · 400" },
  { label: "Caption", size: "text-xs", weight: "font-medium", text: "Flight AB320 · Operated by Airavia International", desc: "12px · 500" },
  { label: "Overline", size: "text-xs", weight: "font-bold", text: "FARE CONDITIONS · NON-REFUNDABLE", desc: "11px · 700 · caps", extra: "tracking-widest uppercase" },
  { label: "Mono", size: "text-xs", weight: "font-medium", text: "--color-primary: #001F6B", desc: "12px · JetBrains Mono", mono: true },
];
</script>

<template>
  <Section id="typography" title="Typography" subtitle="Hanken Grotesk — a humanist grotesque optimised for aviation UI legibility.">
    <div class="space-y-1">
      <div v-for="t in items" :key="`${t.label}-${t.desc}`" class="flex items-baseline gap-6 py-4 border-b border-border last:border-0">
        <div class="w-28 shrink-0">
          <p class="text-xs font-semibold text-muted-foreground">{{ t.label }}</p>
          <p class="font-[JetBrains_Mono,monospace] text-[10px] text-muted-foreground/60 mt-0.5">{{ t.desc }}</p>
        </div>
        <p :class="[t.size, t.weight, 'text-foreground', t.extra ?? '', t.mono ? 'font-[JetBrains_Mono,monospace] text-[#0057D9]' : '', 'leading-tight']">
          {{ t.text }}
        </p>
      </div>
    </div>
  </Section>
</template>
