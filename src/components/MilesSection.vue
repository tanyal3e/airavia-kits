<script setup lang="ts">
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const stats = computed(() => [
  { val: t("miles_stat1_val"), label: t("miles_stat1_label"), border: true },
  { val: t("miles_stat2_val"), label: t("miles_stat2_label"), border: true },
  { val: t("miles_stat3_val"), label: t("miles_stat3_label"), border: false },
]);
</script>

<template>
  <section class="bg-[#001f6b] w-full shrink-0 py-14">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="flex items-center justify-between gap-10 flex-wrap lg:flex-nowrap">
        <!-- Left: copy block -->
        <div class="flex flex-col gap-6 w-full max-w-[592px]">
          <div>
            <p class="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">{{ t("miles_label") }}</p>
            <h2 class="text-[30px] font-bold leading-[37.5px] tracking-[-0.6px] text-white mt-3">{{ t("miles_title") }}</h2>
          </div>
          <p class="text-[16px] font-normal leading-[26px] text-white/70 max-w-[512px]">{{ t("miles_body") }}</p>
          <div class="flex items-center gap-6 flex-wrap">
            <button type="button" class="inline-flex items-center gap-2 h-12 px-7 bg-[#C9A84C] text-[#3d2800] text-[16px] font-semibold rounded hover:bg-[#B8943D] transition-colors">
              {{ t("miles_join") }}
            </button>
            <button type="button" class="inline-flex items-center gap-2 h-12 text-[16px] font-semibold text-white/80 hover:text-white transition-colors">
              {{ t("miles_learn") }}
              <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
                <path d="M3.125 7.5H11.875" stroke="white" stroke-opacity="0.8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.125 3.75L11.875 7.5L8.125 11.25" stroke="white" stroke-opacity="0.8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: stats -->
        <div class="hidden lg:flex items-center shrink-0">
          <div
            v-for="s in stats"
            :key="s.label"
            class="flex flex-col items-center px-6 py-6 w-[195px]"
            :style="s.border ? { borderRight: '0.625px solid rgba(255,255,255,0.1)' } : {}"
          >
            <p class="text-[36px] font-black leading-10 text-[#C9A84C] text-center">{{ s.val }}</p>
            <p class="text-[12px] font-semibold leading-4 tracking-[1.2px] uppercase text-white/50 text-center mt-1">{{ s.label }}</p>
          </div>
        </div>

        <!-- Mobile stats -->
        <div class="lg:hidden grid grid-cols-3 gap-0 w-full mt-10 border-t border-white/10 pt-8">
          <div v-for="s in stats" :key="s.label" class="flex flex-col items-center py-4">
            <p class="text-[30px] font-black leading-8 text-[#C9A84C] text-center">{{ s.val }}</p>
            <p class="text-[10px] font-semibold tracking-[1.2px] uppercase text-white/50 text-center mt-1">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
