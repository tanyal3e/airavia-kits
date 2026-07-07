<script setup lang="ts">
import { useLocale } from "@/composables/useLocale";
import PremiumCard from "./PremiumCard.vue";
import imgBizClass from "@/imports/AiraviaWeb/cf2bda0743d055d11d1ec1dacdad127eb272cd7e.png";
import imgLounges from "@/imports/AiraviaWeb/bad941148dc2700dcf112d1b2dc2d8102c06886e.png";
import imgCorporate from "@/imports/AiraviaWeb/ba5c0f9cc42967709fd1f4394c0a4cf3c97e7dc4.png";

const { t } = useLocale();
</script>

<template>
  <section class="bg-[#f4f6fb] w-full shrink-0 py-14">
    <div class="max-w-[1280px] mx-auto px-6">
      <div class="mb-10">
        <p class="text-[12px] font-bold leading-4 tracking-[1.2px] uppercase text-[#C9A84C] mb-0">{{ t("premium_label") }}</p>
        <h2 class="text-[30px] font-bold leading-9 tracking-[-0.6px] text-[#09102b] mt-3">{{ t("premium_title") }}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <PremiumCard :img="imgBizClass" :title="t('premium_biz_title')" :body="t('premium_biz_body')" :cta="t('premium_biz_cta')" />
        <PremiumCard :img="imgLounges" :title="t('premium_lounge_title')" :body="t('premium_lounge_body')" :cta="t('premium_lounge_cta')" />
        <PremiumCard :img="imgCorporate" is-blue :title="t('premium_corp_title')" :body="t('premium_corp_body')" :cta="t('premium_corp_cta')" />
      </div>
    </div>
  </section>
</template>
