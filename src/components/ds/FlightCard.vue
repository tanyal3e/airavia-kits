<script setup lang="ts">
import { ref, computed } from "vue";
import { Plane, Heart, ArrowRight } from "@lucide/vue";
import Badge from "./Badge.vue";
import Btn from "./Btn.vue";

type BadgeVariant = "info" | "success" | "warning" | "error" | "neutral" | "economy" | "business" | "first";

const props = withDefaults(defineProps<{
  origin?: string;
  dest?: string;
  dep?: string;
  arr?: string;
  duration?: string;
  price?: string;
  cls?: BadgeVariant;
}>(), {
  origin: "CDG",
  dest: "JFK",
  dep: "08:35",
  arr: "10:55",
  duration: "7h 20m",
  price: "€1,240",
  cls: "business",
});

const saved = ref(false);
const clsLabel = computed(() => (props.cls === "business" ? "Business" : props.cls === "first" ? "First Class" : "Economy"));
</script>

<template>
  <div class="bg-card border border-border rounded p-5 hover:shadow-md transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <div>
        <Badge :variant="cls" pill>{{ clsLabel }}</Badge>
        <p class="text-xs text-muted-foreground mt-1.5">Mon 14 Jul · Direct</p>
      </div>
      <button type="button" class="text-muted-foreground hover:text-destructive transition-colors" @click="saved = !saved">
        <Heart :size="16" :fill="saved ? '#D0182E' : 'none'" :class="saved ? 'text-destructive' : ''" />
      </button>
    </div>
    <div class="flex items-center gap-4">
      <div class="text-center">
        <p class="text-2xl font-bold text-foreground tracking-tight">{{ origin }}</p>
        <p class="text-xs text-muted-foreground">Paris</p>
        <p class="text-sm font-semibold text-foreground">{{ dep }}</p>
      </div>
      <div class="flex-1 flex flex-col items-center gap-1">
        <p class="text-xs text-muted-foreground">{{ duration }}</p>
        <div class="flex items-center gap-1 w-full">
          <div class="h-px flex-1 bg-border" />
          <Plane :size="14" class="text-[#001F6B] rotate-[5deg]" />
          <div class="h-px flex-1 bg-border" />
        </div>
        <p class="text-xs text-muted-foreground">Non-stop</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-bold text-foreground tracking-tight">{{ dest }}</p>
        <p class="text-xs text-muted-foreground">New York</p>
        <p class="text-sm font-semibold text-foreground">{{ arr }}</p>
      </div>
    </div>
    <div class="mt-4 pt-4 border-t border-border flex items-center justify-between">
      <div>
        <p class="text-xs text-muted-foreground">From</p>
        <p class="text-xl font-bold text-foreground">{{ price }} <span class="text-sm font-normal text-muted-foreground">/ person</span></p>
      </div>
      <Btn size="sm">
        Select
        <template #icon-right><ArrowRight :size="13" /></template>
      </Btn>
    </div>
  </div>
</template>
