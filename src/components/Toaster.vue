<script setup lang="ts">
import { TransitionGroup } from "vue";
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from "@lucide/vue";
import { toasts } from "@/composables/useToast";

const icons = { info: Info, success: CheckCircle2, warning: AlertTriangle, error: AlertCircle };
const styles = {
  info: "bg-[#D2DCFA] text-[#001F6B] border-[#0057D9]/30",
  success: "bg-[#D4F0E3] text-[#0E7A44] border-[#0E7A44]/30",
  warning: "bg-[#FEF0D9] text-[#994F08] border-[#E87D0D]/30",
  error: "bg-[#FDDDDF] text-[#A81224] border-[#D0182E]/30",
};
</script>

<template>
  <div class="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-80 pointer-events-none">
    <TransitionGroup
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-for="t in toasts"
        :key="t.id"
        :class="['flex items-start gap-2.5 px-4 py-3 rounded border shadow-lg text-sm font-medium pointer-events-auto', styles[t.type]]"
      >
        <component :is="icons[t.type]" :size="16" class="shrink-0 mt-0.5" />
        <span>{{ t.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>
