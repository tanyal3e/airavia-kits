<script setup lang="ts">
import { Plane } from "@lucide/vue";
import { useLocale } from "@/composables/useLocale";

export type Route = {
  origin: string;
  originCity: string;
  dest: string;
  destCity: string;
  duration: string;
  price: string;
  img: string;
};

defineProps<{ route: Route }>();

const { t } = useLocale();
</script>

<template>
  <div class="bg-white rounded shrink-0 w-[230px] flex flex-col overflow-hidden" style="border: 0.625px solid rgba(0,31,107,0.12)">
    <!-- Image -->
    <div class="relative h-[160px] shrink-0 overflow-hidden rounded-t">
      <img :src="route.img" :alt="route.destCity" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-[rgba(0,8,23,0.6)] to-transparent" />
      <div class="absolute bottom-3 left-3 bg-[#001f6b] rounded-sm px-2.5 py-0.5">
        <p class="text-[12px] font-semibold leading-4 text-white">Business</p>
      </div>
    </div>

    <!-- Route info -->
    <div class="flex flex-col gap-3 p-5 flex-1">
      <!-- Origin → Dest row -->
      <div class="flex items-center gap-3">
        <div class="flex flex-col items-start">
          <p class="text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#09102b]">{{ route.origin }}</p>
          <p class="text-[12px] font-normal leading-4 text-[#5b6580]">{{ route.originCity }}</p>
          <div class="h-4" />
        </div>
        <div class="flex flex-col items-center gap-1 flex-1">
          <p class="text-[10px] font-normal leading-[15px] text-[#5b6580]">{{ route.duration }}</p>
          <div class="flex items-center gap-1 w-full">
            <div class="flex-1 h-px bg-[rgba(0,31,107,0.12)]" />
            <div style="transform: rotate(5deg)">
              <Plane :size="12" class="text-[#001F6B]" :stroke-width="1.5" />
            </div>
            <div class="flex-1 h-px bg-[rgba(0,31,107,0.12)]" />
          </div>
          <p class="text-[10px] font-normal leading-[15px] text-[#5b6580]">Direct</p>
        </div>
        <div class="flex flex-col items-start">
          <p class="text-[24px] font-bold leading-8 tracking-[-0.6px] text-[#09102b]">{{ route.dest }}</p>
          <p class="text-[12px] font-normal leading-4 text-[#5b6580]">{{ route.destCity }}</p>
          <div class="h-4" />
        </div>
      </div>

      <!-- Price + Select -->
      <div class="flex items-center justify-between pt-3" style="border-top: 0.625px solid rgba(0,31,107,0.12)">
        <div>
          <p class="text-[10px] font-semibold uppercase text-[#5b6580] leading-[15px]">{{ t("dest_from") }}</p>
          <p class="text-[20px] font-bold leading-7 text-[#09102b] font-[JetBrains_Mono,monospace]">{{ route.price }}</p>
        </div>
        <button type="button" class="flex items-center gap-1.5 h-9 px-4 bg-[#001f6b] text-white text-[12px] font-semibold rounded hover:bg-[#002B8F] transition-colors">
          {{ t("dest_select") }}
          <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
            <path d="M2.5 6H9.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.5 3L9.5 6L6.5 9" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
