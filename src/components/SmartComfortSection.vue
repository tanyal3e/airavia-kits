<script setup lang="ts">
import { useLocale } from "@/composables/useLocale";
import imgApp from "@/imports/AiraviaWeb/2042ee24c0600a5f4fbd095b1cfaac6570237d61.png";
import imgPhone from "@/imports/AiraviaWeb/d7381d15ec81907b1d59591e9edc45d0ad54111d.png";

const { t } = useLocale();
</script>

<template>
  <section class="bg-[#edf0f7] w-full shrink-0 py-14">
    <div class="max-w-[1280px] mx-auto px-6">
      <!-- Section heading -->
      <div class="mb-10">
        <p class="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C]">
          {{ t("smart_label") }}
        </p>
        <h2 class="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">
          {{ t("smart_title") }}
        </h2>
      </div>

      <!-- Full-width image banner -->
      <div class="relative h-[334px] w-full rounded overflow-hidden">
        <!-- Background lifestyle image -->
        <img :src="imgApp" alt="Airavia app lifestyle" class="absolute inset-0 w-full h-full object-cover" />
        <!-- Phone detail — anchored to the left edge as a percentage-scaled layer, no longer assumes a fixed 1280px container -->
        <div class="absolute inset-0 overflow-hidden">
          <img
            :src="imgPhone"
            alt=""
            class="absolute left-0 top-1/2 -translate-y-1/2 h-[178%] w-auto max-w-none object-cover pointer-events-none"
          />
          <!-- Right-to-left gradient fade -->
          <div class="absolute inset-0 bg-gradient-to-l from-[#edf0f7] from-[13.82%] to-[rgba(237,240,247,0)] to-[40.743%]" />
        </div>

        <!-- Floating white info card — anchored to the right edge, vertically centered; never depends on a fixed container width -->
        <div
          class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-[420px] max-w-[488px] bg-white shadow-[0px_4px_7.5px_rgba(0,0,0,0.25)] flex flex-col justify-between gap-4 p-6"
        >
          <div class="flex flex-col gap-3">
            <h3 class="text-[18px] font-semibold leading-7 text-[#09102b]">
              {{ t("smart_card_title") }}
            </h3>
            <p class="text-[14px] font-normal leading-[22.75px] text-[#5b6580]">
              {{ t("smart_card_body") }}
            </p>
          </div>
          <button type="button" class="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#001f6b] hover:text-[#002B8F] transition-colors self-start">
            {{ t("smart_card_cta") }}
            <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
              <path d="M2.708 6.499H10.29" stroke="#001F6B" stroke-width="1.083" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.749 2.458L10.79 6.499L6.749 10.54" stroke="#001F6B" stroke-width="1.083" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
