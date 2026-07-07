<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";
import { useLocale } from "@/composables/useLocale";
import RouteCard, { type Route } from "./RouteCard.vue";
import img1 from "@/imports/AiraviaWeb/3b2e0d50a282f8e51d4dce8549c0ef28982b5333.png";
import img2 from "@/imports/AiraviaWeb/ddd0c0ea71afecfedaee0387e4a855d2b81a6e34.png";
import img3 from "@/imports/AiraviaWeb/9dff36309149d3d14e9e61b232084c3f3297cffc.png";
import img4 from "@/imports/AiraviaWeb/35796027b212d124e5be1d8ac48271ab721141d3.png";
import img5 from "@/imports/AiraviaWeb/f92f48a45ebc38766c1f3bf20103313d7385408d.png";

const { t } = useLocale();

const ROUTES: Route[] = [
  { origin: "AMS", originCity: "Amsterdam", dest: "CDG", destCity: "Paris", duration: "3h 20m", price: "€140", img: img2 },
  { origin: "AMS", originCity: "Amsterdam", dest: "DXB", destCity: "Dubai", duration: "6h 20m", price: "€890", img: img1 },
  { origin: "BRU", originCity: "Brussels", dest: "SIN", destCity: "Singapore", duration: "12h 55m", price: "€1,460", img: img3 },
  { origin: "CDG", originCity: "Paris", dest: "NRT", destCity: "Tokyo", duration: "11h 40m", price: "€1,680", img: img4 },
  { origin: "AMS", originCity: "Amsterdam", dest: "GRU", destCity: "São Paulo", duration: "11h 30m", price: "€1,100", img: img5 },
];
</script>

<template>
  <section class="bg-[rgba(237,240,247,0.4)] w-full shrink-0 py-14">
    <div class="max-w-[1280px] mx-auto px-6">
      <!-- Header row -->
      <div class="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <p class="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">{{ t("dest_label") }}</p>
          <h2 class="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">{{ t("dest_title") }}</h2>
          <p class="text-[14px] font-normal leading-5 text-[#5b6580] mt-2">{{ t("dest_subtitle") }}</p>
        </div>
        <button type="button" class="inline-flex items-center gap-1.5 h-10 px-5 text-[14px] font-semibold border border-[#001f6b] text-[#001f6b] rounded hover:bg-[#E6ECF8] transition-colors shrink-0">
          {{ t("dest_view_all") }}
          <ArrowRight :size="14" />
        </button>
      </div>

      <!-- Cards — horizontal scroll on mobile, 5-col flex on desktop -->
      <div class="overflow-x-auto -mx-6 px-6 md:overflow-visible md:mx-0 md:px-0">
        <div class="flex gap-5">
          <RouteCard v-for="r in ROUTES" :key="`${r.origin}-${r.dest}`" :route="r" />
        </div>
      </div>
    </div>
  </section>
</template>
