<script setup lang="ts">
import { User, Clock, X } from "@lucide/vue";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import FlightCard from "../FlightCard.vue";
import StatCard from "../StatCard.vue";
import Avatar from "../Avatar.vue";
import Badge from "../Badge.vue";

type BadgeVariant = "economy" | "business" | "first";

const passengers: { name: string; seat: string; cls: BadgeVariant; gate: string }[] = [
  { name: "Marie Dupont", seat: "12A", cls: "business", gate: "14" },
  { name: "Thomas Bernard", seat: "34C", cls: "economy", gate: "14" },
  { name: "Isabelle Martin", seat: "02B", cls: "first", gate: "14" },
];

function clsLabel(cls: BadgeVariant) {
  return cls === "economy" ? "Eco" : cls === "business" ? "Biz" : "1st";
}
</script>

<template>
  <Section id="cards" title="Cards" subtitle="Flight, stat, and passenger cards with real aviation data.">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
      <FlightCard />
      <FlightCard origin="LHR" dest="DXB" dep="14:20" arr="23:40" duration="6h 20m" price="€890" cls="economy" />
      <div class="space-y-4">
        <StatCard label="Passengers Booked" value="12,840" delta="+8.4%"><template #icon><User :size="16" /></template></StatCard>
        <StatCard label="On-time Performance" value="94.2%" delta="+1.1%"><template #icon><Clock :size="16" /></template></StatCard>
        <StatCard label="Cancellations" value="23" delta="-12%"><template #icon><X :size="16" /></template></StatCard>
      </div>
    </div>
    <SectionLabel>Passenger Card</SectionLabel>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="p in passengers" :key="p.name" class="bg-card border border-border rounded p-4 flex items-center gap-3">
        <Avatar :name="p.name" />
        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-foreground truncate">{{ p.name }}</p>
          <p class="text-xs text-muted-foreground">Seat {{ p.seat }} · Gate {{ p.gate }}</p>
        </div>
        <Badge :variant="p.cls" pill>{{ clsLabel(p.cls) }}</Badge>
      </div>
    </div>
  </Section>
</template>
