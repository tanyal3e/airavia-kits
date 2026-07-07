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
        <!-- Phone detail — positioned and scaled -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute" style="left: -304px; top: -87px; width: 1534px; height: 611px">
            <img :src="imgPhone" alt="" class="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <!-- Right-to-left gradient fade -->
            <div class="absolute inset-0 bg-gradient-to-l from-[#edf0f7] from-[13.82%] to-[rgba(237,240,247,0)] to-[40.743%]" />
          </div>
        </div>

        <!-- Floating white info card -->
        <div
          class="absolute bg-white shadow-[0px_4px_7.5px_rgba(0,0,0,0.25)] flex flex-col justify-between p-6"
          style="left: 742px; top: 51px; width: 488px; height: 207px"
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
