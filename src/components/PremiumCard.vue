<script setup lang="ts">
defineProps<{
  img: string;
  isBlue?: boolean;
  title: string;
  body: string;
  cta: string;
}>();
</script>

<template>
  <div class="bg-white rounded flex flex-col overflow-hidden flex-1" style="border: 0.625px solid rgba(0,31,107,0.12)">
    <!-- Image area -->
    <div class="h-[192px] shrink-0 relative overflow-hidden">
      <div v-if="isBlue" class="w-full h-full bg-[#001f6b] flex items-center justify-center overflow-hidden">
        <img :src="img" :alt="title" class="w-full h-[200%] object-cover opacity-60" />
      </div>
      <img v-else :src="img" :alt="title" class="w-full h-full object-cover" />
    </div>
    <!-- Content -->
    <div class="flex flex-col gap-3 p-5 flex-1">
      <h3 class="text-[18px] font-semibold leading-7 text-[#09102b]">{{ title }}</h3>
      <p class="text-[14px] font-normal leading-[22.75px] text-[#5b6580] flex-1">{{ body }}</p>
      <button type="button" class="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#001f6b] hover:text-[#002B8F] transition-colors self-start">
        {{ cta }}
        <svg width="13" height="13" fill="none" viewBox="0 0 13 13">
          <path d="M2.708 6.499H10.29" stroke="#001F6B" stroke-width="1.083" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.749 2.458L10.79 6.499L6.749 10.54" stroke="#001F6B" stroke-width="1.083" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>
