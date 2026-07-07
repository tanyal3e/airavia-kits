<script setup lang="ts">
import Section from "../Section.vue";
import SectionLabel from "../SectionLabel.vue";
import ColorSwatch from "../ColorSwatch.vue";

const COLORS: Record<string, { name: string; hex: string }[]> = {
  "Cobalt Navy": [
    { name: "Navy 50", hex: "#EDF1FC" },
    { name: "Navy 100", hex: "#D2DCFA" },
    { name: "Navy 200", hex: "#A5B8F5" },
    { name: "Navy 300", hex: "#6D8EEC" },
    { name: "Navy 400", hex: "#3D64E0" },
    { name: "Navy 500", hex: "#0057D9" },
    { name: "Navy 600", hex: "#0044B0" },
    { name: "Navy 700", hex: "#003388" },
    { name: "Navy 800", hex: "#001F6B" },
    { name: "Navy 900", hex: "#000E3B" },
  ],
  Gold: [
    { name: "Gold 100", hex: "#FEF7E8" },
    { name: "Gold 200", hex: "#F8E6B0" },
    { name: "Gold 300", hex: "#EDD07A" },
    { name: "Gold 400", hex: "#DDB94D" },
    { name: "Gold 500", hex: "#C9A84C" },
    { name: "Gold 600", hex: "#A8872E" },
    { name: "Gold 700", hex: "#7D6219" },
  ],
  Semantic: [
    { name: "Success", hex: "#0E7A44" },
    { name: "Success Light", hex: "#D4F0E3" },
    { name: "Warning", hex: "#E87D0D" },
    { name: "Warning Light", hex: "#FEF0D9" },
    { name: "Error", hex: "#D0182E" },
    { name: "Error Light", hex: "#FDDDDF" },
    { name: "Info", hex: "#0057D9" },
    { name: "Info Light", hex: "#D2DCFA" },
  ],
  Neutral: [
    { name: "Gray 50", hex: "#F4F6FB" },
    { name: "Gray 100", hex: "#EDF0F7" },
    { name: "Gray 200", hex: "#DDE2EF" },
    { name: "Gray 300", hex: "#B8C3DC" },
    { name: "Gray 400", hex: "#8A9EC0" },
    { name: "Gray 500", hex: "#5B6580" },
    { name: "Gray 700", hex: "#2E3452" },
    { name: "Gray 900", hex: "#09102B" },
  ],
};
</script>

<template>
  <Section id="colors" title="Color System" subtitle="Cobalt-shifted palette. Each scale ships 7–10 steps for precise hierarchical application.">
    <div v-for="(swatches, group) in COLORS" :key="group" class="mb-8">
      <SectionLabel>{{ group }}</SectionLabel>
      <div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(76px, 1fr))">
        <ColorSwatch v-for="s in swatches" :key="s.name" :name="s.name" :hex="s.hex" />
      </div>
    </div>
  </Section>
</template>
