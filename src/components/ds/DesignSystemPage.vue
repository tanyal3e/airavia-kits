<script setup lang="ts">
import AiraviaLogo from "@/components/AiraviaLogo.vue";
import Badge from "./Badge.vue";
import ColorsSection from "./sections/ColorsSection.vue";
import TypographySection from "./sections/TypographySection.vue";
import ButtonsSection from "./sections/ButtonsSection.vue";
import BadgesSection from "./sections/BadgesSection.vue";
import FormsSection from "./sections/FormsSection.vue";
import CardsSection from "./sections/CardsSection.vue";
import AlertsSection from "./sections/AlertsSection.vue";
import NavigationSection from "./sections/NavigationSection.vue";
import ChatSection from "./sections/ChatSection.vue";
import MascotSection from "./sections/MascotSection.vue";
import MiscSection from "./sections/MiscSection.vue";
</script>

<template>
  <main class="max-w-screen-xl mx-auto px-6 py-10">
    <!-- Hero -->
    <div class="mb-14">
      <p class="text-xs font-bold tracking-widest uppercase text-[#C9A84C] mb-3">Foundation</p>
      <h1 class="text-4xl font-bold text-foreground tracking-tight leading-tight max-w-xl">
        Airavia<br />Design System
      </h1>
      <p class="mt-3 text-muted-foreground max-w-lg">
        A comprehensive component library for premium aviation experiences. Consistent, accessible, and crafted with precision.
      </p>
      <div class="flex flex-wrap gap-2 mt-5">
        <Badge variant="info">Vue 3</Badge>
        <Badge variant="neutral">Tailwind CSS 4</Badge>
        <Badge variant="success">Accessible</Badge>
        <Badge variant="neutral" dot>v2.1.0</Badge>
      </div>
    </div>

    <ColorsSection />
    <TypographySection />
    <ButtonsSection />
    <BadgesSection />
    <FormsSection />
    <CardsSection />
    <AlertsSection />
    <NavigationSection />
    <ChatSection />
    <MascotSection />
    <MiscSection />

    <!-- Footer -->
    <footer class="pt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground border-t border-border">
      <div class="flex items-center gap-3">
        <div class="bg-[#001F6B] rounded px-2.5 py-1 flex items-center">
          <AiraviaLogo :height="18" />
        </div>
        <span class="text-muted-foreground">v2.1.0</span>
      </div>
      <span>Hanken Grotesk · Tailwind CSS 4 · Reka UI · Lucide</span>
    </footer>
  </main>
</template>
