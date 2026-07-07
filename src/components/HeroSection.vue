<script setup lang="ts">
import { Plane, ChevronDown } from "@lucide/vue";
import { toast } from "@/composables/useToast";
import { useLocale } from "@/composables/useLocale";
import BookingWidget from "./booking/BookingWidget.vue";
import imgHeroBg from "@/imports/AiraviaWeb/Hero.png";

const { t } = useLocale();
</script>

<template>
  <section class="relative min-h-[640px] sm:min-h-[720px] lg:h-[840px] w-full overflow-hidden shrink-0">
    <div class="absolute inset-0">
      <img :src="imgHeroBg" alt="" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/56" />
      <div class="absolute bottom-0 left-0 right-0 h-[591px] bg-gradient-to-t from-[rgba(0,8,23,0.8)] to-transparent" />
    </div>
    <div class="relative lg:absolute inset-0 flex flex-col justify-end pt-32 pb-8 sm:pb-12 lg:pb-20">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 w-full flex flex-col gap-4 lg:gap-6">
        <div class="flex flex-col gap-2 lg:gap-3 max-w-[768px]">
          <h1 class="font-bold text-[34px] leading-[36px] sm:text-[48px] sm:leading-[50px] lg:text-[72px] lg:leading-[72px] tracking-[-1.44px] text-white w-full">
            {{ t("hero_headline") }}
          </h1>
          <p class="text-sm sm:text-base lg:text-xl font-normal leading-normal lg:leading-[32.5px] text-white/75">{{ t("hero_subtitle") }}</p>
          <button type="button" class="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-white/90 hover:text-white transition-colors self-start mt-1" @click="toast.info(t('hero_ticker'))">
            <Plane :size="14" class="text-[#C9A84C] rotate-45 shrink-0" />
            <span class="underline decoration-white/40 underline-offset-4">{{ t("hero_ticker") }}</span>
            <ChevronDown :size="13" class="-rotate-90 shrink-0" />
          </button>
        </div>
        <BookingWidget />
      </div>
    </div>
  </section>
</template>
