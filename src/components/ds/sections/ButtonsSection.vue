<script setup lang="ts">
import { ref } from "vue";
import { Plane, Search, ChevronRight, RefreshCw, Bell } from "@lucide/vue";
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import Btn from "../Btn.vue";

const loadingDemo = ref(false);

function triggerLoading() {
  loadingDemo.value = true;
  setTimeout(() => (loadingDemo.value = false), 2000);
}
</script>

<template>
  <Section id="buttons" title="Buttons" subtitle="Six variants across three sizes with icon support and interactive states.">
    <div class="space-y-8">
      <div>
        <SectionLabel>Variants</SectionLabel>
        <div class="flex flex-wrap gap-3">
          <Btn variant="primary">Primary</Btn>
          <Btn variant="secondary">Secondary</Btn>
          <Btn variant="ghost">Ghost</Btn>
          <Btn variant="outline">Outline</Btn>
          <Btn variant="danger">Danger</Btn>
          <Btn variant="gold">Gold</Btn>
        </div>
      </div>
      <div>
        <SectionLabel>Sizes</SectionLabel>
        <div class="flex flex-wrap items-center gap-3">
          <Btn size="sm">Small</Btn>
          <Btn size="md">Medium</Btn>
          <Btn size="lg">Large</Btn>
        </div>
      </div>
      <div>
        <SectionLabel>With Icons</SectionLabel>
        <div class="flex flex-wrap gap-3">
          <Btn><template #icon><Plane :size="14" /></template>Book Flight</Btn>
          <Btn variant="outline"><template #icon><Search :size="14" /></template>Search</Btn>
          <Btn variant="secondary"><template #icon-right><ChevronRight :size="14" /></template>Proceed</Btn>
          <Btn variant="ghost"><template #icon><RefreshCw :size="14" /></template></Btn>
          <Btn variant="outline"><template #icon><Bell :size="14" /></template></Btn>
        </div>
      </div>
      <div>
        <SectionLabel>States</SectionLabel>
        <div class="flex flex-wrap gap-3">
          <Btn>Default</Btn>
          <Btn :loading="loadingDemo" @click="triggerLoading">
            {{ loadingDemo ? "Processing…" : "Click to Load" }}
          </Btn>
          <Btn disabled>Disabled</Btn>
          <Btn variant="secondary" disabled>Disabled</Btn>
        </div>
      </div>
    </div>
  </Section>
</template>
