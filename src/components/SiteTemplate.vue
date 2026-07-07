<script setup lang="ts">
import GlobalNav from "./GlobalNav.vue";
import HeroSection from "./HeroSection.vue";
import DestinationsSection from "./DestinationsSection.vue";
import PremiumSection from "./PremiumSection.vue";
import SmartComfortSection from "./SmartComfortSection.vue";
import MilesSection from "./MilesSection.vue";
import SiteFooter from "./SiteFooter.vue";
import SkyChatFloat from "./SkyChatFloat.vue";
</script>

<template>
  <div class="bg-background">
    <GlobalNav />
    <main>
      <HeroSection />
      <DestinationsSection />
      <PremiumSection />
      <SmartComfortSection />
      <MilesSection />
    </main>
    <SiteFooter />
    <SkyChatFloat />
  </div>
</template>
